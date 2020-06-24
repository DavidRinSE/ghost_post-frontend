import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post"
import {fetchPostAction} from "../redux"
import "./Posts.css"

const PostsList = (props) => {
    let posts = useSelector(state => state.fetchPosts)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!posts.result && !posts.loading){
            dispatch(fetchPostAction())
        }
    })

    const getPostElements = () => {
        let postArr = []
        let sort = []

        switch(props.viewState.filter){
            case 'boasts':
                postArr = [...posts.result].filter(post => post.isBoast)
                break;
            case 'roasts':
                postArr = [...posts.result].filter(post => !post.isBoast)
                break;
            default:
                postArr = [...posts.result]
        }

        switch(props.viewState.sort) {
            case 'votes':
                sort = postArr.sort((a, b) => {
                    if((a.upVotes - a.downVotes) > (b.upVotes - b.downVotes)){
                        return -1
                    } else if ((a.upVotes - a.downVotes) < (b.upVotes - b.downVotes)) {
                        return 1
                    } else {
                        return 0
                    }
                })
                break;
            default:
                sort = postArr
                break;
        }
        
        const postElements = sort.map(data => (
            <Post key={Math.random()} data={data}/>
        ))
        return postElements
    }

    return (
        <div className="posts-wrap">
            { posts.result && getPostElements() }
        </div>
    )
}

export default PostsList