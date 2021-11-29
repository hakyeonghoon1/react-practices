import React,{Component} from "react";
import ListItem from "./ListItem";

export default class FoodList extends Component{

    render(){
        
        return(
            <ul>
                <ListItem name='Egg' quantity='11'/>
                <ListItem name='Milk' quantity='20'/>
                <ListItem name='Bread' quantity='5'/>
            </ul>         
        )
    }
}
