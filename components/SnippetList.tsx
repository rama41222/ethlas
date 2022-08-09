import { DocumentData } from '@google-cloud/firestore'
import React, { ReactElement } from 'react'
import { useDocument } from 'react-firebase-hooks/firestore'
import firebase from '../firebase/client-app'

interface Props {
  id: string
  data: any
}

export default function SnippetList({ id, data }: Props): ReactElement {
  return (
    <div
      style={{
        maxWidth: '320px',
        display: 'block',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#342f4e',
        padding: '2em',
        paddingTop: '1em',
        borderRadius: '2em',
        overflowWrap: `break-word`,
        marginBottom: '0.5em',
        margin: '0.5em',
        textOverflow: 'wrap',
      }}
    >
      <div style={{ float: 'right' }}>
        <button>X</button>
      </div>
      <br />
      <div>
        <h2 style={{ marginBottom: 0 }}>{data?.title}</h2>
      </div>
      <hr />
      <div>
        <code style={{ marginTop: 0 }}>{data?.code}</code>
      </div>
    </div>
  )
}
