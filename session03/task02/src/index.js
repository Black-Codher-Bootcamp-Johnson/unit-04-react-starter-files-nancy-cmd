import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

function App() {
  return (
      <Profile name="Nancy" bio="I am learning React, :) this is my REACTion so far :)" />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

