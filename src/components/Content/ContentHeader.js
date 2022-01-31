import React from 'react';

const ContentHeader = (props) => {
    return (
        <div className="block-header">
        <h2>{props.title}</h2>
        <ul className="actions">
            <li className="dropdown">
                <a href="/" data-toggle="dropdown">
                    <i className="zmdi zmdi-more-vert"></i>
                </a>
                <ul className="dropdown-menu pull-right">
                    <li>
                        <a href="/">Privacy Settings</a>
                    </li>
                    <li>
                        <a href="/">Account Settings</a>
                    </li>
                    <li>
                        <a href="/">Other Settings</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    );
}

export default ContentHeader;
