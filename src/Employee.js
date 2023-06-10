import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "./SideBar";

function Employee() {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    document.title = "Employee";
    axios.get("http://localhost:8080/emp").then((res) => {
      const data = res.data.map((item) => ({
        ...item,
        hiredate: new Date(item.hiredate).toLocaleDateString(),
      }));
      setEmployee(data);
    });
  }, []);

  const listEmp = [
    { Header: "Name", accessor: "ename" },
    { Header: "Job", accessor: "job" },
    { Header: "MGR", accessor: "mgr" },
    { Header: "Hiredate", accessor: "hiredate" },
    { Header: "Commission_pct", accessor: "commission_pct" },
    { Header: "Dept No.", accessor: "deptno" },
  ];

  return (
    <>
      <SideBar />
      <div className="p-4 sm:ml-64" id="employee">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {listEmp.map((column) => (
                  <th scope="col" className="px-6 py-3" key={column.Header}>
                    {column.Header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {employee.map((emp) => (
                <tr
                  key={emp.ename}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  {listEmp.map((column) => (
                    <td key={column.Header} className="px-6 py-4">
                      {emp[column.accessor]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Employee;
