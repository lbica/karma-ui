import React from "react";
import MapItem from "../Maps/MapItem/MapItem";

function DataTableItemOld(props) {


  const mapItems = props.data.map((item) => {
    return <MapItem guiName={item.name} key={item.id}/>
  });


  return (
    <a href="" className="list-group-item">
      <i className="zmdi zmdi-shopping-cart zmdi-hc-lg zmdi-hc-fw m-r-5" />
      {props.guiName}
      <div className="pull-right">
        <i className="zmdi zmdi-chevron-right zmdi-hc-lg zmdi-hc-fw" />
      </div>
    </a>
  );
}

export default DataTableItemOld;
