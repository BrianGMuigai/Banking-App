// components/AddBank.tsx
'use client';

import React from 'react';
import PlaidLink from './PlaidLink';  // Ensure this path is correct

const AddBank = ({ user }: { user: User }) => {
  return (
    <div className="flex items-center gap-2">
      <PlaidLink user={user} variant="destructive" />  
    </div>
  );
}

export default AddBank;
