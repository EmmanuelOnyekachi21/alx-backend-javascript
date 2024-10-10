export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartment() {
      return Object.keys(employeesList).length;
    },
  };
}
