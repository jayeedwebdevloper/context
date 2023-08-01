/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { TestContext } from '../App';
import Son from './Son';
import Sister from './Sister';

const Father = () => {

    const [state, setState] = useContext(TestContext);

    return (
        <div className='bg-info-subtle shadow border d-flex align-items-center justify-content-center flex-column my-2 py-3 px-3 rounded-3 '>
            <p className='pt-2 pb-2 fw-semibold'>Father's Properties: {state}</p>
            <button onClick={()=>setState(state + 1)} className='btn btn-primary'>Buy New Properties</button>
            <div className="w-100 bg-primary-subtle d-flex border rounded-3 shadow-sm mx-5 my-4 py-3">
                <Son></Son>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Father;