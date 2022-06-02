import React, { useState, useEffect } from "react";
import axios from "axios";
function UserLoader() {
  const [user, setUser] = useState({});

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
  return <div>UserLoader</div>;
}

export default UserLoader;
