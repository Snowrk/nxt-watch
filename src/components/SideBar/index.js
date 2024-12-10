import {Component} from 'react'
import {IoMdHome} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {Con, Top, Bar, Icon, Bottom, Flex} from './StyledComponents'

class SideBar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme} = value
          return (
            <Con lightTheme={lightTheme}>
              <Top>
                <Link to="/">
                  <Bar key={1}>
                    <Icon>
                      <IoMdHome />
                    </Icon>
                    <p>Home</p>
                  </Bar>
                </Link>
                <Link to="/trending">
                  <Bar key={2}>
                    <Icon>
                      <HiFire />
                    </Icon>
                    <p>Trending</p>
                  </Bar>
                </Link>
                <Link to="/gaming">
                  <Bar key={3}>
                    <Icon>
                      <SiYoutubegaming />
                    </Icon>
                    <p>Gaming</p>
                  </Bar>
                </Link>
                <Link to="/saved-videos">
                  <Bar key={4}>
                    <Icon>
                      <MdPlaylistAdd />
                    </Icon>
                    <p>Saved Videos</p>
                  </Bar>
                </Link>
              </Top>
              <Bottom>
                <p>CONTECT US</p>
                <Flex>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </Flex>
                <p>Enjoy! Now to see your channels and recommendations!</p>
              </Bottom>
            </Con>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SideBar
