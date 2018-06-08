import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchWeather} from "../actions/index";

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    //Remember that ALL browser event handlers such as onClick or onChange come with event object
    onInputChange(event){
        this.setState({term : event.target.value}); //this is undefined therefore it must be bound by .bind
    }

    onFormSubmit(event){
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a 5-day forecast"
                    className="form-control"
                    onChange={this.onInputChange}
                    value={this.state.term}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

/*
1. User submit form with term
2. Fetchweather is bound by connect function in reduc
3. fetchweather is an action creator defined in actions/index
4. Action creator makes the request to the API
5. FetchWeather is made available by reducers/index

Action creator creates the action, reducers receives the outcome
 */