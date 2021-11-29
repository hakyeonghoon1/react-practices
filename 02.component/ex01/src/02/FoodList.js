import React,{Component} from "react";
import ListItem from "./ListItem";

export default class FoodList extends Component{

    render(){
        const components =[];
        // const foods = this.props.foods;
        // for(let i = 0;i<foods.length;i++){
        //     components[i]=<ListItem name={foods[i].name} quantity={foods[i].quantity}/>
        // }

        // this.props.foods.forEach(function(food){
        //     components.push(<ListItem name={food.name} quantity={food.quantity}/>);
        // });

        const r = [1,2,3,4].map(function(e){
            return e*e;
        });
        console.log(r);

        //const f = this.props.foods.map((food) => <ListItem name={food.name} quantity={food.quantity}/>);
        //console.log(f);
        return(
            <ul>
                {this.props.foods.map((food) => <ListItem name={food.name} quantity={food.quantity}/>)}
            </ul>
        )
    }
}
