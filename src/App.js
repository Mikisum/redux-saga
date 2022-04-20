import { useDispatch, useSelector } from "react-redux"
import { decreaseCount, increaseCount } from "./redux/actions/actions"
import store from "./redux/store"

const App = () => {
  const state = store.getState()
  console.log(state)
  const count = useSelector(state => state.counter.count || 0)
  const dispatch = useDispatch()

  const handleIncrease = () => {
    dispatch(increaseCount())
    console.log(count)
  }

  const handleDecrease = () => {
    dispatch(decreaseCount())
  }

  return (
    <div>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <div>{count}</div>
    </div>
  )
}

export default App