import React, { useState } from "react";


import NavigationMenuProvider from "../../store/NavigationMenuProvider";
import Environments from "./Environments/Environments";
import Tools from "./Tools/Tools";


const NavigationMenu = () => {


  

  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [httpError, setHttpError] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       'http://localhost:8181/api/v1/nomenvironments'
  //     );

  //     if (!response.ok) {
  //       throw new Error('Something went wrong!');
  //     }

  //     const responseData = await response.json();

  //     const loadedData = responseData.data;

  //     // for (const key in responseData) {
  //     //   loadedMeals.push({
  //     //     id: key,
  //     //     name: responseData[key].name,
  //     //     description: responseData[key].description,
  //     //     price: responseData[key].price,
  //     //   });
  //     // }

  //     setData(loadedData);
  //     setIsLoaded(true);
  //     setIsLoading(false);
  //   };

  //   fetchData().catch((error) => {
  //     setIsLoading(false);
  //     setIsLoaded(false);
  //     setHttpError(error.message);
  //   });
  // }, []);




  return (

    <div id="menu" className="has-scroll">
      <div id="navigation">
        <div className="panel-group" id="accordion">
          <NavigationMenuProvider  >
            <Tools guiName="Tools" />
            <Environments  />
          </NavigationMenuProvider>
        </div>

      </div>
    </div>

  );
}

export default NavigationMenu;
