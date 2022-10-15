import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from './LoadingSpinner'

export default function Componen4() {
    const state = useSelector(state =>  state)

    const dispatch = useDispatch()


  return (
    <div>            {state?.loading?.loadingShow ? <LoadingSpinner /> : null}
    </div>
  )
}
