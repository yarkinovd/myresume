import type { Metadata } from 'next';
import React from 'react';

import ContactContent from '../components/ContactContent';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Doniyorbek Yarkinov on Telegram @yarkinovd',
};

export default function ContactPage() {
  return <ContactContent />;
}
