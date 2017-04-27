import React, { Component, PropTypes } from 'react';

class SimpleForm extends Component {
  constructor() {
    super();
    this.state = {song: ""};
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(event) {
  	this.setState({song: event.target.value});
  }

  render() {
  	var placeholder = this.props.inputFieldPlaceholder;
  	var disabled = this.state.song === "";

    return (
      <div className='add-new-form'>
      	
      	<label htmlFor='add-new-song'>
      		{this.props.title}
      	</label>
      	<input id='add-new-song' type='text' placeholder={placeholder} onChange={this.inputChange} />
      	<button disabled={disabled} onClick={() => this.props.onSubmit(this.state.song)}/>
      </div>
    );
  }
}

SimpleForm.PropTypes = {
};

export default SimpleForm;
