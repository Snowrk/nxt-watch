import styled from 'styled-components'

export const FxCon = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};
`
export const BannerDiv = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom right -20rem;
  position: relative;
`

export const VideosDiv = styled.div`
  padding-top: 2rem;
  padding-inline: 1rem;
  height: 100px;
  flex-grow: 1;
  overflow: auto;
`

export const SearchDiv = styled.div`
  border: 1px solid gray;
  width: fit-content;
  display: flex;
  align-content: center;
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
  top: 0.5rem;
  right: 2rem;
  font-size: 2rem;
  background-color: transparent;
  color: black;
  z-index: 5;
  border: none;
`

export const InCon = styled.div`
  width: 30vw;
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
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0;
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
  > img {
    width: 250px;
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
