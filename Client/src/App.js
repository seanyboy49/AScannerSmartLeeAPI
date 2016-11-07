import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function allShoes(){
  return fetch(`/api/shoe`).then(function(response) {
    console.log(response)
  })
}


var App = React.createClass({

  render: function () {
    return <div>
      {allShoes()}
    </div>;
  }
})

export default App;
