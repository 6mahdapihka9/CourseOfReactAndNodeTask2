const announcerSetter = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ANNOUNCER_EVENT':
      return {
        text: action.text,
        isError: action.isError
      }
    default:
      return state
  }
}

export default announcerSetter
