import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFood} from '../actions/index';

class FoodList extends Component {
    creatFoodListItems(){
        let listItems = this.props.foods.map(
            (eachFood)=>{
                return(
                    <li key={eachFood.id} onClick={
                        ()=>{
                            this.props.selectFood(eachFood)
                        }
                    }>Food's name: {eachFood.name}</li>
                );
            }
        );
        return listItems;
    }
    
    render(){
        return(
            <ul>
               
             {this.creatFoodListItems()}
             
            </ul>
        );
    }
   
}
function mapStateToProps(state) {
 return {
     foods: state.foods
 }       
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({selectFood:selectFood},dispatch);
}
// container components to connnect the presentational components to redux;
let FoodContainer = connect(mapStateToProps,mapDispatchToProps)(FoodList);
export default FoodContainer;
