import React from "react";

class PopupMenuActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    console.log("Display menu is: " + this.state.displayMenu);
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <ul className="actions">
        <li className="dropdown">
          <a href="" data-toggle="dropdown">
            <i className="zmdi zmdi-menu" />
          </a>
          <ul className="dropdown-menu dropdown-menu-left">
            <li>
              <a href="">
                <i className="zmdi zmdi-copy zmdi-hc-fw text-primary" /> Copy to
                Sandbox
              </a>
            </li>
            <li>
              <a href="">
                <i className="zmdi zmdi-toys zmdi-hc-fw text-primary" /> Move to
                PRODUCTION
              </a>
            </li>
            <li>
              <a href="">
                <i className="zmdi zmdi-eye-off zmdi-hc-fw text-primary" /> Hide
              </a>
            </li>
            <li>
              <a href="">
                <i className="zmdi zmdi-delete zmdi-hc-fw text-primary" /> Delete
              </a>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default PopupMenuActions;
