import { useContext } from 'react';
import { BarContext } from '../context';

export default function ComA() {
  //useContext 可以从 Context拿到向Provider里传的value值
  const { state } = useContext(BarContext);
  return (
    <div>
      <div>{state.count ? state.count : "数据不存在"}</div>
    </div>
  )
}