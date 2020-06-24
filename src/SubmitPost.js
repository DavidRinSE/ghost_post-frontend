import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { newPostAction } from "./redux"
import {
  Select, 
  FormControl, 
  InputLabel,
  OutlinedInput, 
  Button,
  CircularProgress
} from "@material-ui/core"
import { Redirect } from "react-router-dom"
import "./SubmitPost.css"


const SubmitPost = () => {
  const [finished, setFinished] = React.useState(false)
  const [state, setState] = useState({
    content: "",
    type: "Boast"
  })

  const newPostState = useSelector(state => state.newPost)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
        ...state,
        [name]: event.target.value,
    });
  }

  return (
    <div className="submit">
      <h1>Submit A New Post</h1>
      <FormControl fullWidth variant="outlined" style={{marginTop:20}}>
          <InputLabel>Content</InputLabel>
          <OutlinedInput
              value={state.content}
              onChange={handleChange}
              name="content"
              labelWidth={60}
          />
      </FormControl>
      <FormControl variant="outlined" fullWidth className="form-type" style={{marginTop:20, marginBottom:20}}>
          <InputLabel>Type</InputLabel>
          <Select
              native
              value={state.type}
              onChange={handleChange}
              label="Type"
              inputProps={{
                  name: 'type',
              }}
          >
              <option value={"Boast"}>Boast</option>
              <option value={"Roast"}>Roast</option>
          </Select>
      </FormControl>
      <Button
          color="primary"
          variant="contained"
          size="small"
          disabled={!state.content || !state.type || newPostState.loading}
          onClick={() => {
              dispatch(newPostAction(state))
              setFinished(true)
          }} 
      >
          Submit
      </Button>
      {
        newPostState.loading &&
          <CircularProgress size={20} />
      }
      {
         (finished && !newPostState.loading) &&
            <Redirect to="/" />
        }
    </div>
  );
}

export default SubmitPost;