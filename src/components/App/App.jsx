import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../Firebase/context';
import { ChatProvider } from '../ChatComponent/ChatContext';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import ChatComponent from '../ChatComponent/ChatComponent';
import HomePage from '../HomePage/HomePage';
import NewChatComponent from '../NewChatComponent/NewChatComponent';
import PostChat from '../PostChat/PostChat';

function App() {

  const routes = [
    { path: "/", element: <ChatComponent/> },
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/test2", element: <HomePage /> },
    { path: "/test3", element: <NewChatComponent /> },
    { path: "/test4", element: <PostChat /> },
  ];

  return ( 
    <>
      <AuthProvider>
        <Router>
          <Routes>
            {routes.map(route => {
              if (route.path === "/") {
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
