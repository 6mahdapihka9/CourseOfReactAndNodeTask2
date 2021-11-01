
const todoPasser = (state = {}, action) => {

  switch (action.type) {
    case 'SET_TODO_FOR_EDIT':
      return action.todo
    default:
      return state
  }

}

export default todoPasser
