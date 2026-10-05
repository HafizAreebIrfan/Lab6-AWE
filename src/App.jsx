import React, { useState } from "react";
import { UserProvider } from "./store/usercontext";
import Userprofile from "./components/userprofile";
import PropDrill from "./components/propdrill";
import { Provider } from "react-redux";
import store from "./store/userstore";
import Counter from "./components/counter";
import { ThemeProvider } from "./store/ThemeContext";
import ThemeWrapper from "./components/themewrapper";

function App() {
  const [propdrill, setpropdrill] = useState("User");
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <ThemeWrapper>
            <UserProvider>
              <Userprofile />
            </UserProvider>
            <PropDrill user={propdrill} setpropdrill={setpropdrill} />
            <Counter />
          </ThemeWrapper>
        </ThemeProvider>
      </Provider>


    </>
  )
}

export default App
