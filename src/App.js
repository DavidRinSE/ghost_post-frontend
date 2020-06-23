import React from 'react';
import Posts from './Posts'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    this.fetchPosts()
  }
  
  async  fetchPosts(){
    const fetchData = await fetch('http://localhost:8000/posts/')
    const fetchJSON = await fetchData.json()
    this.setState({posts: fetchJSON})
    console.log(this.state.posts)
  }

  render() {
    return (
      <div>
        <header>
          <h1>👻 Ghost Post</h1>
        </header>
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
