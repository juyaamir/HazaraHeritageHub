'use client'
import React from 'react'

const ErrorBoundary = ( { error, reset }: {
    error: Error,
    reset: () => void,
}) => {
  return (
    <div>
        <h1 className='text-[2rem] text-red-600 font-bold text-center'>Error: {error.message}</h1>
        <button onClick={reset} className='p-2 bg-[red] text-[white]'>Try again</button>
    </div>
  )
}

export default ErrorBoundary