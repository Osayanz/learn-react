import React from "react";
import Header from "./Header"
import Footer from "./Footer"
/*import Food from "./Food"*/
/*import Card from "./Card"*/
/*import Button from "./Button/Button"*/
/*import Student from "./Student";*/
/*import UserGreeting from "./UserGreeting";*/
/*import List from "./List"*/
/*import ProfilePicture from "./ProfilePicture.jsx";*/
/*import MyComponent from "./MyComponent.jsx";*/
import Counter from "./Counter.jsx"
/*import Form from "./Form.jsx";*/
/*import ColorPicker from "./ColorPicker";*/

function App() {

  {/*const fruits = [{Id: 1, name: "Apple", calories: 95},
                  {Id: 2, name: "Orange", calories: 45},
                  {Id: 3, name: "Banana", calories: 105},
                  {Id: 4, name: "Pineapple", calories: 452},
                  {Id: 5, name: "Coconut", calories: 354}] ;

  const vegetables = [{Id: 6, name: "Potatoes", calories: 110},
                      {Id: 7, name: "Celery", calories: 15},
                      {Id: 8, name: "Carrots", calories: 25},
                      {Id: 9, name: "Corn", calories: 63},
                      {Id: 10, name: "Broccoli", calories: 50}] ;*/}
  
    return(
      <>
          <Header/>

          {/*<ColorPicker/>*/}

          {/*<Form/>*/}

          <Counter/>

          {/*<Button/>*/}

          {/*<ProfilePicture/>*/}

          {/*<Food/>*/}

          {/*<Card/>*/}

          {/*<Student name="Oshan" age={23} isStudent={true}/>
             <Student name="Sanka" age={32} isStudent={false}/>
             <Student name="Larry"/>*/}

          {/*<UserGreeting isLoggedIn={true} />*/}

          {/*{fruits.length > 0 && <List items={fruits} category="Fruits"/>}
             {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}*/}

          {/*<MyComponent/>*/}

          <Footer/>
          
      </>
  ); 
}

export default App;
