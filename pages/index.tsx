import firebase from '../firebase/client-app'
import { FloatingButton } from '../components/styles/AddItem.styled'
import { useState, useCallback, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import Auth from '../components/Auth'
import Popup from '../components/Popup'
import Header from '../components/Header'
import SnippetList from '../components/SnippetList'
import { DocumentData } from '@google-cloud/firestore'

export default function Home() {
  // initialize db
  const db = firebase.firestore()
  // fetch logged user
  const [user, loading, error] = useAuthState(firebase.auth())
  // popup state
  const [showPopup, setShowPopup] = useState(false)
  const [snippets, setSnippets] = useState([] as DocumentData)
  // snippet state
  // const [dbSnippets] =
  useEffect(() => {
    // fetch snippet list
    const fetchData = async (): Promise<DocumentData> => {
      const data = await db
        .collection('snippets')
        .where('user', '==', user?.uid)
        .get()
      return data
    }

    fetchData()
      .then((data: DocumentData) => {
        setSnippets(data)
      })
      .catch(console.error)
  }, [user])

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
