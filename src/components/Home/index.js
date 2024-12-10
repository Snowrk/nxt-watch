import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNowStrict} from 'date-fns'
import {IoIosSearch} from 'react-icons/io'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../NavBar'
import SideBar from '../SideBar'
import {
  FxCon,
  BannerDiv,
  VideosDiv,
  SearchButton,
  SearchDiv,
  CloseButton,
  InCon,
  BuyButton,
  VideoList,
  Flex,
  VideoItem,
  Page,
  FlexCon,
} from './StyledComponents'

const current = {
  initial: 'initial',
  loading: 'loading',
  success: 'success',
  failure: 'failure',
}

class Home extends Component {
  state = {
    query: '',
    videoList: [],
    currentStatus: current.loading,
    active: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({currentStatus: current.loading})
    const token = Cookies.get('jwt_token')
    const {query} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${query}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.setState({videoList: data.videos, currentStatus: current.success})
    } else {
      this.setState({currentStatus: current.failure})
    }
  }

  render() {
    const {videoList, query, currentStatus, active} = this.state
    const {history} = this.props
    return (
      <ThemeContext.Consumer>
        {ctx => {
          const {lightTheme} = ctx
          return (
            <Page>
              <Navbar history={history} />
              <FlexCon>
                <SideBar />
                <FxCon data-testid="home" lightTheme={lightTheme}>
                  {active && (
                    <BannerDiv data-testid="banner">
                      <InCon>
                        <img
                          src={
                            lightTheme
                              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                          }
                          alt="nxt watch logo"
                        />
                        <p>Buy Nxt Watch Premium</p>
                        <BuyButton>GET IT NOW</BuyButton>
                      </InCon>
                      <CloseButton
                        data-testid="close"
                        onClick={() => this.setState({active: false})}
                      >
                        &times;
                      </CloseButton>
                    </BannerDiv>
                  )}
                  <VideosDiv>
                    <SearchDiv>
                      <input
                        type="search"
                        value={query}
                        placeholder="Search"
                        onChange={e => this.setState({query: e.target.value})}
                      />
                      <SearchButton
                        onClick={this.getData}
                        data-testid="searchButton"
                      >
                        <IoIosSearch />
                      </SearchButton>
                    </SearchDiv>
                    {currentStatus === current.loading ? (
                      <div className="loader-container" data-testid="loader">
                        <Loader
                          type="ThreeDots"
                          color="blue"
                          height="50"
                          width="50"
                        />
                      </div>
                    ) : (
                      <>
                        {currentStatus === current.failure ? (
                          <div>
                            <img
                              src={
                                lightTheme
                                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                              }
                              alt="failure view"
                            />
                            <h1>Oops! Something Went Wrong</h1>
                            <p>We are having some trouble</p>
                            <button type="button" onClick={this.getData}>
                              Retry
                            </button>
                          </div>
                        ) : (
                          <>
                            {videoList.length === 0 ? (
                              <div>
                                <img
                                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                                  alt="no videos"
                                />
                                <h1>No Search results found</h1>
                                <p>
                                  Try different key words or remove search
                                  filter
                                </p>
                                <button type="button" onClick={this.getData}>
                                  Retry
                                </button>
                              </div>
                            ) : (
                              <VideoList>
                                {videoList.map(item => {
                                  const since = formatDistanceToNowStrict(
                                    new Date(item.published_at),
                                  )
                                  return (
                                    <Link
                                      to={`/videos/${item.id}`}
                                      key={item.id}
                                    >
                                      <VideoItem>
                                        <img
                                          src={item.thumbnail_url}
                                          alt="video thumbnail"
                                        />
                                        <Flex>
                                          <img
                                            src={item.channel.profile_image_url}
                                            alt="channel logo"
                                          />
                                          <div>
                                            <p>{item.title}</p>
                                            <p>{item.channel.name}</p>
                                            <Flex>
                                              <p>{item.view_count} views</p>
                                              <p>{since} ago</p>
                                            </Flex>
                                          </div>
                                        </Flex>
                                      </VideoItem>
                                    </Link>
                                  )
                                })}
                              </VideoList>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </VideosDiv>
                </FxCon>
              </FlexCon>
            </Page>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
