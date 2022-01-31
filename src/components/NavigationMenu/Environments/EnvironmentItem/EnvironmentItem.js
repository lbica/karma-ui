import React from "react";

import GroupItem from "../../Groups/GroupItem";


// const propTypes = {
//   label: PropTypes.string.isRequired,
//   dataTable: PropTypes.object.isRequired,
//   onClickTblMap: PropTypes.func
// };


const EnvironmentItem = (props) => {



const groupItems = props.items.map((item) => {

  const id = `${item.id}${props.id}`;

  return <GroupItem key={item.id} id={id} guiName={item.guiName} items={item.items} iconClassName="zmdi zmdi-trending-up zmdi-hc-lg zmdi-hc-fw m-r-5"/>
});


const collapseId = `collapse${props.id}`;

  return (
    <div className="panel panel-default">
      <ul className="list-group nav-list">
        <div className="nav-list-header">
        <ul className="actions pull-right">
        <li>
          <a href="#">
            <i className="zmdi zmdi-check" />
          </a>
        </li>
        <li className="dropdown">
          <a href="" data-toggle="dropdown">
            <i className="zmdi zmdi-more-vert" />
          </a>
          <ul className="dropdown-menu dropdown-menu-left">
            <li>
              <a href="">
                <i className="zmdi zmdi-eye-off zmdi-hc-fw text-primary" />
                Show Hidden
              </a>
            </li>
            <li>
              <a href="">
                <i className="zmdi zmdi-refresh zmdi-hc-fw text-primary" />
                Refresh
              </a>
            </li>
            <li>
              <a href="">
                <i className="zmdi zmdi-time-interval zmdi-hc-fw text-primary" />
                Monitor
              </a>
            </li>
          </ul>
        </li>
      </ul>
          <a data-toggle="collapse" data-parent="#" href={`#${collapseId}`}>
            <i className="glyphicon glyphicon-cog" />{props.guiName}
          </a>
        </div>
      </ul>
      
      <div id={collapseId} className="panel-collapse collapse in">
        <div className="panel-body">
          <ul className="list-group nav-list">
            {groupItems}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EnvironmentItem;
