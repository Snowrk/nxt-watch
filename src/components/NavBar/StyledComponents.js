import styled from 'styled-components'

export const NavCon = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-block: 0.5rem;
  padding-inline: 0.5rem;
  > a > img {
    width: 200px;
  }
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const ThemeButton = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
  font-size: 2rem;
  display: flex;
  align-items: center;
`

export const ProfileCon = styled.div`
  > img {
    width: 40px;
  }
`

export const LogoutButton = styled.button`
  border: solid blue 1px;
  border-radius: 0.2rem;
  padding: 0.7rem;
  color: blue;
  background-color: transparent;
`
