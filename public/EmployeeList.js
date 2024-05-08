import EmployeeAdd from './EmployeeAdd.js';
import EmployeeFilter from './EmployeeFilter.js';
class BorderWrap extends React.Component {
  render() {
    const borderStyle = {
      border: "3px solid silver",
      padding: 6
    };
    return /*#__PURE__*/React.createElement("div", {
      style: borderStyle
    }, this.props.children);
  }
}
class EmployeeTable extends React.Component {
  render() {
    const rowStyle = {
      "border": "1px solid black",
      "padding": "5px"
    };
    return /*#__PURE__*/React.createElement("table", {
      style: {
        width: "100%",
        borderCollapse: "collapse"
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Extension"), /*#__PURE__*/React.createElement("th", null, "Email"), /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Notes"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(EmployeeRow, {
      rowStyle: rowStyle,
      employeeName: "Bob",
      employeeExtension: 123,
      employeeEmail: "bob@sdsu.edu",
      employeeTitle: "Manager"
    }, "Needs Access To Salesforce."), /*#__PURE__*/React.createElement(EmployeeRow, {
      rowStyle: rowStyle,
      employeeName: "Sally",
      employeeExtension: 456,
      employeeEmail: "sally@sdsu.edu",
      employeeTitle: "HR"
    }, "Needs A New Chair."), /*#__PURE__*/React.createElement(EmployeeRow, {
      rowStyle: rowStyle,
      employeeName: "John",
      employeeExtension: 789,
      employeeEmail: "john@sdsu.edu",
      employeeTitle: "Developer"
    }, "Needs A New Laptop.")));
  }
}
class EmployeeRow extends React.Component {
  render() {
    const style = this.props.rowStyle || {};
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.employeeName), /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.employeeExtension), /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.employeeEmail), /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.employeeTitle), /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.children));
  }
}
export default class EmployeeList extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BorderWrap, null, /*#__PURE__*/React.createElement("h1", null, " Employee Management Application "), /*#__PURE__*/React.createElement(EmployeeFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeAdd, null)));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(EmployeeList, null), document.getElementById('content'));