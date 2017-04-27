import React, { Component } from 'react';

class List extends Component {
  constructor() {
    super();
    this.state = {
    	names: [],
    	current: ""
    };
    this.handleInputOnChange = this.handleInputOnChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    var nothingText = this.state.current === "" && this.state.names.length === 0
      ? "Nothing here yet :("
      : "";



    return (  
      <div className='content'>
        {nothingText}
        {this.state.names.map(name => name)}
      	<input onChange={this.handleInputOnChange}></input>
      	<button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }

  handleInputOnChange(event) {
  	
  }

  onSubmit(event) {
    this.setState((prevState, props) => {
      var appendedNames = prevState.names.concat(prevState.current);
      return {names: appendedNames};
});
  }

}

export default List;
