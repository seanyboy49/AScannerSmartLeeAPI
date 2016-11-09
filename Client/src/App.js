import React from 'react';
import $ from 'jquery'
import './App.css';


var App = React.createClass({
  getInitialState: function() {
    return { data: [] }
  },

  componentWillMount: function() {
    $.ajax({
      url: `/api/shoe`,
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
        {this.state.data.map(function(shoe) {
          return(
            <div className="Shoe-Card-Container" key={shoe.id}>
              <div className="Image">
                <img src= "Classic-Short.jpg" width="100%" height="auto"/>
              </div>
            <div className="Shoe-Stats">
               <h1>{shoe.brand} {shoe.style}</h1>
               <p>Quantity: {shoe.quantity}</p>
               <p>Size: {shoe.size}</p>
               <p>UPC Code: {shoe.UPC}</p>
               <p>Description: {shoe.description}</p>
             </div>
           </div>
          )
        })}
      </div>
    )
  }
})

export default App;
