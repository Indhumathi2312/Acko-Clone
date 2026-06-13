import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; 

// Import the white version of the logo for the dark background
import LogoWhite from '../../assets/logo-white.svg'; 

// --- IMPORT YOUR SVG BADGES HERE ---
// Ensure these paths match your folder structure exactly
import AppleBadge from '../../assets/pci.svg'; 
import GoogleBadge from '../../assets/tower.svg';

// --- DATA CONSTANTS ---
const topLinks = [
  { title: 'Products', links: ['Car Insurance', 'Bike Insurance', 'Health Insurance', 'Life Insurance', 'Travel Insurance', 'Enterprise solutions'] },
  { title: 'Company', links: ['About us', 'Careers', 'Contact us', 'Board of directors'] },
  { title: 'Brand Hub', links: ['All resources', 'Customer stories', 'Media Kit', 'Articles', 'E-books'] },
  { title: 'Legal', links: ['Financials & disclosures', 'Privacy policy', 'Terms & conditions'] },
];

const accordionData = [
  {
    title: 'Auto products and services',
    columns: [
      [{ title: 'Car Insurance', links: ['Car Insurance', 'Vehicle Insurance', 'Third party Car Insurance', 'Comprehensive Car Insurance', 'Zero Depreciation Car Insurance', 'Car Insurance Calculator', 'Car Insurance Check', 'Compare Car Insurance', 'Best Car Insurance in India'] }],
      [{ title: 'Bike Insurance', links: ['Bike Insurance', 'Own Damage Bike Insurance', 'Third Party Bike Insurance', 'Bike Insurance Calculator', 'Bike Insurance Check', 'Scooter Insurance', 'Used Bike Insurance', 'Comprehensive Bike Insurance', 'EV Bike Insurance'] }],
      [{ title: 'Vehicle Services and More', links: ['Challan Check', 'Check Vehicle Details', 'Check RTO', 'Check Vehicle PUC Status', 'Recharge FASTag', 'Check RC Status', 'HSRP Number Plate'] }],
    ],
  },
  {
    title: 'Health, life, and other services',
    columns: [
      [
        { title: 'Health Insurance', links: ['Health Insurance', 'Health Insurance Plans for Family', 'Cashless Health Insurance', 'Health Insurance for Parents', 'Health Insurance Premium Calculator', 'Individual Family Health Insurance', 'Critical Illness Insurance', 'Family Floater Health Insurance', 'Super Top Up Health Insurance'] },
        { title: 'Other Services', links: ['ABHA Card', 'Ayushman Card', 'E-Shram Card', 'Will Creation Service'] },
      ],
      [{ title: 'Life Insurance', links: ['Life Insurance', 'Term Insurance', '1 Crore Term Insurance', 'Term Insurance Calculator'] }],
      [{ title: 'Group Health Insurance', links: ['Group Health Insurance', 'Group Personal Accident Insurance'] }],
    ],
  },
  {
    title: 'Travel',
    columns: [
      [{ title: 'Travel Insurance', links: ['Travel Insurance', 'International Travel Insurance', 'Multi-Trip Travel Insurance', 'Travel Insurance for Schengen Visa', 'Travel Insurance for USA', 'Travel Insurance for Dubai', 'Travel Insurance for Thailand'] }],
      [{ title: 'Visa Services & More', links: ['Apply for a Visa', 'Dubai Visa', 'US Visa', 'Schengen Visa', 'Singapore Visa', 'China Visa', 'Thailand Visa', 'ACKO Airpass'] }],
    ],
  },
  {
    title: 'Enterprise',
    columns: [
      [{ title: 'Enterprise', links: ['Health Insurance for Gig Workers', 'Loan Protection for Fintechs', 'Group Travel Insurance', 'Electronic Device Insurance', 'Group Health Insurance for Corporates'] }],
    ],
  },
];

// --- REUSABLE COMPONENTS ---

const ChevronIcon = ({ className }) => (
  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${className}`} strokeWidth={2.5} />
);

const LinkGroup = ({ title, links }) => (
  <div className="mb-8">
    <h3 className="text-white font-medium text-[15px] mb-4">{title}</h3>
    <ul className="flex flex-col gap-3">
      {links.map((link, index) => (
        <li key={index}>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-[13px]">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Accordion = ({ title, columns }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-[#2a2a2a]">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-5 flex justify-between items-center text-white font-medium text-[15px] hover:text-gray-300 transition-colors"
      >
        {title}
        <ChevronIcon className={isOpen ? "rotate-180" : ""} />
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 pt-2">
          {columns.map((col, colIndex) => (
            <div key={colIndex}>
              {col.map((group, groupIndex) => (
                <LinkGroup key={groupIndex} title={group.title} links={group.links} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// --- MAIN FOOTER COMPONENT ---

const Footer = () => {
  return (
    <footer className="bg-[#111111] font-jakarta pt-16 pb-12 w-full flex justify-center">
      <div className="w-full max-w-[1240px] px-6">
        
        {/* Top Section - Static Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {topLinks.map((section, index) => (
            <LinkGroup key={index} title={section.title} links={section.links} />
          ))}
        </div>

        {/* Middle Section - Accordions */}
        <div className="mb-16 border-b border-[#2a2a2a]">
          {accordionData.map((item, index) => (
            <Accordion key={index} title={item.title} columns={item.columns} />
          ))}
        </div>

        {/* Bottom Section - Company Info & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          
          <div className="flex flex-col gap-4 max-w-xl">
            <div className="flex items-center mb-2">
               <img src={LogoWhite} alt="ACKO Logo" className="h-7 lg:h-8 w-auto" />
            </div>
            
            <p className="text-white text-[15px] font-medium">
              ACKO Technology & Services Private Limited
            </p>
            <p className="text-gray-400 text-[13px] leading-relaxed">
              #36/5, Hustlehub One East, Somasandrapalya,<br/>
              27th Main Rd, Sector 2, HSR Layout, Bengaluru,<br/>
              Karnataka 560102
            </p>
            
            <div className="text-[#666666] text-[11px] leading-relaxed mt-4 space-y-1">
              <p>CIN: U74110KA2016PTC120161</p>
              <p>*Listed #1 for "Insurance" on the Apple App Store</p>
              <p>The use of images and brands are only for the purpose of indication and illustration.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-start md:items-end">
            
            {/* Social Icons */}
            <div className="flex items-center gap-6 text-white">
              <a href="#" className="hover:text-gray-400 transition-colors" aria-label="Instagram">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors" aria-label="LinkedIn">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors" aria-label="X (Twitter)">
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors" aria-label="Facebook">
                <FaFacebookF className="w-5 h-5" />
              </a>
            </div>

            {/* App Store / Play Store SVGs */}
            <div className="flex gap-3">
               <a href="#" aria-label="App Store">
                 <img src={AppleBadge} alt="Download on App Store" className="h-10 w-auto hover:opacity-90 transition-opacity" />
               </a>
               <a href="#" aria-label="Google Play">
                 <img src={GoogleBadge} alt="Get it on Google Play" className="h-10 w-auto hover:opacity-90 transition-opacity" />
               </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;