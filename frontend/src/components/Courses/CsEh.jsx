import React from 'react';

const CsEh = () => {
  const whatsappNumber = '918287584509';
  const sampleMessage = encodeURIComponent(
    "Hi, I'm interested in the Cyber Security and Ethical Hacking course. Please share the details!"
  );

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10 px-4">
      <div className="bg-gray-900 rounded-lg shadow-xl max-w-3xl w-full overflow-hidden">
        {/* Image Banner */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/633/633600.png"
          alt="Cyber Security and Ethical Hacking"
          className="w-full h-64 object-contain bg-gray-800 p-6"
        />

        {/* Content */}
        <div className="p-6 text-white">
          <h2 className="text-3xl font-bold mb-4">Cyber Security and Ethical Hacking Course</h2>
          <p className="mb-2">
            <span className="font-semibold">Duration:</span> 12 Months
          </p>
          <p className="mb-4">
            <span className="font-semibold">Cost:</span> ₹80,000
          </p>

          <h3 className="text-xl font-semibold mb-3">Syllabus</h3>

          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">1. Introduction to Cyber Security</h4>
              <ul className="list-disc list-inside">
                <li>Fundamentals of Cybersecurity</li>
                <li>Types of Cyber Threats and Attacks</li>
                <li>Ethical Hacking Overview and Legal Aspects</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">2. Networking Basics</h4>
              <ul className="list-disc list-inside">
                <li>OSI and TCP/IP Models</li>
                <li>Network Devices and Protocols</li>
                <li>IP Addressing and Subnetting</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">3. Information Security Concepts</h4>
              <ul className="list-disc list-inside">
                <li>Confidentiality, Integrity, and Availability (CIA Triad)</li>
                <li>Cryptography Basics</li>
                <li>Security Policies and Procedures</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">4. Ethical Hacking Techniques</h4>
              <ul className="list-disc list-inside">
                <li>Reconnaissance and Footprinting</li>
                <li>Scanning and Enumeration</li>
                <li>Vulnerability Analysis</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">5. System Hacking</h4>
              <ul className="list-disc list-inside">
                <li>Gaining Access and Privilege Escalation</li>
                <li>Maintaining Access and Covering Tracks</li>
                <li>Malware Threats and Defense</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">6. Web Application Security</h4>
              <ul className="list-disc list-inside">
                <li>Common Web Attacks (XSS, SQL Injection, CSRF)</li>
                <li>Secure Coding Practices</li>
                <li>Web Vulnerability Scanning Tools</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">7. Network Security</h4>
              <ul className="list-disc list-inside">
                <li>Firewalls and IDS/IPS</li>
                <li>VPNs and Secure Network Design</li>
                <li>Wireless Network Security</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">8. Cryptography and PKI</h4>
              <ul className="list-disc list-inside">
                <li>Symmetric and Asymmetric Encryption</li>
                <li>Public Key Infrastructure (PKI)</li>
                <li>Digital Signatures and Certificates</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">9. Security Tools & Techniques</h4>
              <ul className="list-disc list-inside">
                <li>Using Kali Linux and Penetration Testing Tools</li>
                <li>Network Analyzers (Wireshark)</li>
                <li>Exploitation Frameworks (Metasploit)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">10. Incident Response and Management</h4>
              <ul className="list-disc list-inside">
                <li>Incident Handling Process</li>
                <li>Forensics and Evidence Collection</li>
                <li>Disaster Recovery and Business Continuity</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">11. Cyber Security Standards and Compliance</h4>
              <ul className="list-disc list-inside">
                <li>ISO 27001, NIST, GDPR Overview</li>
                <li>Security Audits and Risk Assessment</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">12. Capstone Project</h4>
              <ul className="list-disc list-inside">
                <li>Perform a Complete Ethical Hacking Assessment</li>
                <li>Prepare Security Audit Reports</li>
                <li>Apply Learned Concepts in a Simulated Environment</li>
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
  );
};

export default CsEh;
