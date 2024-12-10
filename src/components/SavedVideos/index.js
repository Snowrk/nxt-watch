import {Component} from 'react'
import {formatDistanceToNowStrict} from 'date-fns'
import {Link} from 'react-router-dom'
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

class SavedVideos extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {ctx => {
          const {savedVideos, lightTheme} = ctx
          const videoList = savedVideos
          return (
            <Page>
              <Navbar />
              <FlexCon>
                <SideBar />
                <FxCon data-testid="savedVideos" lightTheme={lightTheme}>
                  {videoList.length === 0 ? (
                    <div>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                      />
                      <h1>No saved videos found</h1>
                      <p>Save your videos by clicking a button</p>
                    </div>
                  ) : (
                    <VideosDiv>
                      <div>
                        <h1>SavedVideos</h1>
                      </div>
                      <VideoList>
                        {videoList.map(item => {
                          const since = formatDistanceToNowStrict(
                            new Date(item.published_at),
                          )
                          return (
                            <Link to={`/videos/${item.id}`} key={item.id}>
                              <VideoItem>
                                <img
                                  src={item.thumbnail_url}
                                  alt="video thumbnail"
                                />
                                <Flex>
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
                    </VideosDiv>
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

export default SavedVideos
