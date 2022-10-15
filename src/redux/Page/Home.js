import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loading } from '../reduxSlice/loadingSlice';
import { decrease, getLorems, getLorems2, increase } from '../reduxSlice/plusMinusSlice';
import Loading from './Loading';
import LoadingSpinner from '../Component/LoadingSpinner'
import Componen1 from '../Component/Componen1';
import Componen4 from '../Component/Componen4';

export default function Home() {
    // const count = useSelector(state => {

    //     return state?.plusMinus?.count
    // });

    const state = useSelector(state =>  state)
    const dispatch = useDispatch()

useEffect(()=>{
    
console.log(state?.plusMinus?.data,"useEffect");
},[state?.plusMinus?.data])


    

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">


            <Componen1></Componen1>
            {/* <h1>{count}</h1> */}
            <button onClick={() => dispatch(increase())}>+</button>
            <button onClick={() => dispatch(decrease())}>-</button><br />


            <Componen4></Componen4>
            





            <button onClick={() => {
                console.log(getLorems2());

                dispatch(getLorems2(2));



                console.log(state?.plusMinus?.data,"data")
                }
                }>GetLorem</button><br />
                
            {/* {state?.plusMinus?.data?.map?.(() => { return <div>1</div> })} */}
        </div>
    )
}
