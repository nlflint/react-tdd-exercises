import React, { Component, PropTypes } from 'react';

class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
    	open: false
    }
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
  	this.setState({open: !this.state.open});
  }

  render() {
  	var dropDownMenu = this.state.open
  		? (
  			<ul className="dropdown__menu">
      		{this.props.items.map(x => <li onClick={this.props.onSelect(x)}>{x}</li>)}
      		</ul>)
      	: "";
    return (
      <div className='dropdown__toggle' onClick={this.onToggle}>
      	{this.props.items.map(x => x)}
      	{dropDownMenu}
      </div>

      
    );
  }
}

Dropdown.propTypes = {
};

export default Dropdown;
