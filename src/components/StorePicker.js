import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  }

  // constructor() {
  //   // runs React.Component first
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  myInput = React.createRef();
  // This would require the constructor method to bind this to the method
  // goToStore(event) {
  //   event.preventDefault();
  //   console.log(this);
  // }

  // Alternativly you can define a property to not need constructor
  // bound to instance
  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input type="text" ref={this.myInput} required placeholder='Store Name' defaultValue={getFunName()}/>
        <button type='submit'>Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;