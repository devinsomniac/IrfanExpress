import Footer from '@/components/Footer';
import Header from '@/components/Header'
import React, { useState, useEffect } from 'react'

const Document = () => {
  const [visibleDocuments, setVisibleDocuments] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  const documents = [
    "Passport",
    "Utility Bill",
    "Visa",
    "Appointment Letter",
    "Flight Ticket"
  ];

  const toggleDocumentVisibility = (doc) => {
    setVisibleDocuments((prev) => ({
      ...prev,
      [doc]: !prev[doc] // Toggle visibility for the specific document
    }));
  };

  // Map the document name to corresponding PDF files for testing
  const documentFiles = {
    "Passport": "/test.pdf",
    "Utility Bill": "/test.pdf",
    "Visa": "/test.pdf",
    "Appointment Letter": "/test.pdf",
    "Flight Ticket": "/test.pdf"
  };

  // Check if the user is on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);  // Set a breakpoint for mobile
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div>
      <Header />
      <h2 className='text-4xl font-bold text-center'>Your Own Document Pocket</h2>
      <div className='p-12'>
        {documents.map((doc, index) => (
          <div 
            key={index}
            className='border rounded-lg p-5 shadow-xl cursor-pointer mb-4' 
            onClick={() => toggleDocumentVisibility(doc)} 
          >
            <h2>{doc}</h2>

            {/* Conditionally render the PDF or a download link based on screen size */}
            {visibleDocuments[doc] && (
              <div className='mt-5'>
                {isMobile ? (
                  <a 
                    href={documentFiles[doc]} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500"
                  >
                    View or Download PDF
                  </a>
                ) : (
                  <object 
                    data={documentFiles[doc]} 
                    type="application/pdf" 
                    width="100%" 
                    height="500px"
                  >
                    <p>Your browser does not support PDFs. 
                      <a href={documentFiles[doc]} target="_blank" rel="noopener noreferrer">Download the PDF</a>.
                    </p>
                  </object>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Document;
