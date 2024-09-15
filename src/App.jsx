import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Translators from './Translators';
import Login from './Login';
import SignUp from './SignUp';
import { useState, useContext, useEffect } from 'react';
import { AuthProvider } from './Firebase/context';

function App() {

  const routes = [
    { path: "/", element: <Translators/> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
  ];
  
  return ( 
    <>
      <AuthProvider>
      <Router>
        <Routes>
          {routes.map(route => (<Route key={route.path} path={route.path} element={route.element} />))}
        </Routes>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;