import React from 'react';
import $ from 'jquery'
import './App.css';
import Inventory from './Inventory'


var App = React.createClass({
  getInitialState: function() {
    return { data: [] }
  },

  componentWillMount: function() {
    $.ajax({
      url: '/api/shoe',
      dataType: "json",
      success: function(data) {
        this.setState({data: data})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this, status, err.toString())
      }.bind(this)
    })
  },

  render: function() {
    return(
      <div className="Top-Selling-Items">
        // {console.log(this.state.data, 'this.state.data')}
        <Inventory items={this.state.data} />
      </div>
    )
  }

})

export default App;
