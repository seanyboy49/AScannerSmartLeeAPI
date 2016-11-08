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
      <div>
        {this.state.data.map(function(shoe) {
          return(
            <div>
             <p>{shoe.brand}</p>
             <p>{shoe.style}</p>
             <p>{shoe.quantity}</p>
             <p>{shoe.size}</p>
             <p>{shoe.UPC}</p>
             <p>{shoe.description}</p>
           </div>
          )
        })}
      </div>
    )
  }
})


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//     }
//     this.componentWillMount = this.componentWillMount.bind(this);
//   };
//
//   componentWillMount = () => {
//     console.log("Inside allShoes")
//      fetch(`/api/shoe`)
//      .then(
//        function(response) {
//          if (response.status !== 200) {
//            console.log('Looks like there was a problem');
//            return;
//          }
//          response.json().then(function(data) {
//            this.setState({data: data})
//          }).bind(this);
//        }
//      )
//   }
//
//
//
//   render () {
//     return(
//     <div>
//         {this.state.data}
//     </div>
//     )
//   }
// }

export default App;
