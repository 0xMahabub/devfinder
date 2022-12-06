import { useAppDispatch, useAppSelector } from './counter.hook'
import './counter.scss'
import { decrement, increment, reset } from './counter.slice'

function Counter() {
  const count = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch()

  return (
    <div className="counter">
      <h1>Counter Component</h1>
      <h4>This a counter using Redux-RTK</h4>
      <p>Count is now: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter
