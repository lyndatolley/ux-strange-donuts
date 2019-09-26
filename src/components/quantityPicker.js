import React from 'react'
import "../components/omnes.css"
import "../components/qty-picker.scss"
import imageList from "../images/imageList"

class Quantity extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {value : 1}
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
    }
    
    increment() {
        this.setState(prevState => ({value: ++prevState.value}));
      }
      
      decrement() {
        this.setState(prevState => ({ value: prevState.value > 1? --prevState.value : 1}));
      }
    
    render() {
      
      return (
        <div>
        <div className="quantity-input">
          <button className="quantity-input__modifier quantity-input__modifier--left" onClick={this.decrement}>
          <img src={imageList.minus}></img>
          </button>
          <input className="quantity-input__screen" type="text" value={this.state.value} readonly />
          <button className="quantity-input__modifier quantity-input__modifier--right" onClick={this.increment}> <img src={imageList.plus}></img>
          </button>  
        </div>  
        </div>
      );
    }
  }
  export default Quantity;