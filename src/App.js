import React, { useContext, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Heder from "./Heder"
import Home from './Home';
import Chekout from './Chekout';
import Login from './Login';
import Payment from "./Payment";
import { StateContext } from "./StateProvider";
import { auth } from './firebase'
import {loadStripe} from  '@stripe/stripe-js' 
import {Elements} from  '@stripe/react-stripe-js' 
import Orders from './Orders';
const promise=loadStripe (
    'pk_test_51OXkDULpmqR7VJJrlwhkbVs988Yw0b5RoWWE6R4717aHu5jluXmOVY8QaO5M5JHWNDpeiDuglNsRICoFP97iZki300eadGsLDU'
);
function App() {
    const [{user}, dispatch] = useContext(StateContext);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
          dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });

    return () => {
      unsubscribe();
    }

  }, [dispatch]);
  console.log("user is ---->", user);
  return (
    <Router>
    <div className="app">
      <Routes>
        <Route path="/orders" element={<><Heder /><Orders /> </>} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" 
        element={
           <>
            <Heder />
            <Elements stripe={promise}>
             <Payment />
            </Elements>
          </>
        } 
       />
        <Route path="/checkout" element={<><Heder /><Chekout /> </>} />
        <Route path="/" element={<><Heder /><Home /> </>} /> 
      </Routes>
      </div>
      </Router>
    );
    }

export default App;



          
        