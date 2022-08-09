import styled from 'styled-components'

export const SnippetContainer = styled.div`
  max-width: 320px;
  min-width: 320px;
  display: block;
  flex-direction: row;
  align-items: center;
  background-color: #342f4e;
  padding: 2em;
  padding-top: 1em;
  border-radius: 2em;
  overflow-wrap: break-word;
  margin-bottom: 0.5em;
  margin: 0.5em;
  text-overflow: wrap;
`

export const SnippetCloseBtn = styled.button`
  background-color: #3c6382;
  border: none;
  font-family: Andale Mono;
  color: white;
  padding: 1em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 0.8em;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.8em;
`
