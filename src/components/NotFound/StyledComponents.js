import styled from 'styled-components'

export const FxCon = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideosDiv = styled.div`
  padding-top: 2rem;
  padding-inline: 1rem;
  height: 100px;
  flex-grow: 1;
  overflow: auto;
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
  display: flex;
  gap: 1rem;
  > img {
    width: 600px;
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
