/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { SonContext, TestContext } from '../App';
import Wife from './Wife';

const Son = () => {
    const [state, setState] = useContext(TestContext);
    const [son, setSon] = useContext(SonContext);
    return (
        <div className='shadow w-50 mx-2 my-2 py-3 border rounded-3 d-flex flex-column justify-content-center align-items-center px-3 text-center bg-success-subtle'>
            <p className="fw-semibold">Son's Wealth: {parseFloat(state / 2 + son).toFixed(2)} ( <span className='text-danger'>They Bought:</span> {son})</p>
            <button className="btn btn-success" onClick={()=>setSon(son + 1)}>Buy Own Properties</button>
            <h6 className="small pt-2 fw-semibold">Don't Get Others Except Wife It's Only My Properties</h6>
            <div className="w-100 d-flex">
                <Wife></Wife>
            </div>
        </div>
    );
};

export default Son;