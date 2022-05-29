import React, { useState, useEffect } from "react";

function Info() {
  const [user, setUser] = useState({});

  const getUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const { first, last } = person.name;
    const newPerson = {
      image,
      phone,
      email,
      name: `${first} ${last}`,
    };
    setUser(newPerson);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div class="box">
      <div class="card">
        <div class="imgBx">
          <img
            src={user.image}
            alt="images"
          />
        </div>
        <div class="details">
          <h2>
           {user.name}
            <br />
            <span>{user.email}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Info;
