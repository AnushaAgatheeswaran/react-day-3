import React, {Component as comp} from 'react';// as to change the name of non-default component
import PropTypes from 'prop-types'

export default class FirstComponent extends  comp{
    static defaultProps ={          //DEFAULT PROPS SET UP AS STATIC IN CLASS LEVEL
        message : "Default msg"
    }
     render(){
         return <div>
         <h1> Hello from first Component {this.props.message + this.props.second }</h1>
          {this.props.children}{/* <!-- GETS CONTENT INLINE--> */}
         </div>   
     }
}

FirstComponent.defaultProps ={ // CAN BE USED IN FUNCTION AND CLASS
    message :"Default 2"
}

 function FirstComponentfunc(props){ // FUNCTION AS CLASS , FUNCTIONS OCCUPY LESS MEMORY
    return <h1>Hello from func {props.message }</h1> // SEND props as attributes to function
}


Function.propTypes ={
    second: PropTypes.string.isRequired
}