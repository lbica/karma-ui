import React from 'react';

const PanelHeading = (props) => {
    return (
        <div className="panel-heading has-border header-alt p-t-15 p-b-15">
            <h2 className="panel-title"><i className={`zmdi ${props.icon} zmdi-hc-fw text-primary`}></i>
                {props.title}</h2>
        </div>
    );
}

export default PanelHeading;
