import styled from 'styled-components'

export const FxCon = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#181818')};
`
//     position: absolute;
//     left: 25vw;
//     top: 64.2px;
//     width: 75vw;
// `
export const BannerDiv = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom right -20rem;
`
//     position: relative;
// `

export const VideosDiv = styled.div`
  padding-top: 2rem;
  padding-inline: 1rem;
  height: 100px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const SearchDiv = styled.div`
  border: 1px solid gray;
  width: fit-content;
  display: flex;
  align-content: center;
  margin-bottom: 1rem;
  > input {
    padding-inline: 0.7rem;
    border: none;
    width: 30vw;
    font-size: 1rem;
  }
`

export const SearchButton = styled.button`
  padding-block: 0.5rem;
  padding-inline: 2rem;
  font-size: 1.2rem;
  border: none;
  border-left: 1px solid gray;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 3.8rem;
  right: 0;
  font-size: 2rem;
  background-color: transparent;
  color: black;
  z-index: 5;
  border: none;
`

export const InCon = styled.div`
  background-color: white;
  width: fit-content;
  > img {
    width: 200px;
  }
  > p {
    font-size: 2rem;
  }
`

export const BuyButton = styled.button`
  border: solid brown 1px;
  background-color: transparent;
  padding: 0.7rem;
`
export const VideoList = styled.ul`
  list-style-type: none;
  padding-block: 1rem;
  padding-inline: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  height: 100px;
  overflow: auto;
  flex-grow: 1;
  p {
    margin-top: 0;
  }
`
export const Flex = styled.div`
  display: flex;
  gap: 0.5rem;
  > img {
    width: 60px;
    height: 60px;
  }
`
export const VideoItem = styled.li`
  width: 276px;
  > img {
    width: 100%;
  }
`
export const Page = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
export const FlexCon = styled.div`
  display: flex;
  height: 500px;
  flex-grow: 1;
`
