import React, { Component } from "react";
import PropTypes from "prop-types";

import Tab from "./Tab";

// const ListTabs = children => (
//   <ul class="tab-nav-asf" role="tablist">
//     {children}
//   </ul>
// );

// const TableTitleItem = ({ children, innerRef, ...restProps }) => (
//   <li class="tabzone">
//     <a
//       href="#home12"
//       aria-controls="home12"
//       role="tab"
//       data-toggle="tab"
//       aria-expanded="false"
//     >
//       <i class="zmdi zmdi-tune zmdi-hc-fw zmdi-hc" />
//       Setup
//     </a>
//   </li>
// );

// const ReactTabs = { children, ...restProps }(
//   <div role="tabpanel" class="tab-pane" id="home12" {...restProps}>
//     {children}
//   </div>
// );

// const TabsContainer = ({ children, ...restProps }) => (
//   <div class="tab-content p-t-0 p-b-0" {...restProps}>
//     {children}
//   </div>
// );

class Tabs extends Component {
  state = {
    tabsElements: []
  };

  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children.label
    };
  }

  // onClickTabItem = tab => {
  //   this.setState({ activeTab: tab });
  // };

// handleClick = (tab) => {
//     this.setState({activeTab: tab});
//   }

  // render() {
  //   const {
  //     onClickTabItem,
  //     props: { children },
  //     state: { activeTab }
  //   } = this;

  //   return (
  //     <div>
  //       <ul class="tab-nav-asf" role="tablist" />
  //     </div>
  //   );
  // }

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this;
    return (
      <div role="tabpanel">
        <ul className="tab-nav-asf" role="tablist">
          {children.map(tab => {
            // const { label, classIcon } = tab.props;
            return <Tab key={tab.id} {...tab.props}/>;
          })}
        </ul>
      </div>
    );
  }
}

export default Tabs;
