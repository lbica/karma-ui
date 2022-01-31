import React from 'react'

function ToolsItem({ guiName, iconClassName }) {

  return (
    <a href="#" className="list-group-item">
      <i className={iconClassName}/>
      {guiName}
    </a>
  )
}

export default ToolsItem;
