import React from 'react';

const TabHeader = (props) => {
    return (
        <li className={props.active ? "active" : "tabzone"}><a href={`#${props.refTabContent}`} aria-controls={props.refTabContent} role="tab" data-toggle="tab"
            aria-expanded="false"><i className={`zmdi ${props.iconClassName} zmdi-hc-fw zmdi-hc`}></i> {props.title}</a>
        </li>
    );
}

export default TabHeader;
