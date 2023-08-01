/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { SonContext, TestContext } from '../App';

const Child = () => {
    const [state, setState] = useContext(TestContext);
    const [son, setSon] = useContext(SonContext);
    return (
        <div className='shadow-sm bg-body-secondary w-100 mx-2 my-2 py-3 border rounded-3 d-flex flex-column justify-content-center align-items-center px-3 text-center'>
            <p className="fw-semibold">Child's Wealth: {parseFloat((state / 2) + (son / 2)).toFixed(2)}</p>

            <h6 className="small pt-2 fw-semibold">It's My Parents Wealth. So, I got some</h6>
        </div>
    );
};

export default Child;