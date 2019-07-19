import React, {Component} from 'react'
import Child from './Child';

const styles ={border :'2px solid blue', height :300, marginTop :20, margin: 20, width : '80%'}

class Parent extends Component{
    render(){
        return (<div style= {styles}>
            <h1  style ={{textAlign : 'center'}}> Parent</h1>
            <Child></Child>
                </div>)
    }
}


export default Parent
