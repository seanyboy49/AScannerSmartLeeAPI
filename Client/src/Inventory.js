import React from 'react';
import './App.css';

var Inventory = React.createClass({
  render: function() {
    var shoes = this.props.items.map(function(shoe) {
      return(
        <div className="Shoe-Card-Container" key={shoe.id}>
          <div className="Image">
            <img src= "Classic-Short.jpg" width="100%" height="auto"/>
          </div>
          <div className="Shoe-Stats">
           <h1>{shoe.style.brand.name} {shoe.style.name}</h1>
           <p>Color: {shoe.color}</p>
           <p>Quantity: {shoe.quantity}</p>
           <p>Size: {shoe.size}</p>
           <p>UPC Code: {shoe.upc}</p>
          </div>
       </div>
      )
    })
    return (<div>{shoes}</div>)
    }
})

module.exports = Inventory
