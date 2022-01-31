import React, {useState, useEffect} from 'react';

import NavigationMenuContext from './navigation-menu-context';

const defaultNavigationMenuContext = {
    data: [],
    isLoaded: false
};


const NavigationMenuProvider = (props) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [httpError, setHttpError] = useState();

    const clickGroupItemHandler = (envId, tableId) => {

    }

    const navigationMenuContext = {
      data: data,
      isLoaded: false,
      clickGroupItem: clickGroupItemHandler
  };


    // const [cartState, dispatchCartAction] = useReducer(
    //   cartReducer,
    //   defaultCartState
    // );


    // const navigationMenuContext = {
    //   data: cartState.items,
    //   totalAmount: cartState.totalAmount,
    //   addItem: addItemToCartHandler,
    //   removeItem: removeItemFromCartHandler,
    //   clearCart: clearCartHandler
    // };


    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(
            'http://localhost:8181/api/v1/getNavigationMenuData'
          );
    
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
    
          const responseData = await response.json();
    
          const loadedData = responseData.data;
    
          // for (const key in responseData) {
          //   loadedMeals.push({
          //     id: key,
          //     name: responseData[key].name,
          //     description: responseData[key].description,
          //     price: responseData[key].price,
          //   });
          // }
    
          setData(loadedData);
        //   setIsLoaded(true);
          setIsLoading(false);
        };
    
        fetchData().catch((error) => {
          setIsLoading(false);
        //   setIsLoaded(false);
          setHttpError(error.message);
        });
      }, []);

    
    
    return (
        <NavigationMenuContext.Provider value={navigationMenuContext}>
            {props.children}
        </NavigationMenuContext.Provider>
    );
}

export default NavigationMenuProvider;
