import React, { useContext } from 'react';

export default function checkContext() {
  const { sharedState } = useContext()
  console.log('dawg', sharedState)
  return (
  <div>HI {sharedState}</div>
  )
}

