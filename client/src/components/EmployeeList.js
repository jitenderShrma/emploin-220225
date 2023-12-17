import React, { useState, useEffect } from 'react';
import { connect, } from 'react-redux';
import { Table, Pagination } from 'react-bootstrap';
import Employee from './Employee';
import { getEmployees } from '../redux/actions/employeeAction';


const EmployeeList = ({ employees, getEmployees }) => {

  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employeesPerPage] = useState(10); 
  const [currentPage, setCurrentPage] = useState(1);
  const openModal = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedEmployee(null);
    setShowModal(false);
  };
  useEffect(() => {
    getEmployees();
  }, []);


  const onPageClick = async currentPage => {
    await getEmployees(currentPage + 1);
    setCurrentPage(currentPage + 1);
  }


  return (
    employees.isLoading
      ? <p>Loading...</p>
      : (<div className='mt-4'>
        <Table responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {employees.employees.map((employee) => (
              <tr style={{ cursor: 'pointer' }} key={employee._id} onClick={() => openModal(employee)}>
                <td>{employee._id}</td>
                <td>{employee.firstName} {employee.lastName}</td>
                <td>{employee.contactNo}</td>
                <td>{employee.address}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Pagination>
          {Array.from({ length: Math.ceil(employees.total / employeesPerPage) }).map((_, index) => (
            <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => onPageClick(index)}>
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>

        <Employee showModal={showModal} closeModal={closeModal} selectedEmployee={selectedEmployee} />
      </div>)
  );
};

const mapStateToProps = state => ({
  employees: state.employees,
})

export default connect(mapStateToProps, { getEmployees })(EmployeeList);
