import React from 'react';
import './App.css';

class App extends React.Component {
  
  componentDidMount(){
    this.fetchPosts()
  }
  
 async  fetchPosts(){
   const fetchData = await fetch('http://localhost:8000/posts/')
   const fetchJSON = await fetchData.json()
   console.log(fetchJSON)
 }

  render() {
    return (
      <div>
        <header>
          <h1>👻 Ghost Post</h1>
        </header>
      </div>
    );
  }
}

export default App;
