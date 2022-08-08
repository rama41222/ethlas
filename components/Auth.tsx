import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from '../firebase/client-app'
import { useAuthState } from 'react-firebase-hooks/auth'
import HomeTitle from './HomeTitle'
import { AuthContainer } from './styles/Auth.styled'

// Configure FirebaseUI.
const uiConfig = {
  // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  // We will display GitHub as auth providers.
  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
}

function SignInScreen() {
  const [user, loading] = useAuthState(firebase.auth())

  return (
    <>
      {!user && !loading && (
        <AuthContainer>
          <div>
            <HomeTitle />
          </div>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </AuthContainer>
      )}
    </>
  )
}

export default SignInScreen
