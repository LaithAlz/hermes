import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../Firebase/context';
import Translators from '../Translators';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

function App() {

  const routes = [
    { path: "/", element: <Translators/> },
    { path: "/signin", element: <SignIn /> },
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