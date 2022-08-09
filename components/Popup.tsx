import React from 'react'
import {
  PopupButton,
  PopupButtons,
  PopUpDiv,
  PopupFormGroup,
  PopupH2,
  PopupInner,
  PopupInput,
  PopupLabel,
  PopupTextArea,
} from './styles/Popup.styled'
import { useState, useEffect } from 'react'

function Popup(props) {
  const [form, setForm] = useState({
    title: '',
    code: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.title || !form.code) {
      alert('Please fill out all fields')
      return
    }
    setForm({
      title: '',
      code: '',
    })

    await props.db
      .collection('snippets')
      .doc()
      .set({ title: form.title, code: form.code, user: props.user.uid })

    props.onChange(false)
  }

  return (
    props.showPopup && (
      <PopUpDiv>
        <PopupInner>
          <PopupH2>Add a new code snippet</PopupH2>
          <form onSubmit={handleSubmit}>
            <PopupFormGroup>
              <PopupLabel>Title</PopupLabel>
              <PopupInput
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </PopupFormGroup>

            <PopupFormGroup>
              <PopupLabel>Snippet</PopupLabel>
              <PopupTextArea
                value={form.code}
                onChange={(e) => setForm({ ...form, code: e.target.value })}
              />
            </PopupFormGroup>

            <PopupButtons>
              <PopupButton type="submit">Submit</PopupButton>
              <PopupButton type="button" onClick={() => props.onChange(false)}>
                Close
              </PopupButton>
            </PopupButtons>
          </form>
        </PopupInner>
      </PopUpDiv>
    )
  )
}

export default Popup
