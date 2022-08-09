import React from 'react'
import { Container, HeaderText, LogoutButton } from './styles/Header.styled'
import firebase from '../firebase/client-app'
import { useAuthState } from 'react-firebase-hooks/auth'

/**
 *
 * @returns Navigation Component
 */
function Header() {
  const [user, loading, error] = useAuthState(firebase.auth())

  /**
   *  @description logout button on the header
   */
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
        <HeaderText>GistME</HeaderText>
        {user && <LogoutButton onClick={logout}>Logout</LogoutButton>}
      </Container>
    </>
  )
}

export default Header
