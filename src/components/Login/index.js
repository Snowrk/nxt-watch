import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {BgCon, MinCon, CheckCon} from './styledComponents'

class Login extends Component {
  state = {checked: false, username: '', password: '', errMsg: ''}

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  onSub = async event => {
    event.preventDefault()
    console.log('submited')
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const {history} = this.props
      Cookies.set('jwt_token', data.jwt_token, {expires: 1})
      history.replace('/')
    } else {
      this.setState({errMsg: data.error_msg})
    }
    console.log(data)
  }

  changeCheck = () => {
    this.setState(prevState => ({checked: !prevState.checked}))
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    const {checked, username, password, errMsg} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme} = value
          const logoUrl = lightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          return (
            <BgCon>
              <MinCon>
                <img src={logoUrl} alt="website logo" />
                <form onSubmit={this.onSub}>
                  <label htmlFor="name">USERNAME</label>
                  <input
                    id="name"
                    placeholder="username"
                    value={username}
                    onChange={this.changeUsername}
                  />
                  <label htmlFor="pass">PASSWORD</label>
                  <input
                    id="pass"
                    type={checked ? 'text' : 'password'}
                    placeholder="password"
                    onChange={this.changePassword}
                    value={password}
                  />
                  <CheckCon>
                    <input
                      id="show"
                      type="checkbox"
                      onChange={this.changeCheck}
                    />
                    <label htmlFor="show">Show Password</label>
                  </CheckCon>
                  <button type="submit">Login</button>
                  {errMsg.length > 0 && <p>*{errMsg}</p>}
                </form>
              </MinCon>
            </BgCon>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
