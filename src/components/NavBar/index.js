import {Component} from 'react'
import {IoSunnyOutline} from 'react-icons/io5'
import {FaMoon} from 'react-icons/fa'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  NavCon,
  Right,
  ThemeButton,
  LogoutButton,
  ProfileCon,
} from './StyledComponents'

class NavBar extends Component {
  state = {open: false}

  close = () => this.setState({open: false})

  logout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {open} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme, changeTheme} = value
          const logoUrl = lightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          return (
            <NavCon>
              <Link to="/">
                <img src={logoUrl} alt="website logo" />
              </Link>
              <Right>
                <ThemeButton onClick={changeTheme} data-testid="theme">
                  {lightTheme ? <FaMoon /> : <IoSunnyOutline />}
                </ThemeButton>
                <ProfileCon>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </ProfileCon>
                <LogoutButton
                  onClick={() => this.setState(prev => ({open: !prev.open}))}
                >
                  Logout
                </LogoutButton>
                <Popup
                  open={open}
                  closeOnDocumentClick
                  onClose={this.close}
                  overlayStyle={{background: 'rgba(0,0,0,0.5)'}}
                  contentStyle={{background: '#fff', width: '300px'}}
                >
                  <div className="modal">
                    <p>Are you sure, you want to logout</p>
                    <button type="button" onClick={this.close}>
                      Cancel
                    </button>
                    <button type="button" onClick={this.logout}>
                      Confirm
                    </button>
                  </div>
                </Popup>
              </Right>
            </NavCon>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NavBar
