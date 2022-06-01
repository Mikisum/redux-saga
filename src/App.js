import { useDispatch, useSelector } from "react-redux";
import { News } from "./components/news/News";
import { getNews } from "./redux/actions/actions";

const App = () => {

  const { latestNews, popularNews } = useSelector(store => store?.news || {})
  const dispatch = useDispatch()

  const handleNews = () => {
    dispatch(getNews())
  }

  return (
    <div>
      <button onClick={handleNews}>Get News</button>
      <News news={latestNews} title='Latest News' />
      <News news={popularNews} title='Popular News' />

    </div>
  )
}

export default App