import React from 'react'

const PhpFS = () => {
    const whatsappNumber = '918287584509';
    const sampleMessage = encodeURIComponent("Hi, I'm interested in the PHP Full Stack course. Please share the details!");
    
    return (
    <div className="min-h-screen bg-white flex items-center justify-center py-10 px-4">
            <div className="bg-white border border-gray-200 rounded-lg shadow-xl max-w-7xl w-full overflow-hidden">
                {/* Image Banner */}
                <img
                    src="https://cdn-icons-png.flaticon.com/512/919/919830.png"
                    alt="PHP Full Stack"
                    className="w-full h-64 object-contain bg-gray-100 p-6"
                />

                {/* Content */}
                <div className="p-6 text-gray-900">
                    <h2 className="text-3xl font-bold mb-4">PHP Full Stack Developer Course</h2>
                    <p className="mb-2"><span className="font-semibold">Duration:</span> 3 Months</p>
                    <p className="mb-4"><span className="font-semibold">Cost:</span> ₹16,000</p>

                    <h3 className="text-xl font-semibold mb-3">Syllabus</h3>

                    <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
                        <div>
                            <h4 className="font-semibold text-lg mb-2">1. Web Basics & Frontend</h4>
                            <ul className="list-disc list-inside">
                                <li>HTML5, CSS3, Bootstrap</li>
                                <li>JavaScript Fundamentals</li>
                                <li>DOM Manipulation, ES6 Features</li>
                                <li>Intro to jQuery & AJAX</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-2">2. Core PHP Programming</h4>
                            <ul className="list-disc list-inside">
                                <li>PHP Syntax, Variables, Data Types</li>
                                <li>Control Structures, Functions</li>
                                <li>Forms Handling, File Uploads</li>
                                <li>Sessions, Cookies, GET/POST</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-2">3. Object-Oriented PHP</h4>
                            <ul className="list-disc list-inside">
                                <li>Classes & Objects</li>
                                <li>Inheritance, Interfaces, Traits</li>
                                <li>Namespaces, Autoloading</li>
                                <li>Exception Handling</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-2">4. MySQL Database</h4>
                            <ul className="list-disc list-inside">
                                <li>Database Design & Relationships</li>
                                <li>CRUD Operations with PHP-MySQL</li>
                                <li>Joins, Indexing, Transactions</li>
                                <li>phpMyAdmin, Query Optimization</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-2">5. PHP & MySQL Integration</h4>
                            <ul className="list-disc list-inside">
                                <li>MySQLi & PDO Connections</li>
                                <li>Data Validation & Security</li>
                                <li>Prepared Statements</li>
                                <li>Form Authentication</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-2">6. Laravel Framework</h4>
                            <ul className="list-disc list-inside">
                                <li>Routing, Controllers, Blade Templating</li>
                                <li>Eloquent ORM, Migrations, Seeders</li>
                                <li>Authentication & Middleware</li>
                                <li>RESTful APIs with Laravel</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-2">7. REST API Development</h4>
                            <ul className="list-disc list-inside">
                                <li>API Routes & Resources</li>
                                <li>Token-Based Auth (Sanctum/JWT)</li>
                                <li>Testing with Postman</li>
                                <li>API Documentation</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-2">8. Frontend with React.js</h4>
                            <ul className="list-disc list-inside">
                                <li>React Components, Props, State</li>
                                <li>Hooks (useState, useEffect)</li>
                                <li>Routing with React Router</li>
                                <li>Consuming REST APIs</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-2">9. Authentication & Security</h4>
                            <ul className="list-disc list-inside">
                                <li>Laravel Auth & Role Management</li>
                                <li>Password Hashing & Validation</li>
                                <li>CSRF, XSS, SQL Injection Prevention</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-2">10. Deployment & DevOps</h4>
                            <ul className="list-disc list-inside">
                                <li>Deploying on cPanel, Heroku</li>
                                <li>GitHub Actions for CI/CD</li>
                                <li>Docker Basics, Env Setup</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-2">11. Testing & Debugging</h4>
                            <ul className="list-disc list-inside">
                                <li>Debugging Laravel Apps</li>
                                <li>PHPUnit for Testing</li>
                                <li>Error Logging, Monitoring Tools</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-2">12. Capstone Project</h4>
                            <ul className="list-disc list-inside">
                                <li>Full Stack Web App (React + Laravel)</li>
                                <li>Admin Panel + User Authentication</li>
                                <li>Deployed Live with CI/CD</li>
                            </ul>
                        </div>
                    </div>

                    {/* WhatsApp Button */}
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
    )
}

export default PhpFS;
