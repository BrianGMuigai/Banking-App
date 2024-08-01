import React from 'react'
import { getAccounts } from '../../../../lib/actions/bank.actions';
import { getLoggedInUser } from '../../../../lib/actions/user.action';
import Headerbox from '@/components/headerbox';
import PaymentTransferForm from '@/components/PaymentTransferForm';

const Transfer = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  })

  if(!accounts) return;
  
  const accountsData = accounts?.data;

  return (
    <section className="payment-transfer">
      <Headerbox 
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer"
      />

      <section className="size-full pt-5">
        <PaymentTransferForm accounts={accountsData} />
      </section>
    </section>
  )
}

export default Transfer