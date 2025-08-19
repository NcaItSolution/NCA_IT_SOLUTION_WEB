import React from 'react';

const CompHard = () => {
  const whatsappNumber = '918287584509';
  const sampleMessage = encodeURIComponent(
    "Hi, I'm interested in the Computer Hardware course. Please share the details!"
  );

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-10 px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-7xl w-full overflow-hidden border border-gray-200">
        {/* Image Banner */}
        <img
          src="data:image/jpeg;base64,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"
          alt="Computer Hardware"
          className="w-full h-64 object-cover bg-gray-100 p-6"
        />

        {/* Content */}
        <div className="p-8 text-gray-800">
          <h2 className="text-3xl font-bold mb-4">Computer Hardware Course</h2>
          <p className="mb-2">
            <span className="font-semibold">Duration:</span> 2 Months
          </p>
          <p className="mb-6">
            <span className="font-semibold">Cost:</span> ₹2,000
          </p>

          <h3 className="text-xl font-semibold mb-5">Syllabus</h3>

          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">1. Introduction to Computer Hardware</h4>
              <ul className="list-disc list-inside">
                <li>Overview of Computer Systems</li>
                <li>Types of Hardware Components</li>
                <li>Basic Computer Architecture</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">2. Motherboard and Processors</h4>
              <ul className="list-disc list-inside">
                <li>Motherboard Overview & Components</li>
                <li>CPU Architecture and Functioning</li>
                <li>Socket Types and Chipsets</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">3. Memory and Storage Devices</h4>
              <ul className="list-disc list-inside">
                <li>RAM Types and Specifications</li>
                <li>Hard Drives, SSDs, and NVMe</li>
                <li>Storage Interfaces and RAID Concepts</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">4. Input and Output Devices</h4>
              <ul className="list-disc list-inside">
                <li>Keyboards, Mice, and Other Peripherals</li>
                <li>Display Devices and Graphics Cards</li>
                <li>Ports and Connectors</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">5. Power Supply and Cooling Systems</h4>
              <ul className="list-disc list-inside">
                <li>
Power Supply Units (PSUs)</li>
                <li>Cooling Techniques and Fans</li>
                <li>Thermal Management</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">6. BIOS and Firmware</h4>
              <ul className="list-disc list-inside">
                <li>BIOS/UEFI Functions and Configuration</li>
                <li>Firmware Updates and Security</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">7. Assembly and Disassembly</h4>
              <ul className="list-disc list-inside">
                <li>Building a PC from Components</li>
                <li>Safe Handling and ESD Precautions</li>
                <li>Troubleshooting Hardware Issues</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">8. Networking Hardware</h4>
              <ul className="list-disc list-inside">
                <li>Network Interface Cards (NICs)</li>
                <li>Routers, Switches, and Hubs</li>
                <li>Cabling and Wireless Hardware</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">9. Maintenance and Upgrades</h4>
              <ul className="list-disc list-inside">
                <li>Cleaning and Preventive Maintenance</li>
                <li>Upgrading Components and Compatibility</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">10. Safety and Best Practices</h4>
              <ul className="list-disc list-inside">
                <li>Electrical Safety</li>
                <li>Ergonomics and Workspace Setup</li>
                <li>Environmental Considerations</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">11. Project</h4>
              <ul className="list-disc list-inside">
                <li>Build and Configure a Complete PC</li>
                <li>Diagnose and Fix Common Hardware Problems</li>
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

export default CompHard;
