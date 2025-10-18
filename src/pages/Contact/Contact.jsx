import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Typeform from './Typeform';
import {
  GiMailbox,
  GiPhone,
  GiCompass,
  GiTimeSynchronization,
  GiHouse,
  GiPerson,
  GiShield,
  GiPowerLightning,
  GiFiles,
  GiGlobe,
  GiCrossMark,
  GiTemporaryShield,
  GiLockedChest
} from 'react-icons/gi';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaGithub, 
  FaComments,
  FaFilePdf,
  FaShieldAlt,
  FaCode
} from 'react-icons/fa';

// Custom Icon Components
const EnvelopeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const LocationIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const ClockIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    assetType: '',
    investmentInterest: '',
    accreditation: '',
    subject: '',
    message: '',
    contactType: 'investor',
    phone: '',
    preferredContact: 'email',
    compliance: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [showTypeform, setShowTypeform] = useState(true);

  // RWA-specific contact types
  const contactTypes = [
    { value: 'investor', label: 'Investor Inquiry', icon: GiPerson },
    { value: 'issuer', label: 'Asset Issuer / Sponsor', icon: GiHouse },
    { value: 'partner', label: 'Institutional Partnership', icon: GiPerson },
    { value: 'legal', label: 'Legal & Compliance', icon: GiTemporaryShield },
    { value: 'tech', label: 'Technical Integration', icon: GiGlobe },
    { value: 'support', label: 'Platform Support', icon: GiShield }
  ];

  // RWA-specific asset types
  const assetOptions = [
    'Real Estate',
    'Private Equity',
    'Infrastructure',
    'Commodities',
    'Art & Collectibles',
    'Debt Instruments',
    'Venture Capital',
    'Hedge Funds',
    'Other'
  ];

  const investmentLevels = [
    'Under $100K',
    '$100K - $500K',
    '$500K - $1M',
    '$1M - $5M',
    'Over $5M',
    'Exploring Options'
  ];

  const contactInfo = [
    {
      icon: 'envelope',
      title: 'Email Support',
      details: ['support@copym.xyz'],
      description: 'Get in touch via email for any inquiries',
      action: 'mailto:support@copym.xyz'
    },
    
    
   
  ];

  const socialMedia = [
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/company/copym', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com/copym', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: FaFacebook, url: 'https://facebook.com/copym', color: 'hover:text-blue-700' },
    { name: 'github', icon: FaGithub, url: 'https://Github.com/copym', color: 'hover:text-pink-600' }
  ];

  const features = [
    {
      icon: GiShield,
      title: 'Regulatory Compliance',
      description: 'Fully compliant with SEC, KYC, and AML standards'
    },
    {
      icon: GiTemporaryShield,
      title: 'Legal Framework',
      description: 'Robust legal structure for asset tokenization'
    },
    {
      icon: GiLockedChest,
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade security and audit trails'
    }
  ];

  const resources = [
    { name: 'Investor Deck', icon: FaFilePdf, url: '/resources/investor-deck.pdf' },
    { name: 'Whitepaper', icon: FaFilePdf, url: '/resources/whitepaper.pdf' },
    { name: 'Compliance Framework', icon: FaShieldAlt, url: '/compliance' },
    { name: 'API Documentation', icon: FaCode, url: '/api' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';

    if (!formData.company.trim()) newErrors.company = 'Company or organization is required';
    if (!formData.role.trim()) newErrors.role = 'Your role (e.g., CFO, Portfolio Manager) is required';

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim() || formData.message.length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    if (formData.preferredContact === 'phone' && !formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.compliance) {
      newErrors.compliance = 'You must agree to the compliance terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));

    // Clear error on input
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        assetType: '',
        investmentInterest: '',
        accreditation: '',
        subject: '',
        message: '',
        contactType: 'investor',
        phone: '',
        preferredContact: 'email',
        compliance: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickContact = (type) => {
    const emails = {
      investor: 'support@copym.xyz',
      issuer: 'support@copym.xyz',
      partner: 'support@copym.xyz',
      legal: 'support@copym.xyz',
      tech: 'support@copym.xyz',
      support: 'support@copym.xyz'
    };
    
    const subjects = {
      investor: 'Investor Inquiry',
      issuer: 'Asset Issuer Inquiry',
      partner: 'Partnership Inquiry',
      legal: 'Legal & Compliance Inquiry',
      tech: 'Technical Integration Inquiry',
      support: 'Platform Support Request'
    };

    window.location.href = `mailto:${emails[type]}?subject=${subjects[type]}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-blue-100">
      {/* Background Pattern - Same as AccessPage */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>

      {/* Enhanced Floating Elements with GSAP - Same as AccessPage */}
      <div className="floating-bg-1 absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="floating-bg-2 absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>

      {/* Live Chat Widget - Mobile Responsive */}
      <motion.div 
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
         <button
           onClick={() => setShowLiveChat(!showLiveChat)}
           className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 touch-manipulation"
           aria-label="Open live chat"
         >
          <FaComments className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        
        {showLiveChat && (
          <motion.div 
            className="absolute bottom-16 right-0 w-72 sm:w-80 bg-white rounded-lg shadow-xl border"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="p-3 sm:p-4 border-b flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Live Chat</h3>
                <p className="text-sm text-black">We're online and ready to help!</p>
              </div>
              <button
                onClick={() => setShowLiveChat(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <GiCrossMark className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <div className="p-3 sm:p-4">
              <p className="text-sm text-black mb-3">Start a conversation with our support team.</p>
               <button className="w-full py-2 px-4 text-sm font-medium bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-200">
                 Start Chat
               </button>
            </div>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header - Enhanced Mobile Responsiveness */}
        <motion.div className="text-center mb-8 sm:mb-12 lg:mb-16" variants={itemVariants}>
                     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-3 sm:mb-4 lg:mb-6 text-black font-black tracking-tight uppercase anton-regular">
             Let's <span className="text-blue-600">Connect</span>
           </h1>
          <p className="text-sm sm:text-base lg:text-xl max-w-2xl sm:max-w-3xl mx-auto text-gray-700 px-4">
            Connect with our team for investor onboarding, asset tokenization,
            legal compliance, or technical integration.
          </p>
        </motion.div>

        {/* Main Content Grid - Fixed Responsive Layout */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form - Optimized for all screens */}
          <motion.div className="lg:col-span-3" variants={itemVariants}>
            <Typeform />
          </motion.div>
        </div>

        {/* Horizontal Sidebar Sections */}
        <motion.div className="mt-12 sm:mt-16" variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Information - Single Consolidated Card */}
            <div className="group relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-3xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/30 hover:border-gray-400/50">
              {/* Background gradient overlay - Same as AccessPage */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                 <h3 className="font-black text-base sm:text-lg mb-4 text-gray-900 group-hover:text-gray-700 transition-colors uppercase anton-regular">Contact Information</h3>
                 <div className="space-y-4">
                   {contactInfo.map((info, idx) => {
                     const IconComponent = info.icon === 'envelope' ? EnvelopeIcon :
                                         info.icon === 'phone' ? PhoneIcon :
                                         info.icon === 'location' ? LocationIcon :
                                         info.icon === 'clock' ? ClockIcon : null;
                     
                     return (
                       <div key={idx} className="flex items-start space-x-3">
                         <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                           <IconComponent className="w-4 h-4 text-white" />
                         </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 text-sm">{info.title}</h4>
                        {info.details.map((d, i) => (
                          <p key={i} className="text-gray-700 text-sm mb-1 break-words">{d}</p>
                        ))}
                        <p className="text-gray-500 text-sm mt-1">{info.description}</p>
                        {info.action && (
                          <a
                            href={info.action}
                            target="_blank"
                            rel="noopener noreferrer"
                             className="inline-flex items-center text-gray-700 text-sm mt-1 hover:underline"
                          >
                            {info.action.includes('mailto') ? 'Email Us' : info.action.includes('tel') ? 'Call' : 'View Map'}
                          </a>
                         )}
                       </div>
                     </div>
                     );
                   })}
                 </div>
                
                {/* Bottom accent line - Same as AccessPage */}
                 <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full transition-all duration-500 mt-6"></div>
              </div>
            </div>
              
            {/* Social Media & Resources - Combined Card */}
            <div className="group relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-3xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/30 hover:border-gray-400/50">
              {/* Background gradient overlay - Same as AccessPage */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                 <h3 className="font-black text-base sm:text-lg mb-4 text-gray-900 group-hover:text-gray-700 transition-colors uppercase anton-regular">Connect & Resources</h3>
                
                {/* Social Media */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-3 text-sm">Follow Us</h4>
                  <div className="flex flex-wrap gap-2">
                    {socialMedia.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center transition-colors ${social.color} touch-manipulation`}
                        aria-label={`Follow us on ${social.name}`}
                      >
                        <social.icon className="w-4 h-4 text-gray-700" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="font-medium text-gray-700 mb-3 text-sm">Resources</h4>
                  <div className="space-y-2">
                    {resources.map((r, i) => (
                      <a
                        key={i}
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors touch-manipulation"
                      >
                         <r.icon className="w-4 h-4 text-gray-700 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{r.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Bottom accent line - Same as AccessPage */}
                 <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full transition-all duration-500 mt-6"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Section - Optimized layout */}
        <motion.div className="mt-12 sm:mt-16" variants={itemVariants}>
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-3 sm:mb-4 uppercase anton-regular">Find Us</h2>
            <p className="text-gray-700 text-sm sm:text-base">Visit our office or get in touch</p>
          </div>
          
          <div className="group relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/30 hover:border-gray-400/50">
            {/* Background gradient overlay - Same as AccessPage */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 aspect-w-16 aspect-h-9 h-64 sm:h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Copym Office Location - Bangalore"
              ></iframe>
            </div>
            
            {/* Bottom accent line - Same as AccessPage */}
             <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full transition-all duration-500 absolute bottom-0 left-0"></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;