import React, {useState} from "react";


import GroupItemItem from "../GroupItems/MapItem/GroupItemItem";


const GroupItem = (props) => {


  const [loadedMap, setLoadedMap] = useState(false);


  // const environmentItems = navigationCtx.data.environments.map((item) => {
  //   return <EnvironmentItem guiName={item.name} data={item.tables} iconClassName="zmdi zmdi-trending-up zmdi-hc-lg zmdi-hc-fw m-r-5"/>
  // });

  const groupItemItems = props.items.map((item) => {
    return <GroupItemItem key={item.id} id={item.id} guiName={item.guiName}  iconClassName="zmdi zmdi-trending-up zmdi-hc-lg zmdi-hc-fw m-r-5" />
  });

  const groupClickHandler = (event) => {
    if (!loadedMap)
      console.log("groupClickHandler");
  }


  const collapseId = `collapse${props.id}`;

  return (
    <div className="panel panel-default">
      <div className="panel panel-default">
        <a href="#" className="list-group-item" style={{fontWeight:'bold'}} data-toggle="collapse" data-parent="#" href={`#${collapseId}`} onClick={groupClickHandler}>
        <i className={props.iconClassName} />
        {props.guiName}
      </a>

      </div>


      <div id={collapseId} className="panel-collapse collapse in">
        <div className="panel-body" style={{marginLeft: '20px'}}>
          <ul className="list-group nav-list">
            {groupItemItems}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GroupItem;
