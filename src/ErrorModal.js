import React from 'react'
import './ErrorModal.css'

const ErrorModal = ({ modalMessage, setModalMessage }) => {
  return (
    <div className="modal">
      <section className="modal-box">
        <p>Whoops! Something went wrong.</p>
        <button onClick={() => setModalMessage('')}>OK</button>
      </section>
    </div>
  )
}

export default ErrorModal