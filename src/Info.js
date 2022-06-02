import React, { useState, useEffect } from "react";
import axios from "axios";
function Info() {
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

  return (
    <div class="box">
      <div class="card">
        <div class="imgBx">
          <img src="https://picsum.photos/400/500" alt="images" />
        </div>
        <div class="details">
          <h2>
            {user.name}
            <br />
            <span>{user.website}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Info;
