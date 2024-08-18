import './food.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Foodlist from './components/foodlist';
import ErrorMessage from './components/ErrorMessage';
import './components/learningItem.css';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';

function App(){
  //  let fooditem =[]
   //let fooditem =['Sabzi' , 'Green Vegetables' , 'Roti' , 'Salad' ,'Milk' ,'Ghee']
   let [ textToShow , setTextState ]= useState('Enter the elements that you want to add');
   let [fooditem , setFoodItems]= useState([
    'Sabzi' , 
    'Green Vegetables' , 
    'Roti' ]);

    console.log(`Current value of textState : ${textToShow}`)
    //used onChange method 
  const onKeyDown =(event)=>{
    if(event.key === 'Enter')
    {
      let newFoodItem = event.target.value;

        // remove the input tag value
      event.target.value ="";                        

      //spread operator to add new element in the existing foodarray
      let newItems=[...fooditem , newFoodItem]     
      setFoodItems(newItems);
      console.log(`Food value enter is ` + newFoodItem);

      }
   
  }
  return <>
  <Container>         
      <div className="food-list"><u> Healthy Food</u> </div>
      <FoodInput handlekeyDown ={onKeyDown}></FoodInput>
      <ErrorMessage items={fooditem}></ErrorMessage>
      <Foodlist key={fooditem} items={fooditem}></Foodlist>

    </Container>
</>
}
export default App;