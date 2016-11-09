import React from 'react';
import './App.css';
import Inventory from './Inventory'


var App = React.createClass({
  getInitialState: function() {
    return { data: [] }
  },

  componentWillMount: function() {
    return fetch('/api/shoe')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({
          data: data
        });
      })
      .catch((error) => {
        console.log(error)
      });
  },

  render: function() {
    return(
      <div className="Top-Selling-Items">
        <Inventory items={this.state.data} />
      </div>
    )
  }

})

export default App;
