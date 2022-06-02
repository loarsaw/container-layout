import React from "react";
import UserInfo from "./Info";
import UserLoader from "./UserLoader";
function App() {
  return (
    <>
      <UserLoader>
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;
