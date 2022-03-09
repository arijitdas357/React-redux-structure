import logo from './logo.svg';
import React from 'react';
import './App.css';
import { useDispatch , useSelector } from "react-redux";



function App(props) {
  const value = useSelector((state) => state);
 console.log(value);
 const dispatch = useDispatch();



  //formdata object


return (
   <div >
    <button onClick={ () =>  dispatch({ type: "CREATE_BATTLE_REQUEST"}) } > Submit </button>
    <button onClick={ () =>  dispatch({ type: "CREATE_NEW_POST_REQUEST",payload:{
    "name": "morpheus",
    "job": "leader"
}}) } > POST </button>
   </div>
  );
}






export default  App;
