import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../Component/LoadingSpinner'

export default function Loading() {
  const state = useSelector(state => state)
    const dispatch = useDispatch()
  return (
    <div>
      {state?.loading?.loadingShow ? <LoadingSpinner /> : null}
    </div>
  )
}
