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
import { throws } from 'assert'

function Popup(props) {
  const [form, setForm] = useState({
    title: '',
    desc: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.title || !form.desc) {
      alert('Please fill out all fields')
      return
    }
    setForm({
      title: '',
      desc: '',
    })
  }

  return (
    props.props && (
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
                value={form.desc}
                onChange={(e) => setForm({ ...form, desc: e.target.value })}
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
