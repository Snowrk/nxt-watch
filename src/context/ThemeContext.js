import React from 'react'

const ThemeContext = React.createContext({
  lightTheme: true,
  savedVideos: [],
  addVideo: () => {},
  removeVideo: () => {},
})

export default ThemeContext
