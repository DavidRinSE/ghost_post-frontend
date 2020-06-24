import {createReducer} from "@reduxjs/toolkit"
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import {initialState, asyncCases, createActions, api_domain} from "./helpers"

const FETCH_POSTS = createActions("fetchposts")
export const fetchPostAction = () => dispatch => {
    dispatch(FETCH_POSTS.START())

    return fetch(`${api_domain}/posts/`)
        .then(res => res.json())
        .then(res => dispatch(FETCH_POSTS.SUCCESS(res)))
}

const NEW_POST = createActions("newpost")
export const newPostAction = (data) => dispatch => {
    dispatch(NEW_POST.START())
    const {content, type} = data
    const fetchData = {
        content,
        isBoast: (type === "Boast") ? "True":"False",
        upVotes: 0,
        downVotes: 0
    }
    return fetch(`${api_domain}/posts/`, {method: "POST", body:JSON.stringify(fetchData), headers:{'Content-Type':"application/json"}})
        .then((res) => {
            dispatch(fetchPostAction())
        }).then(() => {
            dispatch(NEW_POST.SUCCESS())
        })
}

const UP_VOTE = createActions("upvote")
const _upVoteAction = (id) => dispatch => {
    dispatch(UP_VOTE.START())

    return fetch(`${api_domain}/posts/${id}/upVote/`, {method: 'POST'}).then(() => dispatch(UP_VOTE.SUCCESS()))
}
export const upVoteAction = (id) => dispatch => {
    dispatch(_upVoteAction(id)).then(() => {dispatch(fetchPostAction())})
}

const DOWN_VOTE = createActions("downvote")
const _downVoteAction = (id) => dispatch => {
    dispatch(DOWN_VOTE.START())

    return fetch(`${api_domain}/posts/${id}/downVote/`, {method: 'POST'}).then(() => dispatch(DOWN_VOTE.SUCCESS()))
}
export const downVoteAction = (id) => dispatch => {
    dispatch(_downVoteAction(id)).then(() => {dispatch(fetchPostAction())})
}

const reducers = {
    upVote: createReducer(initialState, {
        ...asyncCases(UP_VOTE)
    }),
    downVote: createReducer(initialState, {
        ...asyncCases(DOWN_VOTE)
    }),
    fetchPosts: createReducer(initialState, {
        ...asyncCases(FETCH_POSTS)
    }),
    newPost: createReducer(initialState, {
        ...asyncCases(NEW_POST)
    })
}

export const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    ...reducers
})