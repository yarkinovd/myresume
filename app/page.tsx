import type { Metadata } from 'next';
import React from 'react';

import PageWrapper from './components/PageWrapper';
import HomeContent from './components/HomeContent';

export const metadata: Metadata = {
  description: 'Frontend developer and mentor',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <HomeContent />
    </PageWrapper>
  );
}
