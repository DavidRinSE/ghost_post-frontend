import React from "react"
import Moment from 'react-moment';
import {Button} from "@material-ui/core"
import { useDispatch, /*useSelector*/ } from "react-redux";
import { upVoteAction, downVoteAction } from "../redux"

const Post = (props) => {
    const {data} = props
    // const upVoteState = useSelector(state => state.upVote)
    // const downVoteState = useSelector(state => state.downVote)
    const dispatch = useDispatch()

    return (
        <div className="post">
            <h1 className="post-title">{ data.isBoast ? "Boast":"Roast"}</h1>
            <p className="post-content">{ data.content }</p>
            <p className="post-time"><Moment format="MM/DD/YYYY HH:mm">{ data.date }</Moment></p>
            <p className="post-votes">
                {data.downVotes} 
                <Button
                    color="primary"
                    variant="outlined"
                    size="small"
                    style={{marginLeft:2, marginRight:2}}
                    onClick={() => {dispatch(downVoteAction(data.id))}}>
                    Down
                </Button> 
                    | {data.upVotes} 
                <Button
                    color="primary"
                    variant="outlined"
                    size="small"
                    style={{marginLeft:2, marginRight:2}}
                    onClick={() => dispatch(upVoteAction(data.id))}>
                    Up
                </Button>
            </p>
        </div>
    )
}

export default Post