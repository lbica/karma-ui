import React, { Fragment, useContext } from 'react';

import NavigationMenuContext from "../../../store/navigation-menu-context";
import EnvironmentItem from "./EnvironmentItem/EnvironmentItem";

const Environments = () => {

    const navigationCtx = useContext(NavigationMenuContext);


    const environmentItems = navigationCtx.data.map((item) => {
        return <EnvironmentItem key={item.id} id={item.id} guiName={item.guiName} items={item.items} iconClassName="zmdi zmdi-trending-up zmdi-hc-lg zmdi-hc-fw m-r-5" />
    });

    return (
        <Fragment>
            {environmentItems}
        </Fragment>
    );
}

export default Environments;
