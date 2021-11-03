import React from "react"
import './Container.css'
import {SVGs} from '../../../svg/SVGs'

const SVGContainer = ({data, clickHandler}) => {

  return (
      (clickHandler)?
          <button className={'icon operation'}
                  onClick={clickHandler}
                  dangerouslySetInnerHTML={((data)?
                      {__html: SVGs[data]}:
                      {__html: SVGs.empty}
                      )}>
          </button> :
          <div className={'icon icon-wrapper'}
               dangerouslySetInnerHTML={{__html: SVGs[data]}}>

          </div>
  )
}

export default SVGContainer
