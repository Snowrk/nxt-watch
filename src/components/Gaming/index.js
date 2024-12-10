import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../NavBar'
import SideBar from '../SideBar'
import {
  FxCon,
  VideosDiv,
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

class Gaming extends Component {
  state = {videoList: [], currentStatus: current.loading}

  componentDidMount() {
    this.getData = async () => {
      this.setState({currentStatus: current.loading})
      const token = Cookies.get('jwt_token')
      const url = `https://apis.ccbp.in/videos/gaming`
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

    this.getData()
  }

  render() {
    const {videoList, currentStatus} = this.state
    return (
      <ThemeContext.Consumer>
        {ctx => {
          const {lightTheme} = ctx
          return (
            <Page>
              <Navbar />
              <FlexCon>
                <SideBar />
                <FxCon data-testid="gaming" lightTheme={lightTheme}>
                  {currentStatus === current.loading ? (
                    <div className="loader-container" data-testid="loader">
                      <Loader
                        type="ThreeDots"
                        color="#ffffff"
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
                        <VideosDiv>
                          <div>
                            <h1>Gaming</h1>
                          </div>
                          <VideoList>
                            {videoList.map(item => (
                              <Link to={`/videos/${item.id}`} key={item.id}>
                                <VideoItem>
                                  <img
                                    src={item.thumbnail_url}
                                    alt="video thumbnail"
                                  />
                                  <Flex>
                                    <div>
                                      <p>{item.title}</p>

                                      <Flex>
                                        <p>
                                          {item.view_count} Watching Worldwide
                                        </p>
                                      </Flex>
                                    </div>
                                  </Flex>
                                </VideoItem>
                              </Link>
                            ))}
                          </VideoList>
                        </VideosDiv>
                      )}
                    </>
                  )}
                </FxCon>
              </FlexCon>
            </Page>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
