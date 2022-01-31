import React, { Fragment, useEffect } from 'react';


import Header from '../Header/Header';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import Content from '../Content/Content';





const Layout = () => {

useEffect(() => {
    const test = 'asasa';

    console.log(test);
    return () => {
        //
    };
}, []);

const clickGroupItemHandler = () => {
    console.log("clickGroupItemHandler");
}


    return (
        <Fragment>
            <Header />
            <NavigationMenu onClickGroupItem={clickGroupItemHandler} />
            <Content/>
        </Fragment>
    );
}

export default Layout;
