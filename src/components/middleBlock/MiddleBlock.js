import React from "react"
import { connect } from "react-redux";
import {setFormVisible} from "../../actions";

const MiddleBlock = ({dispatch})=>{
  return (
    <div className={'wrapper'}>
      <button onClick={()=> dispatch(setFormVisible(null))}>Create todo</button>
    </div>
  )
}

export default connect(

)(MiddleBlock)
