/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { SisterContext, TestContext } from '../App';

const Sister = () => {
    const [state, setState] = useContext(TestContext);
    const [sister, setSister] = useContext(SisterContext);
    return (
        <div className='shadow w-50 mx-2 my-2 py-3 px-3 text-center border rounded-3 d-flex flex-column justify-content-center align-items-center bg-warning-subtle'>
            <p className="fw-semibold">Sister's Wealth: {parseFloat(state / 3 + sister).toFixed(2)} ( <span className='text-danger'>She Bought:</span> {sister})</p>
            <button className="btn btn-success" onClick={() => setSister(sister + 1)}>Buy For Husband & Herself</button>
            <h6 className="small pt-2 fw-semibold">Don't Get Anyone from this wealth, It's Only My and My Husband's Properties</h6>
        </div>
    );
};

export default Sister;