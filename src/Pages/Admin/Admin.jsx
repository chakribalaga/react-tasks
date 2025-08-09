import React, { useState } from "react";
import './Admin.css';
import Navbar from "../../components/navbar/Navbar";

function Admin() {
  const employees = [
    { id: 1, name: "chakri", email: "chakri@gmail.com", phone: "+91 9876543210" },
    { id: 2, name: "upendra", email: "upendra@gmail.com", phone: "+91 9123456789" },
    { id: 3, name: "venky", email: "venky@gmail.com", phone: "+91 9998887776" },
    { id: 4, name: "naidu", email: "naidu@gmail.com", phone: "+91 8887776665" },
    { id: 5, name: "lalam", email: "lalam@gmail.com", phone: "+91 7776665554" },
    { id: 6, name: "gowri", email: "gowri@gmail.com", phone: "+91 6665554443" },
    { id: 7, name: "sai", email: "sai@gmail.com", phone: "+91 5554443332" },
    { id: 8, name: "arjun", email: "arjun@gmail.com", phone: "+91 9876501234" },
    { id: 9, name: "priya", email: "priya@gmail.com", phone: "+91 9123405678" },
    { id: 10, name: "ravi", email: "ravi@gmail.com", phone: "+91 9988776655" },
    { id: 11, name: "swathi", email: "swathi@gmail.com", phone: "+91 9001122334" },
    { id: 12, name: "anil", email: "anil@gmail.com", phone: "+91 8899776655" },
    { id: 13, name: "meena", email: "meena@gmail.com", phone: "+91 9345012398" },
    { id: 14, name: "kiran", email: "kiran@gmail.com", phone: "+91 9911223344" },
    { id: 15, name: "deepak", email: "deepak@gmail.com", phone: "+91 9123456700" },
    { id: 16, name: "lavanya", email: "lavanya@gmail.com", phone: "+91 9900887766" },
    { id: 17, name: "manoj", email: "manoj@gmail.com", phone: "+91 9090909090" },
    { id: 18, name: "rekha", email: "rekha@gmail.com", phone: "+91 9222333444" },
    { id: 19, name: "vijay", email: "vijay@gmail.com", phone: "+91 9555666777" },
    { id: 20, name: "sneha", email: "sneha@gmail.com", phone: "+91 9333444555" },
    { id: 21, name: "tarun", email: "tarun@gmail.com", phone: "+91 9445566778" },
    { id: 22, name: "nisha", email: "nisha@gmail.com", phone: "+91 9112233445" },
    { id: 23, name: "harish", email: "harish@gmail.com", phone: "+91 9667788990" },
    { id: 24, name: "pooja", email: "pooja@gmail.com", phone: "+91 9778899001" },
    { id: 25, name: "rohit", email: "rohit@gmail.com", phone: "+91 9887766554" },
    { id: 26, name: "divya", email: "divya@gmail.com", phone: "+91 9009988776" },
    { id: 27, name: "ajay", email: "ajay@gmail.com", phone: "+91 9788899002" }
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 15;

  // Filter employees before pagination
  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.phone.includes(searchQuery)
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(filteredEmployees.length / rowsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="adm-main-cont">
      <Navbar setSearchQuery={setSearchQuery} />
      <div className="adm-first-cont">
        <h1 className="adm-heading">Employees details</h1>
      </div>

      <div className="adm-tbl-container">
        <table className="adm-tbl">
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Employee Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((emp, index) => (
              <tr key={emp.id}>
                <td>{indexOfFirstRow + index + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="adm-page">
          <button className="arrow-btn" onClick={goToPreviousPage} disabled={currentPage === 1}>
            &#8592;
          </button>
          
          <button className="arrow-btn" onClick={goToNextPage} disabled={currentPage === totalPages}>
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
