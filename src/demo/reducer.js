 const defalutState = {
  count: 0
}
function reducer(state , action) {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 };
    case 'reset':
      return { count: 0 }
    case 'update':
      return { count: state.count+action.payload }
    default:
      throw new Error();
  }
}

export {
  defalutState,
  reducer
}