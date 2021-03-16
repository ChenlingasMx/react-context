import { useContext } from 'react';
import { BarContext } from '../context';
import ComB from '../ComB/index'
import { asyncFetch } from '../reducer'
export default function ComA() {

  //useContext 可以从 Context拿到向Provider里传的value值
  const { dispatch } = useContext(BarContext);
  const handle = (type) => {
    if (type === 'add') {
      dispatch({ type: "add" })
    }
    if (type === 'reset') {
      dispatch({ type: "reset" })
    }
    if (type === 'update') {
      dispatch({ type: "update", payload: asyncFetch({ count: 10 }) })
    }
  }
  return (
    <div>
      <ComB />
      <div>
        <button onClick={handle.bind(this, 'add')}>+</button>
        <button onClick={handle.bind(this, 'update')}>+10</button>
        <button onClick={handle.bind(this, 'reset')}>重置</button>
      </div>
    </div>
  )
}
