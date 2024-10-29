import React from 'react'

export const ContainerCounters = ({children}) => {
  return (
    <div className='min-h-screen bg-blue-200 w-screen flex flex-row justify-center items-center gap-4'>
        {children}
    </div>
  )
}
