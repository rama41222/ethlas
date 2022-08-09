import Head from 'next/head'
import Image from 'next/image'
import firebase from '../firebase/client-app'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import Auth from '../components/Auth'
import Header from '../components/Header'
import { BallTriangle } from 'react-loader-spinner'
import { Container } from './styles/index.styled'
import { FloatingButton } from '../components/styles/AddItem.styled'
import { PopUpDiv } from '../components/styles/Popup.styled'
import Popup from '../components/Popup'
import { useState, useCallback } from 'react'
import SnippetList from '../components/SnippetList'

export default function Home() {
  const db = firebase.firestore()
  const [user, loading, error] = useAuthState(firebase.auth())
  const [showPopup, setShowPopup] = useState(false)
  const [snippets, snippetLoading, snippetError] = useCollection(
    firebase.firestore().collection('snippets'),
    {},
  )

  const handleAddItem = () => {
    if (showPopup) {
      setShowPopup(false)
    } else {
      setShowPopup(true)
    }
  }
  const test = useCallback((state) => {
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
        {/* {!user && loading && (
          <BallTriangle color="#00BFFF" height={80} width={80} />
        )} */}
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
                  <SnippetList id={doc.id} key={doc.id} data={doc.data()} />
                </>
              ))}
              {snippets?.docs?.map((doc) => (
                <>
                  <SnippetList id={doc.id} key={doc.id} data={doc.data()} />
                </>
              ))}
            </div>
            <Popup showPopup={showPopup} user={user} db={db} onChange={test} />
            <FloatingButton onClick={handleAddItem}>Add Item</FloatingButton>
          </div>
        )}
      </div>
    </>
  )
}
