import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";

const App = ({ children }) => (

  // const { latestNews, popularNews } = useSelector(store => store?.news || {})
  // const dispatch = useDispatch()

  // const handleNews = () => {
  //   dispatch(getNews())
  // }

  // return (
  //   <div>
  //     <button onClick={handleNews}>Get News</button>
  //     <News news={latestNews} title='Latest News' />
  //     <News news={popularNews} title='Popular News' />

  //   </div>
  // )
  <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
)

export default App