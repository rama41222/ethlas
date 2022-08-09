import React, { ReactElement } from 'react'
import {
  CodeSnippet,
  SnippetCloseBtn,
  SnippetContainer,
} from './styles/SnippetList.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

interface Props {
  id: string
  data: any
  db: any
}

/**
 *
 * @description Displays a Snippet
 * @param {}
 * @returns CodeSnippet
 */
export default function SnippetList({ id, data, db }: Props): ReactElement {
  const handleClose = async (e) => {
    await db.collection('snippets').doc(id).delete()
  }
  return (
    <SnippetContainer id={id}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'baseline',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h1>{data?.title}</h1>
        </div>
        <div>
          <SnippetCloseBtn onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} />
          </SnippetCloseBtn>
        </div>
      </div>
      <div>
        <hr />
        <div>
          <CodeSnippet style={{ marginTop: 0 }}>{data?.code}</CodeSnippet>
        </div>
      </div>
    </SnippetContainer>
  )
}
