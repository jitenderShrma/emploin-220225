import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const Employee = ({ showModal, selectedEmployee, closeModal }) => {
    return (
        <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Employee Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {selectedEmployee && (
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src={selectedEmployee.avatar}
                                alt="Avatar"
                                style={{ width: '100%', borderRadius: '50%', marginBottom: '10px' }}
                            />
                            <p className='mb-0 left-align'>{selectedEmployee.jobTitle}</p>
                            {/* <p>{selectedEmployee.age}</p> */}
                            <p className='left-align mb-0'>Age: {selectedEmployee.age}</p>
                            <p className='left-align'>DOJ: {dateFormat(selectedEmployee.joinedDate)}</p>

                        </div>
                        {/* Second Column */}
                        <div className="col-md-6">
                            <p className='my-name'>{selectedEmployee.firstName} {selectedEmployee.lastName}</p>
                            <p>{selectedEmployee.bio}</p>
                        </div>
                    </div>
                )}
            </Modal.Body>
        </Modal>
    )
}

const dateFormat = (date) => {
    const today = new Date(date);
    const formattedDate = today.toLocaleDateString();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString(undefined, options);
}

export default Employee;