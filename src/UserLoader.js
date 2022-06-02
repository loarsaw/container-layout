import React, { useState, useEffect } from "react";
import axios from "axios";
function UserLoader({ children }) {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const person = res.data[Math.floor(Math.random() * 10)];
        const newPerson = {
          name: person.name,
          website: person.website,
        };
        setUser(newPerson);
      });
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
}

export default UserLoader;
