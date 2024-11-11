// app/viewer/page.tsx
'use client';

import React from 'react';
import MasonryGrid from './components/MasonryGrid';

export default function Home() {
  return (
    <div className="overflow-y-auto scrollbar-hide ">
    <MasonryGrid/>
  </div>
  );
}
