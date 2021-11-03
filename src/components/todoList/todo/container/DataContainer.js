import React from "react"
import './DataContainer.css'

const DataContainer = ({data, primary, secondary, tertiary, className}) => {
  return (
      <div className={'container '+
      ((primary)? 'primary ' : '') +
      ((secondary)? 'secondary ' : '') +
      ((tertiary)? 'tertiary ' : '') +
      ((className)? className: '')
      }>
        { data }
      </div>
  )
}

export default DataContainer
