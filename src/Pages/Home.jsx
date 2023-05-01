
import Main from '../components/Main/Main'
import Row from '../components/Row/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
        <Main />
        <Row title='Upcoming' url={requests.requestUpcoming}/>
        <Row title='Popular' url={requests.requestPopular}/>
        <Row title='Trending' url={requests.requestTrending}/>
        <Row title='TopRated' url={requests.requestTopRated}/>
        <Row title='Horror' url={requests.requestHorror}/>
    </div>
  )
}

export default Home