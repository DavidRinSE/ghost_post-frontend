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

    return (
        <div className="posts-wrap">
            { posts.result && 
                posts.result.map(data => (
                    <Post key={Math.random()} data={data}/>
                ))
            }
        </div>
    )
}

export default PostsList