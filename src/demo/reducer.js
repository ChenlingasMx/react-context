const defalutState = {
  count: 0,
  loading: false
}
function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { ...state, count: state.count + 1 };
    case 'reset':
      return { ...state, count: 0 }
    case 'update':
      return { ...state, count: state.count + action.payload }
    case "loading_start":
      return { ...state, loading: true };
    case "loading_end":
      return { ...state, loading: false };
    default:
      throw new Error();
  }
}

function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}

// 处理异步请求
function wrapperDispatch(dispatch) {
  return function (action) {
    if (isPromise(action.payload)) {
      dispatch({ type: "loading_start" });
      action.payload.then(v => {
        dispatch({ type: action.type, payload: v });
        dispatch({ type: "loading_end" });
      });
    } else {
      dispatch(action);
    }
  };
}
// 这里是mock了一个异步方法，1秒后才会返回结果，模拟请求数据
const asyncFetch = async (p) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(p);
    }, 1000);
  })
}

export {
  defalutState,
  reducer,
  wrapperDispatch,
  asyncFetch
}