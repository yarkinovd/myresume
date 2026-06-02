import type { Metadata } from 'next';
import React from 'react';

import StatsContent from '../components/StatsContent';

export const metadata: Metadata = {
  title: 'Stats',
  description: 'Some statistics about Doniyorbek Yarkinov and yarkinovd.uz',
};

export default function StatsPage() {
  return <StatsContent />;
}
