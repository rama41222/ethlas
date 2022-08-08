import styled from 'styled-components'

export const PopUpDiv = styled.div`
  background-color: #342f4e;
  font-family: Andale Mono;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  text-align: left;
`
export const PopupInner = styled.div`
  background-color: #342f4e;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 480px;
  overflow: auto;
  max-height: calc(100vh - 4rem);
`
export const PopupFormGroup = styled.div`
  margin-bottom: 1rem;
`

export const PopupH2 = styled.h2`
  margin-bottom: 1rem;
`

export const PopupInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem;
  resize: vertical;
  max-height: 200px;
  margin-bottom: 0.5rem;
`

export const PopupTextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.5rem;
  resize: vertical;
  max-height: 200px;
  margin-bottom: 0.5rem;
`

export const PopupButton = styled.button`
  margin-top: 1rem;
  appearance: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--darker);
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
`

export const PopupButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-left: -0.5rem;
`
export const PopupLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`
