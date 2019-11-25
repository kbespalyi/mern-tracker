import React from 'react';

export function ErrorMessage(props) {
  const isError = props.isError
  const errorMessage = props.errorMessage
  if (isError) {
    return (
      <div className="alert alert-danger">
        <strong>{errorMessage}</strong>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}
