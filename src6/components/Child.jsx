import React, {Component} from 'react'
import {FamilyConsumer} from '../familyContext'

const styles ={border :'2px solid red', height :100, marginTop :20, margin: 40,  width : '80%'}

class Child extends Component{
    render(){
        return (<div style= {styles}>
            <h1  style ={{textAlign : 'center'}}> Child</h1>
            <FamilyConsumer>
                {
                    value => {
                       return <h1>{value}</h1>
                    }
                }
               
            </FamilyConsumer>
                </div>)
    }
}


export default Child
