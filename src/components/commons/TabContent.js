import React, { Component } from "react";

export class TabContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      className: this.props.className
    };
  }

  render() {
    const {
      props: { children }
    } = this;

    return (
      <div role="tabpanel" className={this.state.className} id={this.state.id}>
        <div className="row">
          {children.map(child => {
            return (
              <div className="col-xs-4 col-lg-4 p-l-0 p-r-0">
                <div className="panel panel-inline m-0">{child}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TabContent;
