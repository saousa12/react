import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import SideBar from "./SideBar";

function Department() {
  const [department, setDepartment] = useState([]);
  useEffect(() => {
    document.title = "Department";
    axios.get("http://localhost:8080/dept").then((res) => {
      setDepartment(res.data);
    });
  }, []);

  const listDept = [
    { Header: "Dept No.", accessor: "deptNo" },
    { Header: "Department Name", accessor: "dname" },
    { Header: "Location", accessor: "loc" },
  ];

  return (
    <>
      <SideBar />

      <div className="p-4 sm:ml-64" id="employee">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {listDept.map((column) => (
                  <th scope="col" className="px-6 py-3" key={column.Header}>
                    {column.Header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {department.map((dept) => (
                <tr
                  key={dept.deptno}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  {listDept.map((column) => (
                    <td key={column.Header} className="px-6 py-4">
                      {dept[column.accessor]}
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

export default Department;
