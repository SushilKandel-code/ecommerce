import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [activeItem, setActiveItem] = React.useState("Home");
  // Handle Menu item click
  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary pointing menu">
        <div style={{ paddingLeft: "5px" }}></div>
        <img
          style={{ width: "2%", marginTop: "8px" }}
          className="ui medium circular image"
          src={logo}
          alt="logo"
        />
        <div style={{ paddingLeft: "20px" }}></div>
        <a
          className={`item ${activeItem === "Home" ? "active" : ""}`}
          style={{ color: "white" }}
          onClick={() => handleItemClick("Home")}
        >
          Home
        </a>
        <a
          className={`item ${activeItem === "Categories" ? "active" : ""}`}
          style={{ color: "white" }}
          onClick={() => handleItemClick("Categories")}
        >
          Categories
        </a>
        <a
          className={`item ${activeItem === "Friends" ? "active" : ""}`}
          style={{ color: "white" }}
          onClick={() => handleItemClick("Friends")}
        >
          Friends
        </a>

        <div className="item" style={{ width: "50%", flexGrow: 1 }}>
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
    
       
       
        <div class="ui vertical animated button" style={{background: 'transparent', color: 'white', height: '1%', display: 'flex', alignItems: 'centre', marginLeft: 'auto', marginTop: '12px'}}>
          <div class="hidden content">Shop</div>
          <div class="visible content">
            <i class="shop icon"></i>
          </div>
        </div>
        <div className="" style={{display: 'flex' }}>
          <a
            className={`item ${activeItem === "login" ? "active" : ""}`}
            style={{ color: "white" }}
            onClick={() => handleItemClick("login")}
          >
            Login
          </a>
          <a
            className={`item ${activeItem === "signup" ? "active" : ""}`}
            style={{ color: "white" }}
            onClick={() => handleItemClick("signup")}
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
