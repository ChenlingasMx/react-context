import { useReducer } from 'react';
import { BarContext } from './context';
import ComA from './ComA/index';
import { reducer, defalutState } from './reducer'


export default function Demo() {
  let [state, dispatch] = useReducer(reducer, defalutState);
  return (
    <BarContext.Provider value={{ state, dispatch }}>
      <ComA />
    </BarContext.Provider>
  )
}
