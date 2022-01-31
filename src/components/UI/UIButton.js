import React from 'react';

const UiButton = (props) => {
    return (
        <button type="button"
            className="btn btn-default btn-sm">{props.title}</button>
    );
}

export default UiButton;
