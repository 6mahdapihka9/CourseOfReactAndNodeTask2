import React from 'react'
import './App.css'
import {connect} from "react-redux"

import Header from "./header/Header"
import Filter from './footer/Filter'
import VisibleTodoList from './todoList/VisibleTodoList'
import MiddleBlock from "./middleBlock/MiddleBlock"
import Statistics from "./statictics/Statistics"
import FormWrapper from "./formWrappper/FormWrapper"

const App = ({visibility}) => (
    <div className={'view'}>
      <Header/>
      <section>
        <Filter/>
        <VisibleTodoList/>
        <MiddleBlock/>
      </section>
      <section>
        <Statistics/>
      </section>
      {(visibility) ? <FormWrapper className={'form-wrapper'}/> : null}
    </div>
)

const mapStateToProps = state => ({
  visibility: state.formDisplayer.visibility
})


export default connect(
    mapStateToProps,
    undefined
)(App)
