import {Component} from 'react'
import ThemeContex from '../../context/ThemeContext'
import Navbar from '../NavBar'
import SideBar from '../SideBar'
import {FxCon, Page, FlexCon} from './StyledComponents'

class NotFound extends Component {
  render() {
    return (
      <ThemeContex.Consumer>
        {ctx => {
          const {lightTheme} = ctx
          const imgUrl = lightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          return (
            <Page>
              <Navbar />
              <FlexCon>
                <SideBar />
                <FxCon>
                  <div>
                    <img src={imgUrl} alt="not found" />
                    <h1>Page Not Found</h1>
                    <p>
                      we are sorry, the page you requested could not be found.
                    </p>
                  </div>
                </FxCon>
              </FlexCon>
            </Page>
          )
        }}
      </ThemeContex.Consumer>
    )
  }
}

export default NotFound
