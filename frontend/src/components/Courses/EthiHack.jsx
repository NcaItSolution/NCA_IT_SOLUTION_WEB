import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const EthiHack = () => {
  const whatsappNumber = '918287584509';
  const sampleMessage = encodeURIComponent("Hi, I'm interested in the Ethical Hacking course. Please share the details!");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10 px-4">
      <div className="bg-gray-900 rounded-lg shadow-xl max-w-3xl w-full overflow-hidden">
        {/* Image Banner */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/633/633600.png"
          alt="Ethical Hacking"
          className="w-full h-64 object-contain bg-gray-800 p-6"
        />

        {/* Content */}
        <div className="p-6 text-white">
          <h2 className="text-3xl font-bold mb-4">Ethical Hacking & Cyber Security Course</h2>
          <p className="mb-2"><span className="font-semibold">Duration:</span> 3–4 Months</p>
          <p className="mb-4"><span className="font-semibold">Cost:</span> ₹18,000</p>

          <h3 className="text-xl font-semibold mb-3">Syllabus</h3>

          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">1. Introduction to Cyber Security</h4>
              <ul className="list-disc list-inside">
                <li>What is Ethical Hacking?</li>
                <li>Types of Hackers & Attacks</li>
                <li>Cyber Laws & Compliance</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">2. Networking Fundamentals</h4>
              <ul className="list-disc list-inside">
                <li>IP, TCP/UDP, OSI Model</li>
                <li>Ports, Protocols, Packet Analysis</li>
                <li>Wireshark & Network Scanning</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">3. Footprinting & Reconnaissance</h4>
              <ul className="list-disc list-inside">
                <li>OSINT, Whois, NSLookup</li>
                <li>Google Hacking, Shodan</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">4. Scanning & Enumeration</h4>
              <ul className="list-disc list-inside">
                <li>Nmap, Netcat, Nikto</li>
                <li>Banner Grabbing, SNMP Enumeration</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">5. Gaining System Access</h4>
              <ul className="list-disc list-inside">
                <li>Metasploit, Exploits</li>
                <li>Brute Force & Password Attacks</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">6. Malware & Payloads</h4>
              <ul className="list-disc list-inside">
                <li>Viruses, Worms, Trojans</li>
                <li>Keyloggers, RATs</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">7. Web Application Hacking</h4>
              <ul className="list-disc list-inside">
                <li>SQL Injection, XSS, CSRF</li>
                <li>Security Misconfiguration</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">8. Wireless Network Attacks</h4>
              <ul className="list-disc list-inside">
                <li>WEP/WPA2 Cracking</li>
                <li>Evil Twin, Deauth Attacks</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">9. Sniffing & Spoofing</h4>
              <ul className="list-disc list-inside">
                <li>ARP, DNS, MAC Spoofing</li>
                <li>Man-in-the-Middle Attacks</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">10. Security Tools & OS</h4>
              <ul className="list-disc list-inside">
                <li>Kali Linux Tools</li>
                <li>Burp Suite, Hydra, John the Ripper</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">11. Penetration Testing Process</h4>
              <ul className="list-disc list-inside">
                <li>Phases of Penetration Testing</li>
                <li>Vulnerability Assessment</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">12. Real-World Project</h4>
              <ul className="list-disc list-inside">
                <li>End-to-End Pentesting Simulation</li>
                <li>Final Reporting & Remediation</li>
              </ul>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${sampleMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition"
          >
            <FaWhatsapp size={20} /> Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default EthiHack;
