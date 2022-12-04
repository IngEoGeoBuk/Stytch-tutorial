import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import { StytchHeadlessClient } from "@stytch/vanilla-js/headless";
import { StytchProvider } from '@stytch/react'
import "./App.css";

const App = () => {
  const stytchClient = new StytchHeadlessClient(process.env.REACT_APP_STYTCH_PUBLIC_TOKEN!)
  const logout = () => {
    stytchClient.session.revoke();
  }

  return (
    <div className="App">
      <Router>
        <Link to="/signup"> SignUp</Link>
        <br/>
        <Link to="/auth"> Login</Link>
        <StytchProvider stytch={stytchClient}>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/resetpassword/*" element={<ResetPassword />} />
          </Routes>
          <button onClick={logout}>Logout</button>
        </StytchProvider>
      </Router>
    </div>
  )
}

export default App