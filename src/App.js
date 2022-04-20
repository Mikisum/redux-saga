import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, getLatestNews, increaseCount } from "./redux/actions/actions";

const App = () => {
  // const count = useSelector(store => store?.counter?.count || 0);
  const count = useSelector(state => state.counter.count || 0)
  const dispatch = useDispatch()

  const handleIncrease = () => {
    dispatch(increaseCount())
  }

  const handleDecrease = () => {
    dispatch(decreaseCount())
  }

  const handleGetLatestNews = () => {
    dispatch(getLatestNews())
  }

  return (
    <div>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleGetLatestNews}>Get News</button>
      <div>{count}</div>
    </div>
  )
}

export default App