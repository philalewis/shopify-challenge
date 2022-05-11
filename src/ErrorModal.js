import React from 'react'
import './ErrorModal.css'

const ErrorModal = ({ modalMessage, setModalMessage }) => {
  return (
    <div className="modal">
      <section className="modal-box">
        <div className="error-message-container">
          <p>Whoops! Something went wrong.</p>
        </div>
        <button
          className="modal-button"
          onClick={() => setModalMessage('')}>OK
        </button>
      </section>
    </div>
  )
}

export default ErrorModal