import React, {Component} from 'react'
import Parent from './Parent'
import { FamilyProvider} from '../familyContext'

class Grandparent extends Component{
    render(){
        return (
        <FamilyProvider value ="hello from grandparent">
        <div style={{border :'2px solid green', height :400}}>
            <h1 style ={{textAlign : 'center'}}> Grandparent</h1>
            <Parent/>
        </div>
        </FamilyProvider>)
    }
}

export default Grandparent