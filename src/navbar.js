import React from "react";
export default function Navbar(props) {
  return;
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src=""
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        {props.username}
      </a>
    </div>
  </nav>;
}