import React from 'react';
import './App.css';

// function allShoes(){
//   return fetch(`/api/shoe`).then(function(response) {
//     console.log(response)
//   })
// }


var App = React.createClass({
  getInitialState: function() {
    return {data: []}
  },

  componentWillMount: function() {
    console.log("Inside allShoes")
     fetch(`/api/shoe`)
     .then(
       function(response) {
         if (response.status !== 200) {
           console.log('Looks like there was a problem');
           return;
         }
         response.json().then(function(data) {
           console.log(data);
         });
       }
     )
  },

  render: function () {
    return( <div>
      {this.state.data}
    </div>
    )
  }
})

export default App;
