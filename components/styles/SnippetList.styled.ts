import styled from 'styled-components'

export const SnippetContainer = styled.div`
  max-width: 320px;
  min-width: 300px;
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
  width: 40px;
  height: 40px;
  font-family: Andale Mono;
  font-weight: bold;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  border-radius: 100%;
`
export const CodeSnippet = styled.pre`
  color: white;
  line-height: 1.1em;
  padding: 1em;
  overflow-wrap: break-word;
  overflow-x: scroll;
`
