import React, { Component } from "react";
import PropTypes from "prop-types";
import TabContent from "./TabContent";

class Tab extends Component {
  static propTypes = {
    //activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    //onClick: PropTypes.func.isRequired,
    //classIcon: PropTypes.string.isRequired
  };

  render() {
    const {
      // onClick,
      props: { label, idHref, className }
    } = this;

    // let className = "tab-list-item";

    // if (activeTab === label) {
    //   className += " active";
    // }

    return (
        <li className={className}>
          <a
            href={idHref}
            role="tab"
            data-toggle="tab"
            aria-expanded="false"
          >
            <i className="zmdi zmdi-tune zmdi-hc-fw zmdi-hc"/>
            {label}
          </a>
        </li>
    );
  }
}

export default Tab;
