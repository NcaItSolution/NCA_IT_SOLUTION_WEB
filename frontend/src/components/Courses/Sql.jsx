import React from 'react';

const Sql = () => {
  const whatsappNumber = '918287584509';
  const sampleMessage = encodeURIComponent("Hi, I'm interested in the SQL Server Database course. Please share the details!");

  const syllabus = [
    {
      title: "1. Introduction to SQL",
      items: [
        "What is SQL?",
        "SQL vs NoSQL Databases",
        "Types of Databases (Relational vs Non-Relational)",
        "SQL Database Management Systems (MySQL, PostgreSQL, SQL Server, Oracle, SQLite)",
        "Installing MySQL, PostgreSQL, or SQL Server"
      ]
    },
    {
      title: "2. Database & Table Management",
      items: [
        "Creating & Deleting Databases",
        "Selecting a Database (USE DATABASE)",
        "Database Schemas",
        "Creating Tables (CREATE TABLE)",
        "Modifying Tables (ALTER TABLE)",
        "Dropping Tables (DROP TABLE)"
      ]
    },
    {
      title: "3. SQL Queries & Data Manipulation",
      items: [
        "Retrieving Data (SELECT * FROM table)",
        "Filtering Data (WHERE, BETWEEN, IN, LIKE)",
        "Sorting Data (ORDER BY, ASC, DESC)",
        "Aliases (AS) for Columns & Tables",
        "Insert Data (INSERT INTO)",
        "Update Existing Data (UPDATE SET)",
        "Delete Records (DELETE FROM)",
        "COUNT, SUM, AVG, MIN, MAX Functions",
        "GROUP BY & HAVING Clause",
        "Filtering Grouped Data"
      ]
    },
    {
      title: "4. SQL Joins & Relationships",
      items: [
        "One-to-One, One-to-Many, Many-to-Many Relationships",
        "INNER JOIN",
        "LEFT JOIN",
        "RIGHT JOIN",
        "FULL OUTER JOIN",
        "CROSS JOIN",
        "Self JOIN"
      ]
    },
    {
      title: "5. Constraints & Indexing",
      items: [
        "PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, DEFAULT",
        "Creating Indexes (CREATE INDEX)",
        "Removing Indexes (DROP INDEX)",
        "Performance Optimization with Indexing"
      ]
    },
    {
      title: "6. Advanced SQL Concepts",
      items: [
        "Single Row & Multi-Row Subqueries",
        "Correlated Subqueries",
        "Creating & Using Views",
        "Creating & Executing Stored Procedures",
        "Input & Output Parameters",
        "Creating Triggers (BEFORE, AFTER)",
        "Automating Tasks with SQL Events"
      ]
    },
    {
      title: "7. Transactions & Concurrency Control",
      items: [
        "ACID Properties (Atomicity, Consistency, Isolation, Durability)",
        "COMMIT & ROLLBACK",
        "Savepoints in Transactions",
        "Handling Deadlocks"
      ]
    },
    {
      title: "8. Database Security & User Management",
      items: [
        "User Privileges & Roles (GRANT, REVOKE)",
        "Authentication & Access Control",
        "SQL Injection & Prevention Techniques",
        "Backing Up & Restoring Databases"
      ]
    },
    {
      title: "9. SQL Performance Optimization",
      items: [
        "Query Optimization Techniques",
        "Understanding Execution Plans",
        "Indexing for Performance",
        "Partitioning & Sharding",
        "Caching & Optimization Tools"
      ]
    },
    {
      title: "10. NoSQL vs SQL",
      items: [
        "Key Differences",
        "When to Use NoSQL Databases (MongoDB, Redis, Cassandra)",
        "Integrating SQL with NoSQL"
      ]
    },
    {
      title: "11. Real-World SQL Applications",
      items: [
        "Beginner Projects: Employee & Student Database Management",
        "Intermediate Projects: Library Management, E-Commerce",
        "Advanced Projects: Airline Reservation, Banking & Financial Transactions"
      ]
    },
    {
      title: "12. SQL Certifications",
      items: [
        "Microsoft Certified: Azure Database Administrator Associate",
        "Oracle Database SQL Certified Associate",
        "IBM Certified Database Associate",
        "MySQL & PostgreSQL Certification"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10 px-4">
      <div className="bg-gray-900 rounded-lg shadow-xl max-w-3xl w-full overflow-hidden">
        {/* Image Banner */}
        <img
          src="data:image/png;base64,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"
          alt="SQL Server Database"
          className="w-full h-64 object-contain bg-gray-800 p-6"
        />

        {/* Content */}
        <div className="p-6 text-white">
          <h2 className="text-3xl font-bold mb-4">SQL Server Database Course</h2>
          <p className="mb-2"><span className="font-semibold">Duration:</span> 2 Months</p>
          <p className="mb-4"><span className="font-semibold">Cost:</span> ₹6,000</p>

          <h3 className="text-xl font-semibold mb-3">Syllabus</h3>

          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            {syllabus.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-lg mb-2">{section.title}</h4>
                <ul className="list-disc list-inside">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${sampleMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block text-center bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sql;
