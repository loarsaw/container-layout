import React from "react";

const Info = ({ user }) => {
  return user ? (
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
  ) : (
    <p className="loading">Loading...</p>
  );
};
export default Info;
