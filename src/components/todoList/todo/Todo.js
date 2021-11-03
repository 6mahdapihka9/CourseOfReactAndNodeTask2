import React from 'react'
import PropTypes from 'prop-types'
import {setFormVisible} from "../../../actions";
import {connect} from "react-redux";
import './Todo.css';
import DataContainer from "./container/DataContainer";

const Todo = ({setFormVisible, toggleTodo, deleteTodo, todo}) => (
    <li style={{
      textDecoration: todo.completed ? 'line-through' : 'none'
    }}>
      <DataContainer data={todo.name}/>
      <DataContainer data={todo.category}/>
      <DataContainer data={todo.dateOfCreation.toLocaleDateString()}/>
      <DataContainer data={todo.text}/>
      <DataContainer data={todo.datesFromText.join(', ')}/>
      <button onClick={setFormVisible}>
        edit
      </button>
      <button onClick={toggleTodo}>
        toggle
      </button>
      <button onClick={deleteTodo}>
        delete
      </button>

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
