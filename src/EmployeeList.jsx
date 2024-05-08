import EmployeeAdd from './EmployeeAdd.js';
import EmployeeFilter from './EmployeeFilter.js';

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
    render () {
        const rowStyle = { "border": "1px solid black", "padding": "5px" };
        return(
            <table style={{width: "100%", borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Extension</th>
                        <th>Email</th>
                        <th>Title</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <EmployeeRow rowStyle={rowStyle} employeeName="Bob" employeeExtension={123} employeeEmail="bob@sdsu.edu" employeeTitle="Manager">
                        Needs Access To Salesforce.
                    </EmployeeRow>
                    <EmployeeRow rowStyle={rowStyle} employeeName="Sally" employeeExtension={456} employeeEmail="sally@sdsu.edu" employeeTitle="HR">
                        Needs A New Chair.
                    </EmployeeRow>
                    <EmployeeRow rowStyle={rowStyle} employeeName="John" employeeExtension={789} employeeEmail="john@sdsu.edu" employeeTitle="Developer">
                        Needs A New Laptop.
                    </EmployeeRow>
                </tbody>
            </table>
        )
        }
} 

class EmployeeRow extends React.Component {
    render () {
        const style = this.props.rowStyle || {};
        return (
            <tr>
                <td style={style}>{this.props.employeeName}</td>
                <td style={style}>{this.props.employeeExtension}</td>
                <td style={style}>{this.props.employeeEmail}</td>
                <td style={style}>{this.props.employeeTitle}</td>
                <td style={style}>{this.props.children}</td>
            </tr>
        )
    }
} 



export default class EmployeeList extends React.Component {
    render () {
    return(<React.Fragment>
            <BorderWrap>
                <h1> Employee Management Application </h1>
                <EmployeeFilter />
                <hr />
                <EmployeeTable />
                <hr />
                <EmployeeAdd />
            </BorderWrap>
          </React.Fragment>)
    }
} 


ReactDOM. render (<EmployeeList />,  document.getElementById ('content'))