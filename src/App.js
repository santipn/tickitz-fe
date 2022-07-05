import './App.css';
import React from 'react';
import Homepage from './pages/Home/homepage';
import SignIn from './pages/SignIn/signIn';
import SignUp from './pages/SignUp/signUp';
import ResetPassword from './pages/ResetPassword/resetPassword';
import ViewAll from './pages/ViewAll/viewAll';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<Homepage />} />
      <Route path='/signin' element = {<SignIn />} />
      <Route path='/signup' element = {<SignUp />} />
      <Route path='/resetpassword' element = {<ResetPassword />} />
      <Route path='/viewall' element = {<ViewAll />} />
    </Routes>
  )
}
export default App;
