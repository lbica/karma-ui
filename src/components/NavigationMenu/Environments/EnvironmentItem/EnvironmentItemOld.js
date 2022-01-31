import React, { Component, Fragment } from "react";
import axios from "axios";

import DataTableItem from "../../DataTables/DataTableItemOld";



function EnvironmentItemOld(props) {
  const tableItems = props.data.map((item) => {
    return <DataTableItem guiName={item.name} key={item.id} data={item.maps}/>
  });

  return (
    <a href="#" className="list-group-item">
    <i className={props.iconClassName}/>
    {props.guiName}
  </a>
  );
}

export default EnvironmentItemOld;




// class EnvironmentItem extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       datatableItems: []
//     };
//   }

  // componentDidMount() {

    // let dtiState;
    // let envData

    // axios.get(`http://localhost:8181/api/v1/nomenvironments/${this.props.envguiname}`).then(env => {

    //   axios.get(`http://localhost:8181/api/v1/nomenvironments/${env.data.id}/nomdatatables`).then(response => {
    //     this.setState({datatableItems: response.data});
    //   }).catch(ex => {
    //     console.log("Error when calling Karma API: " + ex);
    //   })
    //   }).catch(ex => {
    //     console.log("Error when calling Karma API: " + ex);
    //   });

  // }

 
  // render() {

    // let DataTableContent;
    // let finalItems = [];
  
    // const DataTableAlgorithm = datatableItems => {
    //   if (this.state.datatableItems.length < 1) {
    //     finalItems = 'No Datatable Items';
    //   } else {
    //     this.state.datatableItems.forEach(datatable => {
    //       finalItems.push(
    //         <DataTableItem
    //           key={datatable.id}
    //           datatable={datatable}
    //         />
    //       );
    //     });
    //   }
  
    //   return <React.Fragment>{finalItems}</React.Fragment>;
    // };
  
    // DataTableContent = DataTableAlgorithm(this.state.datatableItems);

    