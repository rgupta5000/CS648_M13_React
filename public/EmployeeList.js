"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactBootstrap = require("react-bootstrap");
var _EmployeeAdd = _interopRequireDefault(require("./EmployeeAdd.jsx"));
var _EmployeeFilter = _interopRequireDefault(require("./EmployeeFilter.jsx"));
var _data = require("./data.js");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var BorderWrap = /*#__PURE__*/function (_React$Component) {
  function BorderWrap() {
    _classCallCheck(this, BorderWrap);
    return _callSuper(this, BorderWrap, arguments);
  }
  _inherits(BorderWrap, _React$Component);
  return _createClass(BorderWrap, [{
    key: "render",
    value: function render() {
      var borderStyle = {
        border: "3px solid silver",
        padding: 6
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: borderStyle
      }, this.props.children);
    }
  }]);
}(_react["default"].Component);
var EmployeeTable = /*#__PURE__*/function (_React$Component2) {
  function EmployeeTable(props) {
    var _this;
    _classCallCheck(this, EmployeeTable);
    _this = _callSuper(this, EmployeeTable, [props]);
    _this.state = {
      employees: props.employees
    };
    return _this;
  }
  _inherits(EmployeeTable, _React$Component2);
  return _createClass(EmployeeTable, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var rowStyle = {
        border: "1px solid black",
        padding: "5px"
      };
      return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Table, {
        striped: true,
        bordered: true,
        hover: true
      }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Name"), /*#__PURE__*/_react["default"].createElement("th", null, "Extension"), /*#__PURE__*/_react["default"].createElement("th", null, "Email"), /*#__PURE__*/_react["default"].createElement("th", null, "Title"), /*#__PURE__*/_react["default"].createElement("th", null, "Actions"))), /*#__PURE__*/_react["default"].createElement("tbody", null, this.state.employees.map(function (employee) {
        return /*#__PURE__*/_react["default"].createElement(EmployeeRow, {
          key: employee[0],
          rowStyle: rowStyle,
          employeeId: employee[0],
          employeeName: employee[1],
          employeeExtension: employee[2],
          employeeEmail: employee[3],
          employeeTitle: employee[4],
          onDelete: function onDelete() {
            return _this2.props.onDelete(employee[0]);
          }
        });
      })));
    }
  }]);
}(_react["default"].Component);
var EmployeeRow = /*#__PURE__*/function (_React$Component3) {
  function EmployeeRow(props) {
    var _this3;
    _classCallCheck(this, EmployeeRow);
    _this3 = _callSuper(this, EmployeeRow, [props]);
    _this3.state = {
      modalVisible: false
    };
    _this3.toggleModal = _this3.toggleModal.bind(_this3);
    return _this3;
  }
  _inherits(EmployeeRow, _React$Component3);
  return _createClass(EmployeeRow, [{
    key: "toggleModal",
    value: function toggleModal() {
      this.setState(function (prevState) {
        return {
          modalVisible: !prevState.modalVisible
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$props = this.props,
        rowStyle = _this$props.rowStyle,
        employeeName = _this$props.employeeName,
        employeeExtension = _this$props.employeeExtension,
        employeeEmail = _this$props.employeeEmail,
        employeeTitle = _this$props.employeeTitle,
        onDelete = _this$props.onDelete;
      return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        style: rowStyle
      }, employeeName), /*#__PURE__*/_react["default"].createElement("td", {
        style: rowStyle
      }, employeeExtension), /*#__PURE__*/_react["default"].createElement("td", {
        style: rowStyle
      }, employeeEmail), /*#__PURE__*/_react["default"].createElement("td", {
        style: rowStyle
      }, employeeTitle), /*#__PURE__*/_react["default"].createElement("td", {
        style: rowStyle
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: "danger",
        onClick: this.toggleModal
      }, "Delete"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal, {
        show: this.state.modalVisible,
        onHide: this.toggleModal
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Header, {
        closeButton: true
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Title, null, "Delete Confirmation")), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Body, null, "Are you sure you want to delete ", employeeName, "?"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Footer, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: "secondary",
        onClick: this.toggleModal
      }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: "danger",
        onClick: function onClick() {
          onDelete();
          _this4.toggleModal();
        }
      }, "Yes")))));
    }
  }]);
}(_react["default"].Component);
var EmployeeList = exports["default"] = /*#__PURE__*/function (_React$Component4) {
  function EmployeeList(props) {
    var _this5;
    _classCallCheck(this, EmployeeList);
    _this5 = _callSuper(this, EmployeeList, [props]);
    _this5.state = {
      employees: (0, _data.init)()
    };
    _this5.handleDelete = _this5.handleDelete.bind(_this5);
    return _this5;
  }
  _inherits(EmployeeList, _React$Component4);
  return _createClass(EmployeeList, [{
    key: "handleDelete",
    value: function handleDelete(employeeId) {
      var updatedEmployees = this.state.employees.filter(function (employee) {
        return employee[0] !== employeeId;
      });
      this.setState({
        employees: updatedEmployees
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(BorderWrap, null, /*#__PURE__*/_react["default"].createElement("h1", null, "Employee Management Application"), /*#__PURE__*/_react["default"].createElement(_EmployeeFilter["default"], null), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(EmployeeTable, {
        employees: this.state.employees,
        onDelete: this.handleDelete
      }), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(_EmployeeAdd["default"], null)));
    }
  }]);
}(_react["default"].Component);
ReactDOM.render( /*#__PURE__*/_react["default"].createElement(EmployeeList, null), document.getElementById('content'));