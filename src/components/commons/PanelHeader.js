import React, { Component } from "react";

class PanelHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: this.props.label,
      panelHeadingClass: this.props.panelHeadingClass,
      panelTitleClass: this.props.panelTitleClass,
      iconClass: this.props.iconClass
    };
  }

  render() {
    return (
      <div className="panel-heading has-border header-alt p-t-15 p-b-15">
      <h2 className="panel-title">
        <i className="zmdi zmdi-tune zmdi-hc-fw text-primary" />
        Settings
        <ul className="actions pull-right">
          <li>
            <a href="">
              <i className="zmdi zmdi-refresh" />
            </a>
          </li>
        </ul>
      </h2>
    </div>
    );
  }
}

export default PanelHeader;
