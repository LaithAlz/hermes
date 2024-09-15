import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../Firebase/context';
import { ChatProvider } from '../ChatComponent/ChatContext';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Home from '../Home/Home';
import NewChatComponent from '../NewChatComponent/NewChatComponent';
import PostChat from '../PostChat/PostChat';
import ChatComponent from '../ChatComponent/ChatComponent';

function App() {

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/newchat", element: <NewChatComponent /> },
  ];

  return ( 
    <>
      <AuthProvider>
        <Router>
          <Routes>
            {routes.map(route => {
              if (route.path === "/newchat") {
                return (
                  <Route 
                    key={route.path} 
                    path={route.path} 
                    element={
                      <ChatProvider>{route.element}</ChatProvider>
                    } 
                  />
                );
              }
              return <Route key={route.path} path={route.path} element={route.element} />;
            })}
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
