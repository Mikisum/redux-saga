import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { News } from "../../components/news/News"
import { GET_LATEST_NEWS } from "../../redux/constants"

export const LatestNews = () => {
  const { latestNews } = useSelector(store => store?.news || {})
  const { latestNewsError } = useSelector(store => store?.error || '')
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_LATEST_NEWS });
  }, [dispatch]);

  return (
    <div>
      <News news={latestNews} error={latestNewsError} title='Latest News' />
    </div>
  )
}