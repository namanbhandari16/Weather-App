import React from 'react';

class SearchBar extends React.Component{
	constructor(props){
	super(props);
	this.state={term: ''};
	this.onInputChange=this.onInputChange.bind(this);

}
	onInputChange(event){
		this.setState({term:event.target.value})
	}
	onFormSubmit = (event) => {event.preventDefault();
			this.props.onSubmit(this.state.term);
	}
	render(){
		return( <div className="ui segment">
			<form onSubmit={this.onFormSubmit} className="ui form">
				<div className="field">
					<input style={{width:'70%',height:'30px',padding:'10px',margin:'10px'}}type="text" value={this.state.term} onChange={this.onInputChange} placeholder="Enter City Name to check weather"/>
				</div>
			</form>
			</div>


			);
	}
}

export default SearchBar;