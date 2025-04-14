import React from 'react'

const Loader = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-gray-100 bg-opacity-50">
    <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
  </div>
  )
}

export default Loader