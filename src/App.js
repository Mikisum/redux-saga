import { useDispatch, useSelector } from "react-redux";
import { News } from "./components/news/News";
import { getLatestNews } from "./redux/actions/actions";

const App = () => {
  // const count = useSelector(store => store?.counter?.count || 0);
  const latestNews = useSelector(store => store?.news?.latestNews || [])
  const count = useSelector(state => state.counter.count || 0)
  const dispatch = useDispatch()

  const handleGetLatestNews = () => {
    dispatch(getLatestNews())
  }

  return (
    <div>
      <button onClick={handleGetLatestNews}>Get News</button>
      <News news={latestNews} />
    </div>
  )
}

export default App