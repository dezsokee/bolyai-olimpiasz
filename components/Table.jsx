"use client";
import React, { useState, useEffect } from "react";

import { usePapaParse } from "react-papaparse";

const Table = ({ fileName }) => {
  const { readRemoteFile } = usePapaParse();
  const [tableData, setTableData] = useState(null);

  const handleReadRemoteFile = () => {
    readRemoteFile(fileName, {
      complete: (results) => {
        setTableData(results.data);
      },
    });
  };

  const renderTable = () => {
    if (!tableData) return null;
    return (
      <table className="table-fixed w-full">
        <thead>
          <tr>
            {tableData[0].map((header) => (
              <th key={header} className="text-xs w-[150px] md:text-base border-2 border-raisin-black">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.slice(1).map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="text-xs w-[150px] md:text-base border-2 border-raisin-black md:px-1 text-center"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  useEffect(() => {
    handleReadRemoteFile();
  }, []);

  return <div>{renderTable()}</div>;
};
export default Table;
