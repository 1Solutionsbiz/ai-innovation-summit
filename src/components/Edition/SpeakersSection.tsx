import React, { useEffect, useRef } from 'react';




interface Speaker {
  name: string;
  designation: string;
  company: string;
  image: string;
}

const speakers: Speaker[] = [
  {
    name: 'Rejin Surendran',
    designation: 'Global CIO',
    company: 'Wipro Enterprises Limited',
    image: '/public/edition/speaker/rejin-surendran.jpg',
  },
  {
    name: 'Sudeep Dey',
    designation: 'Chief Information Officer',
    company: 'Healthcare Global Enterprises Limited',
    image: '/public/edition/speaker/sudeep-dey.jpg',
  },
  {
    name: 'Siva Perubotla',
    designation: 'CIO & CISO',
    company: 'Brillio',
    image: '/public/edition/speaker/siva-perubotla.jpg',
  },
  {
    name: 'Kamesh Babu R',
    designation: 'CISO, Global Head of IT and Cybersecurity',
    company: 'Subex',
    image: '/public/edition/speaker/kamesh-babu-r.jpg',
  },
  {
    name: 'Dr. Shivani Rai Gupta',
    designation: 'Chief Data Scientist',
    company: 'Jio',
    image: '/public/edition/speaker/dr.-shivani-rai-gupta.jpg',
  },
  {
    name: 'Ajay Chawla',
    designation: 'Global Head of IT and Infosec',
    company: 'Sterlite Technologies Limited',
    image: '/public/edition/speaker/ajay-chawla.jpg',
  },
  {
    name: 'Anbu David',
    designation: 'Vice President & Head- Information Security, IT Ops & ITSM, DPO and Regional CISO for APAC',
    company: 'Holcim',
    image: '/public/edition/speaker/anbu-david.jpg',
  },
  {
    name: 'Prakash Narayanan',
    designation: 'Head of Intelligent Automation',
    company: 'Cyient',
    image: '/public/edition/speaker/prakash-narayanan.jpg',
  },
  {
    name: 'Sudarshan Rajagopal',
    designation: 'Partner Technology Consulting - Cyber Security',
    company: 'EY',
    image: '/public/edition/speaker/Sudharshan.jpg',
  },
  {
    name: 'Sunil David',
    designation: 'Ex-Regional Director(IOT)',
    company: 'AT&T',
    image: '/public/edition/speaker/sunil-david.jpg',
  },
  {
    name: 'Rakesh Ravuri',
    designation: 'CTO - SVP Engineering',
    company: 'Publicis Sapient',
    image: '/public/edition/speaker/rakesh-ravuri.jpg',
  },
  {
    name: 'Philip Varughese Vayarakunnil',
    designation: 'Global Head - Cyber Risk & Compliance, Applied Intelligence, Platforms & Engineering ; DXC Security',
    company: 'DXC Technology',
    image: '/public/edition/speaker/philip-varughese.jpg',
  },
  {
    name: 'Mandar Joshi',
    designation: 'Partner - Management Consulting Leader Digital and Technology Implementation',
    company: 'KPMG',
    image: '/public/edition/speaker/mandar-joshi.jpg',
  },
  {
    name: 'Vijay Gurumurthy',
    designation: 'Director IT',
    company: 'Capgemini',
    image: '/public/edition/speaker/vijay-gurumurthy.jpg',
  },
  {
    name: 'Syed Ehsan Amanulla',
    designation: 'SVP & CISO',
    company: 'Amicorp Group',
    image: '/public/edition/speaker/syed-ehsan.jpg',
  },
  {
    name: 'Mrinmoy Dey',
    designation: 'Vice President - Chief Information Security Officer',
    company: 'Lendingkart',
    image: '/public/edition/speaker/mrinmoy-dey.jpg',
  },
  {
    name: 'Sameer Salunke',
    designation: 'Partner',
    company: 'KPMG',
    image: '/public/edition/speaker/sameer-salunke.jpg',
  },
  {
    name: 'Dinesh Kumar Kotha',
    designation: 'CEO',
    company: 'Ixigo Trains and ConfirmTkt',
    image: '/public/edition/speaker/dinesh-kumar.jpg',
  },
  {
    name: 'Md Zeeshan Ali',
    designation: 'Lead Solutions Engineering',
    company: 'Slack',
    image: '/public/edition/speaker/zeeshan.jpg',
  },
  {
    name: 'Nithyalakshmi Subramanian',
    designation: 'Head of Data & Analytics – AMEA',
    company: 'Kellanova',
    image: '/public/edition/speaker/nithy.png',
  },
  {
    name: 'Paras Nigam',
    designation: 'Vice President, Data Science & Engineering',
    company: 'KnowBe4',
    image: '/public/edition/speaker/paras-nigam.png',
  },
  {
    name: 'Shilpa Singh',
    designation: 'Director of Cloud Technology',
    company: 'Virtusa',
    image: '/public/edition/speaker/shilpa.png',
  },
  {
    name: 'Kamesh Srinivasan',
    designation: 'Partner- Data, AI, Automation',
    company: 'KPMG India',
    image: '/public/edition/speaker/kamesh-babu-r.jpg',
  },
  {
    name: 'Manish Shukla',
    designation: 'Head of Generative AI Platform',
    company: 'NatWest Group',
    image: '/public/edition/speaker/manish-shukla.png',
  },
];

const SpeakersSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);



  return (
    <div className="bg-black py-16 px-6 md:px-12 pb-40" ref={containerRef}>
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="lg:text-6xl md:text-4xl font-orbitron font-bold text-neon-purple">
          Speakers
        </h2>
      </div>

      {/* Speaker Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="speaker-card bg-gray-800 rounded-lg p-6 text-center shadow-md border border-solid-white m transition duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
          >
            {/* Image */}
            <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-1 border-white">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-2xl font-orbitron font-bold text-neon-purple mb-2">
              {speaker.name}
            </h3>

            {/* Designation */}
            <p className="text-l text-white">{speaker.designation}</p>
            <p className="text-white">{speaker.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakersSection;
