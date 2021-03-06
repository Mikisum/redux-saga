import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { News } from "../../components/news/News"
import { GET_POPULAR_NEWS } from "../../redux/constants"

export const PopularNews = () => {
  const { popularNews } = useSelector(store => store?.news || {})
  const { popularNewsError } = useSelector(store => store?.error || '')
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_POPULAR_NEWS });
  }, [dispatch]);

  return (
    <div>
      <News news={popularNews} error={popularNewsError} title='Popular News' />
    </div>
  )
}