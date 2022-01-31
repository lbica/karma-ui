import React from 'react';


import ContentHeader from './ContentHeader';
import Tabs from './Tabs/Tabs';
import Tab from './Tabs/Tab';
import TabContent from './Tabs/TabContent';
import TabHeader from './Tabs/TabHeader';

const Content = () => {
    return (
        <div id='wrapper'>
            <div className="content p-b-20">
                <ContentHeader title="Edit Collection v.004" />
                <Tabs/>
            </div>

        </div>
    );
}

export default Content;
