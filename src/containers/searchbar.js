import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/index';

class Searchbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            city:'Bengaluru'
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    componentDidMount(){
        console.log(this.props,'didmount');
        this.props.fetchWeather(this.state.city)
    }
    onInputChange(event){
        this.setState({city:event.target.value});
    }
    onFormSubmit(event){
        console.log('im hererrre')
        event.preventDefault();
        this.props.fetchWeather(this.state.city)
       // this.setState({city:''})
    }
    render(){
        console.log('ffff')
        return (
            <div>
                <div className="row justify-content-md-center">
            <form className="input-group searchbar col-md-6" onSubmit={this.onFormSubmit} >
                <input 
                    placeholder="Enter city name to get 5day forecast"
                    className="form-control has-error"
                    onChange={this.onInputChange}
                    value={this.state.city}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary submitBtn">Go!</button>
                </span>
            </form></div>
            {/* <div className="row justify-content-md-center">
                <div className="col-md-4">
                    <div className="alert alert-danger errorMsg">Please enter a valid city name</div>
                </div>
            </div> */}
            </div>
        
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch);
}
export default connect(null,mapDispatchToProps )(Searchbar)