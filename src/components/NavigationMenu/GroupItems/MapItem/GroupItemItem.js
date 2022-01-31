import React from 'react';

const GroupItemItem = (props) => {
  return (
    <a href="#" className="list-group-item">
      <i className="zmdi zmdi-shopping-cart zmdi-hc-lg zmdi-hc-fw m-r-5" />
      {props.guiName}
      <div className="pull-right">
        <i className="zmdi zmdi-chevron-right zmdi-hc-lg zmdi-hc-fw" />
      </div>
    </a>
  );
}

export default GroupItemItem;
