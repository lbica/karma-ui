import React from 'react';

const TabContent = (props) => {
    return (
        <div role="tabpanel" class="tab-pane" id={props.tabId}>
        <div className="tab-content p-t-0 p-b-0">
            {props.children}
        </div>
        </div>
    );
}

export default TabContent;
