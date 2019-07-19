import React, {Component} from 'react';

export default class Hero extends Component{
    constructor(){
        super()
        this.state = {
            showHeroInfo : false
        }
        this.onDeletehandler = this.onDeletehandler.bind(this)
    }

    onDeletehandler(){

this.props.deleteHandler()
    }
  
    render(){
        return (<div>   <h3><button 
            onClick={ 
                () => { 
                    this.setState({ showHeroInfo : !this.state.showHeroInfo})
                    } }>Info</button> | { this.props.herodata.title } 
                    <button 
              onClick={this.onDeletehandler.bind(this)}>Delete</button>
</h3> 
           {
               this.state.showHeroInfo ? (
                <ul>
                    <li>{ this.props.herodata.fullname }</li>
                    <li>{ this.props.herodata.city }</li>
                    <li>{ this.props.herodata.power }</li>
                </ul>
               ) : null
           }
   
        
        </div>)
    }
}