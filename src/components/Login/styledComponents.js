import styled from 'styled-components'

export const BgCon = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MinCon = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    width: 150px;
  }
  > form {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    > button {
      margin-top: 1rem;
      color: #ffffff;
    }
  }
`

export const CheckCon = styled.div`
  padding-top: 0.2rem;
  > input {
    margin-left: 0;
  }
`
