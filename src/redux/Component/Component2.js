import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loading } from '../reduxSlice/loadingSlice'
import LoadingSpinner from './LoadingSpinner'

export default function Componen2() {

 
    const state = useSelector(state =>  state)
    const dispatch = useDispatch()

console.log("Component2");


  return (
    <div>
        <button onClick={() => dispatch(loading(!state?.loading?.loadingShow))}>Loading</button><br /> 
    </div>
  )
}
