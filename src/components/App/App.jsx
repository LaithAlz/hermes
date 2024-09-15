import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../Firebase/context";
import { ChatProvider } from "../ChatComponent/ChatContext";
import Home from "../Home/Home";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import ChatComponent from "../ChatComponent/ChatComponent";
import NewChatComponent from "../NewChatComponent/NewChatComponent";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/newchat"
            element={
              <ChatProvider>
                <NewChatComponent />
              </ChatProvider>
            }
          />
          <Route
            path="/conversation/:conversationId"
            element={
              <ChatProvider>
                <ChatComponent />
              </ChatProvider>
            }
          />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
