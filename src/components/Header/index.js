import React from "react";
import './index.css';
const Header = () => {
  return (
    <div className="container">
      <div className="left-child">
          <div className="name">John Doe</div>
      </div>
      <div className="right-child">
        <div className="navigation-bar">
          <table>
            <tr>
              <th>Home</th>
              <th>About</th>
              <th>Projects</th>
              <th>Contact</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Header;
