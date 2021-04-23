import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Menu } from "semantic-ui-react";

export default class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing>
          <Link to="/">
            {" "}
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />{" "}
          </Link>
          <Link to="/persons">
            {" "}
            <Menu.Item
              name="persons"
              active={activeItem === "persons"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/newPerson">
            {" "}
            <Menu.Item
              name="add person"
              active={activeItem === "add person"}
              onClick={this.handleItemClick}
            />{" "}
          </Link>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
