import React, { useState } from 'react'
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

/**
 * @description Modal component to add a gist
 * @param {}
 * @returns
 */
function Popup(props) {
  // Form status
  const [form, setForm] = useState({
    title: '',
    code: '',
  })

  // Handles form submit event
  const handleSubmit = async (e) => {
    e.preventDefault()

    // display a temporary alert if fields are empty
    if (!form.title || !form.code) {
      alert('Please fill out all fields')
      return
    }
    // update db
    await props.db
      .collection('snippets')
      .doc()
      .set({ title: form.title, code: form.code, user: props.user.uid })

    // clear form state
    setForm({
      title: '',
      code: '',
    })
    // close the popup
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
