import React,{Component} from 'react';
import './Header.css';

class Header extends Component{
    constructor(){
        super()
        this.state = {
            title:"This is Full-Stack Development",
            body :"User Selected"
        }

    }
    handleCity = (event) =>{
        console.log(event.target.value);
        this.setState({body:`User Selected ${event.target.value}`})
    }
    render(){
       
        return(
            <React.Fragment>
                <h1 className="title">{this.state.title} </h1>

                <div className="dropdown">
                    <select  onChange={this.handleCity}>
                        <option value="Mumbai"> Mumbai </option>
                        <option value="Hyderabad"> Hyderabad </option>
                        <option value="Chennai"> Chennai </option>
                    </select>
                </div>
                <h3 className="selects">{this.state.body}</h3>
                
            </React.Fragment>
        )
    }
}
export default Header