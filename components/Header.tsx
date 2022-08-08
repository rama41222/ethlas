import React from 'react'
import { Container, HeaderText, LogoutButton } from './styles/Header.styled'
import firebase from '../firebase/client-app'
import { useAuthState } from 'react-firebase-hooks/auth'

function Header() {
  const [user, loading, error] = useAuthState(firebase.auth())
  const logout = async () => {
    try {
      await firebase.auth().signOut()
    } catch (error) {
      console.log('error', error)
    } finally {
      console.log('logged out')
    }
  }
  return (
    <>
      <Container>
        <HeaderText>Snippet</HeaderText>
        {user && <LogoutButton onClick={logout}>Logout</LogoutButton>}
      </Container>
    </>
  )
}

export default Header
