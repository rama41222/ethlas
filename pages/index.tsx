import firebase from '../firebase/client-app'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import Auth from '../components/Auth'
import Header from '../components/Header'
import { FloatingButton } from '../components/styles/AddItem.styled'
import Popup from '../components/Popup'
import { useState, useCallback } from 'react'
import SnippetList from '../components/SnippetList'

export default function Home() {
  // initialize db
  const db = firebase.firestore()
  // fetch logged user
  const [user, loading, error] = useAuthState(firebase.auth())
  // popup state
  const [showPopup, setShowPopup] = useState(false)
  // snippet state
  const [snippets, snippetLoading, snippetError] = useCollection(
    firebase.firestore().collection('snippets'),
    {},
  )

  /**
   * @description Adds a snippet to the list of snippet items
   */
  const handleAddItem = () => {
    if (showPopup) {
      setShowPopup(false)
    } else {
      setShowPopup(true)
    }
  }

  /**
   * @description Handle popup close event
   */
  const closeCallback = useCallback((state) => {
    // change popup show state
    setShowPopup(false)
  }, [])

  return (
    <>
      {user && !loading && <Header />}
      <div
        style={{
          display: 'flex',
          height: 'auto',
          minHeight: '100vh',
          width: '100vw',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          background:
            'linear-gradient(180deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
          padding: `10em`,
        }}
      >
        {!user && !loading && <Auth />}
        {user && !loading && (
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              {snippets?.docs?.map((doc) => (
                <>
                  <SnippetList
                    id={doc.id}
                    key={doc.id}
                    db={db}
                    data={doc.data()}
                  />
                </>
              ))}
            </div>
            <Popup
              showPopup={showPopup}
              user={user}
              db={db}
              onChange={closeCallback}
            />
            <FloatingButton onClick={handleAddItem}>[+]</FloatingButton>
          </div>
        )}
      </div>
    </>
  )
}
