import { Table, Button, Modal } from 'react-bootstrap';
import EmployeeAdd from './EmployeeAdd.jsx';
import EmployeeFilter from './EmployeeFilter.jsx';
import { init } from './data.js';
import React  from 'react';

class BorderWrap extends React. Component {
    render () {
        const borderStyle = {border:"3px solid silver",padding: 6} 
        return (
            <div style={borderStyle}>
                {this.props.children}
            </div>
        )
    }
}

class EmployeeTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        employees: props.employees
      };
    }
  
    render() {
      const rowStyle = { border: "1px solid black", padding: "5px" };
  
      return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Extension</th>
              <th>Email</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(employee => (
              <EmployeeRow
                key={employee[0]}
                rowStyle={rowStyle}
                employeeId={employee[0]}
                employeeName={employee[1]}
                employeeExtension={employee[2]}
                employeeEmail={employee[3]}
                employeeTitle={employee[4]}
                onDelete={() => this.props.onDelete(employee[0])}
              />
            ))}
          </tbody>
        </Table>
      );
    }
  }

  class EmployeeRow extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modalVisible: false
      };
      this.toggleModal = this.toggleModal.bind(this);
    }
  
    toggleModal() {
      this.setState(prevState => ({
        modalVisible: !prevState.modalVisible
      }));
    }
  
    render() {
      const { rowStyle, employeeName, employeeExtension, employeeEmail, employeeTitle, onDelete } = this.props;
  
      return (
        <tr>
          <td style={rowStyle}>{employeeName}</td>
          <td style={rowStyle}>{employeeExtension}</td>
          <td style={rowStyle}>{employeeEmail}</td>
          <td style={rowStyle}>{employeeTitle}</td>
          <td style={rowStyle}>
            <Button variant="danger" onClick={this.toggleModal}>Delete</Button>
            <Modal show={this.state.modalVisible} onHide={this.toggleModal}>
              <Modal.Header closeButton>
                <Modal.Title>Delete Confirmation</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you sure you want to delete {employeeName}?</Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={this.toggleModal}>Cancel</Button>
                <Button variant="success" onClick={() => {
                  onDelete(this.props.employeeId);
                  this.toggleModal();
                }}>Yes</Button>
              </Modal.Footer>
            </Modal>
          </td>
        </tr>
      );
    }
  }


  export default class EmployeeList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        employees: init()
      };
      this.handleDelete = this.handleDelete.bind(this);
    }
  
    handleDelete(employeeId) {
      const updatedEmployees = this.state.employees.filter(employee => employee[0] !== employeeId);
      this.setState({ employees: updatedEmployees }, () => {
        this.forceUpdate();
      });
    }
  
    render() {
      return (
        <React.Fragment>
          <BorderWrap>
            <h1>Employee Management Application</h1>
            <EmployeeFilter />
            <hr />
            <EmployeeTable key={this.state.employees.length} employees={this.state.employees} onDelete={this.handleDelete} />
            <hr />
            <EmployeeAdd />
          </BorderWrap>
        </React.Fragment>
      );
    }
  }


ReactDOM. render (<EmployeeList />,  document.getElementById ('content'))