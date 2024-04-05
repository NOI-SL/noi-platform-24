"use client";
import React, { useState } from "react";

const dataArray = [
  {
    position: 1,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 2,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 3,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 4,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 5,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 6,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 7,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 8,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 9,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 1,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 12,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 1,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 11,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 16,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 15,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 19,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 20,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 4,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 5,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 6,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 7,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 8,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 9,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
  {
    position: 10,
    hackerrankID: "LukeSky",
    firstName: "Luke",
    lastName: "Skywalker",
    school: "Royal College Colombo",
    score: 77,
  },
];

const itemsPerPage = 11;

const TableResults = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = dataArray.slice(startIndex, endIndex);

  const totalPages = Math.ceil(dataArray.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-center items-center">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-gold">Position</th>
              <th className="px-4 py-2 text-gold">Hackerrank ID</th>
              <th className="px-4 py-2 text-gold">First Name</th>
              <th className="px-4 py-2 text-gold">Last Name</th>
              <th className="px-4 py-2 text-gold">School</th>
              <th className="px-4 py-2 text-gold">Score</th>
            </tr>
          </thead>

          <tbody>
            {currentData.map((data, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0 ? "text-white bg-black" : "text-gold bg-black"
                }
              >
                <td className="px-4 py-2 text-center">
                  {data.position}
                </td>
                <td className="px-4 py-2 text-center">
                  {data.hackerrankID}
                </td>
                <td className="px-4 py-2 text-center">
                  {data.firstName}
                </td>
                <td className="px-4 py-2 text-center">
                  {data.lastName}
                </td>
                <td className="px-4 py-2 text-center">
                  {data.school}
                </td>
                <td className="px-4 py-2 text-center">
                  {data.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="text-gold px-3 py-1 mr-1 bg-gold-300 rounded"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 mr-1 rounded ${
                currentPage === index + 1
                  ? "bg-black-DEFAULT text-gold"
                  : "bg-gold-DEFAULT text-gold-DEFAULT"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-gold bg-gold-300 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableResults;
