import React from 'react'
import PropTypes from 'prop-types'
import {setFormVisible} from "../../../actions";
import {connect} from "react-redux";
import './Todo.css';
import SVGContainer from "./container/SVGContainer";
import DataContainer from "./container/DataContainer";

const Todo = ({setFormVisible, toggleTodo, deleteTodo, todo}) => (
    <li style={{
      textDecoration: todo.completed ? 'line-through' : 'none'
    }}>
      <SVGContainer data={todo.category}/>
      <DataContainer isNecessary={true} data={todo.name}/>
      <DataContainer isNecessary={false} data={todo.category}/>
      <DataContainer isNecessary={false} data={todo.dateOfCreation.toLocaleDateString()}/>
      <DataContainer isNecessary={true} long={true} data={todo.text}/>
      <DataContainer isNecessary={false} data={todo.datesFromText.join(', ')}/>
      <SVGContainer data={'edit'} clickHandler={setFormVisible}/>
      <SVGContainer data={(todo.completed)? 'complete': ''} clickHandler={toggleTodo}/>
      <SVGContainer data={'delete'} clickHandler={deleteTodo}/>

    </li>
)

Todo.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  todo: ownProps.todo
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFormVisible: () => dispatch(setFormVisible(ownProps.todo)),
  toggleTodo: ownProps.toggleTodo,
  deleteTodo: ownProps.deleteTodo
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo)
