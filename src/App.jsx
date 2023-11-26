import React, { useState, useEffect } from 'react';
import Body from './components/Body';
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterPage from './components/Register';
import { CookiesProvider, useCookies } from "react-cookie";
import Calculadora from './components/Calculadora';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  function handleRegister(user) {
    setCookie("user", user, { path: "/" });
  }


  return ( <>
    <CookiesProvider>
    
      <div>
        {cookies.user ? (
          <Body user={cookies.user} />
        ) : (
          <RegisterPage onRegister={handleRegister} />
        )}
      </div>
    </CookiesProvider>
    </>
  );
}

export default App;
