import React, { useState } from "react";
import { UserProvider } from "./store/usercontext";
import Userprofile from "./components/userprofile";
import PropDrill from "./components/propdrill";
import { Provider } from "react-redux";
import store from "./store/userstore";
import Counter from "./components/counter";

function App() {
  const [propdrill, setpropdrill] = useState("User");
  return (
    <>
      {/* context api */}
      <UserProvider>
        <Userprofile />
      </UserProvider>
      {/* Prop Drilling */}
      <PropDrill user={propdrill} setpropdrill={setpropdrill} />
      {/* Redux */}
      <Provider store={store}>
        <Counter />
      </Provider>


    </>
  )
}

export default App
