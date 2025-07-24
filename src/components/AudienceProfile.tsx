import React from 'react';

const AudienceProfile: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white p-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-orbitron text-neon-purple mb-6">
            Audience Profile
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Key Decision Makers */}
            <div>
              <h3 className="text-lg font-semibold mb-2">🎯 Key Decision Makers</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                <li>CIOs / COOs / CTOs / CFOs / IT & IS Directors</li>
                <li>Chief of Digital Transformation (CDX)</li>
                <li>Heads of DevOps</li>
                <li>Heads of Enterprise Architecture</li>
                <li>Heads of Innovation / Digital</li>
                <li>Heads of Emerging Technology</li>
                <li>Heads of Solution / Enterprise Architecture</li>
                <li>Heads of Cloud Division</li>
                <li>Heads of Analytics</li>
                <li>Heads of Data</li>
                <li>Heads of Architecture</li>
                <li>Heads of IT Systems</li>
                <li>Global Solutions Architect</li>
                <li>Chief Internet of Things (IoT) Officer / CIoTO / Director</li>
                <li>Other Cloud, DevOps & Data Center Decision Makers</li>
              </ul>
            </div>

            {/* Key Industries */}
            <div>
              <h3 className="text-lg font-semibold mb-2">🏢 Key Industries</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                <li>BFSI</li>
                <li>Manufacturing</li>
                <li>Retail</li>
                <li>Healthcare</li>
                <li>IT Services</li>
                <li>SaaS</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section with Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://via.placeholder.com/400x300" // Replace with your image
            alt="Audience Visual"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AudienceProfile;
