import React from 'react'
import Filter from './footer/Filter'
import VisibleTodoList from './todoList/VisibleTodoList'
import FormWrapper from "./formWrappper/FormWrapper"
import './App.css'
import {connect} from "react-redux";
import MiddleBlock from "./middleBlock/MiddleBlock";
import Header from "./header/Header";

const App = ({visibility}) => (
    <div className={'view'}>
      <Header/>
      {(visibility) ? <FormWrapper className={'form-wrapper'}/> : null}
      <div className={'main'}>
        <Filter/>
        <VisibleTodoList/>
        <MiddleBlock/>
      </div>
    </div>
)

const mapStateToProps = state => ({
  visibility: state.formDisplayer.visibility
})


export default connect(
    mapStateToProps,
    undefined
)(App)
