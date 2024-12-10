import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import Login from './components/Login'
import './App.css'

// Replace your code here
class App extends Component {
  state = {lightTheme: true, savedVideos: []}

  changeTheme = () => {
    this.setState(prevState => ({lightTheme: !prevState.lightTheme}))
  }

  addVideo = video => {
    console.log('add video')
    this.setState(prevState => {
      console.log(video)
      return {
        savedVideos:
          prevState.savedVideos.findIndex(item => item.id === video.id) === -1
            ? [...prevState.savedVideos, video]
            : [...prevState.savedVideos],
      }
    })
  }

  removeVideo = video => {
    console.log('remove video')
    this.setState(prevState => ({
      savedVideos: [
        ...prevState.savedVideos.filter(item => item.id !== video.id),
      ],
    }))
  }

  render() {
    const {lightTheme, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          lightTheme,
          changeTheme: this.changeTheme,
          savedVideos,
          addVideo: this.addVideo,
          removeVideo: this.removeVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
