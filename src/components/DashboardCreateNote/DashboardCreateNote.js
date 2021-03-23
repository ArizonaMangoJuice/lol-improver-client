import React from 'react';
import { connect } from 'react-redux';
import { createNote } from '../../actions/notes';

const DashboardCreateNote = ({ dispatch }) => {
    return (
        <div className='left-container-width'>
            {/* <h1 className='left-container-title'>Level up your skill</h1> */}
            <h1 className='left-container-title'>This Site is under Construction!</h1>
            <div className='left-container-buttons'>
                <div className='backdrop-wrapper-orange flex'>
                    <button
                        onClick={() => dispatch(createNote())}
                        className='left-container-button'>Create Note</button>
                </div>
                <div className='three-dots-container'>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                </div>
            </div>
        </div>
    )
}

export default connect()(DashboardCreateNote);