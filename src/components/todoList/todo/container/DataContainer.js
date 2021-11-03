import React from "react"
import './Container.css'

const DataContainer = ({data, isNecessary, long}) => {


  return (
      <div className={'container '+
      ((!isNecessary)? 'unimportant-con ' : '') +
      ((long)? 'stretch-wrapper ' : '')}>
        { data }
      </div>
  )
}

export default DataContainer
