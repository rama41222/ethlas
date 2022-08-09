import React, { ReactElement } from 'react'
import { SnippetCloseBtn, SnippetContainer } from './styles/SnippetList.styled'

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
      <div style={{ float: 'right' }}>
        <SnippetCloseBtn onClick={handleClose}>X</SnippetCloseBtn>
      </div>
      <br />
      <div>
        <h2 style={{ marginBottom: 0 }}>{data?.title}</h2>
      </div>
      <hr />
      <div>
        <code style={{ marginTop: 0 }}>{data?.code}</code>
      </div>
    </SnippetContainer>
  )
}
