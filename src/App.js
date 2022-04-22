
import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, fs } from './config/config';
import { doc, getDoc } from 'firebase/firestore';
import AddStudent from './components/AddStudent';

const App= () => {

  const GetCurrentUser = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          getDoc(doc(fs, 'users', user.uid)).then((snapshot) => {
            setUser(snapshot.data().Fullname);
          });
        } else {
          setUser(null);
        }
      });
    }, []);

    return user;
  };
  const user = GetCurrentUser();
  return (
    <>
    
    <Router>
    <Navbar user = {user}/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/addstudent" element={<AddStudent />}/>
      <Route path="/signup" element={<SignUp />}/>
    </Routes>
  </Router></>
  )
}

export default App;