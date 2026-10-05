import React, { useContext } from "react";
import { UserContext, UserProvider } from "../store/usercontext";
const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
        <h1>=====From Context Api=====</h1>
      <h1>Welcome, {user}!</h1>
      <button onClick={() => setUser("John Doe")}>Login</button>
    </div>
  );
};
export default UserProfile;