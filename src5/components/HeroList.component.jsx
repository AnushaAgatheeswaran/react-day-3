import React , {Component} from 'react';
import Heading from './Heading.component';
import Hero from './Hero.component';


class HeroList extends Component{
constructor(){
  super()
  this.state = {
    heroes :[
      {title :"Ironman", city: "NY", power: 7, fullname :"Tony Stark"},
      {title :"Batman", city: "Gotham", power: 6, fullname :"Bruce Wayne"},
      {title :"SpiderMan", city: "NY", power: 8, fullname :"Peter Parker"},
      {title :"Superman", city: "Metropolis", power: 9, fullname :"Clark Kent"},
    ]
  }

}
heroDelete =(val) =>{
  let updatedheroes = this.state.heroes.filter(hero => hero.title !== val);
  this.setState({
    heroes: updatedheroes
  })
}
  

render(){
  return (<div>
    <Heading></Heading>
    <hr/>
    {this.state.heroes.map((hero, idx) => {
      return <Hero key ={idx} herodata={hero} deleteHandler ={this.heroDelete.bind(this, hero.title)}/>
    })}

  </div>)
}

}

export default HeroList;