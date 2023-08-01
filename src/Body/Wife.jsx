/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { SonContext, TestContext } from '../App';
import Child from './Child';

const Wife = () => {
    const [state, setState] = useContext(TestContext);
    const [son, setSon] = useContext(SonContext);
    return (
        <div className='shadow w-100 mx-2 my-2 py-3 border rounded-3 d-flex flex-column justify-content-center align-items-center px-3 text-center bg-danger-subtle'>
            <p className="fw-semibold">Wife's Wealth: {parseFloat(state / 2 + son).toFixed(2)} ( <span className='text-danger'>They Bought:</span> {son})</p>
            <button className="btn btn-danger" onClick={() => setSon(son + 1)}>Buy Own Properties</button>
            <h6 className="small pt-2 fw-semibold">Don't Get Others It's Only My & My Husband Properties</h6>
            <div className="w-100 d-flex">
                <Child></Child>
            </div>
        </div>
    );
};

export default Wife;