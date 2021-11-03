import React from "react"
import './Container.css'

const DataContainer = ({data, secondary, tertiary, className, long}) => {


  return (
      <div className={'container '+
      ((secondary)? 'secondary ' : '') +
      ((tertiary)? 'tertiary ' : '') +
      ((long)? 'stretch-wrapper ' : '') +
      ((className)? className: '')
      }>
        { data }
      </div>
  )
}

export default DataContainer
