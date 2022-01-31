import React from 'react';

const NavigationMenuContext = React.createContext({
    data: [],
    isLoaded: false,
    clickGroupItem: (envId, tableId) =>{}
});

export default NavigationMenuContext;
