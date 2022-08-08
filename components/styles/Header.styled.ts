import styled from 'styled-components'

export const Container = styled.div`
  font-family: Andale Mono;

  font-size: 2.5em;
  background-color: green;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 0.25em;
  padding-right: 0.25em;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  background-color: #333;
  display: flex;
  align-items: center;
`
export const HeaderText = styled.div`
  margin-right: 0.5em;
  font-family: Andale Mono;
`
export const LogoutButton = styled.button`
  background-color: #342f4e;
  border: none;
  font-family: Andale Mono;
  color: white;
  padding: 1em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 0.5em;
  font-weight: bold;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 0.8em;
  position: fixed;
  top: 0.3em;
  right: 0.3em;
`
