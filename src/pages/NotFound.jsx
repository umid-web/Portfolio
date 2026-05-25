// src/pages/NotFound.jsx
import React from 'react';
import SectionWrapper from '@/components/layout/SectionWrapper';
import SEO from '@/components/common/SEO';

const NotFound = () => (
  <>
    <SEO title="404 - Page Not Found" description="The page you are looking for does not exist." />
    <SectionWrapper id="notfound">
      <h2>404 - Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
    </SectionWrapper>
  </>
);

export default NotFound;
