import React , {Component} from 'react';


class IronMan extends Component{
render(){
  return (<div>
    <h1>IronMan Application| {this.props.match.params.qty}</h1>
  </div>)
}

}

export default IronMan;