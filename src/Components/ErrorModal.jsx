import React from "react";

function ErrorModal({ errorMessage, onConfirm }) {
  return (
    <>
      <div className="backdrop" />
      <div className="card modal">
        <div className="" onClick={onConfirm} />
        <header className="header">
          <h2>Invalid Input</h2>
        </header>
        <div className="content">
          <p>{errorMessage}</p>
        </div>
        <footer className="actions">
          <button className="button" onClick={onConfirm}>
            Okay
          </button>
        </footer>
      </div>
    </>
  );
}

export default ErrorModal;
