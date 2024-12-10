import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNowStrict} from 'date-fns'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../NavBar'
import SideBar from '../SideBar'
import {
  FxCon,
  Flex,
  Page,
  FlexCon,
  Like,
  Dislike,
  Save,
} from './StyledComponents'

const current = {
  initial: 'initial',
  loading: 'loading',
  success: 'success',
  failure: 'failure',
}

class VideoItemDetails extends Component {
  state = {
    video: {},
    currentStatus: current.loading,
    active: false,
    reaction: {like: false, dislike: false},
  }

  componentDidMount() {
    this.getData = async () => {
      this.setState({currentStatus: current.loading})
      const token = Cookies.get('jwt_token')
      const {match} = this.props
      console.log(match)
      const {params} = match
      const url = `https://apis.ccbp.in/videos/${params.id}`
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
        this.setState({
          video: data.video_details,
          currentStatus: current.success,
        })
      } else {
        this.setState({currentStatus: current.failure})
      }
    }

    this.getData()
  }

  like = () => {
    this.setState(prev => ({
      reaction: {like: !prev.reaction.like, dislike: false},
    }))
  }

  dislike = () => {
    this.setState(prev => ({
      reaction: {like: false, dislike: !prev.reaction.dislike},
    }))
  }

  render() {
    const {video, active, reaction, currentStatus} = this.state
    const since =
      currentStatus === current.success
        ? formatDistanceToNowStrict(new Date(video.published_at))
        : '0s'
    return (
      <ThemeContext.Consumer>
        {ctx => {
          const {addVideo, removeVideo, lightTheme} = ctx
          const save = () => {
            if (active) {
              removeVideo(video)
            } else {
              addVideo(video)
            }
            this.setState(prev => ({active: !prev.active}))
          }
          return (
            <Page>
              <Navbar />
              <FlexCon>
                <SideBar />
                <FxCon data-testid="videoItemDetails" lightTheme={lightTheme}>
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
                        <div>
                          <ReactPlayer
                            url={video.video_url}
                            light={video.thumbnail_url}
                            width="100%"
                          />
                          <p>{video.title}</p>
                          <Flex>
                            <Flex>
                              <p>{video.view_count} views</p>
                              <p>{since} ago</p>
                            </Flex>
                            <Flex>
                              <Like onClick={this.like} like={reaction.like}>
                                Like
                              </Like>
                              <Dislike
                                onClick={this.dislike}
                                dislike={reaction.dislike}
                              >
                                Dislike
                              </Dislike>
                              <Save
                                type="button"
                                onClick={save}
                                active={active}
                              >
                                {active ? 'Saved' : 'Save'}
                              </Save>
                            </Flex>
                          </Flex>
                          <hr />
                          <Flex>
                            <img
                              src={video.channel.profile_image_url}
                              alt="channel logo"
                            />
                            <div>
                              <p>{video.channel.name}</p>
                              <p>
                                {video.channel.subscriber_count} subscribers
                              </p>
                            </div>
                          </Flex>
                          <p>{video.description}</p>
                        </div>
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

export default VideoItemDetails
