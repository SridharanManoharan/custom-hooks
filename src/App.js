import React from 'react';
import User from '../src/components/user/user.component'
import UserReducerExample from '../src/components/user/user-reducer.component'
import Post from '../src/components/post/post.component'
import './App.css';

function App() {
  return (
    <div className="App">
      <UserReducerExample />
      <User userId={5} />
      <Post postId={1} />
    </div>
  );
}

export default App;
