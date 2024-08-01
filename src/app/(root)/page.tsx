import Headerbox from "@/components/headerbox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSideBar from "@/components/ui/RightSideBar";
import React from "react";
import { getLoggedInUser } from "../../../lib/actions/user.action";
import { getAccount, getAccounts } from "../../../lib/actions/bank.actions";
import RecentTransactions from "@/components/RecentTransactions";


export default async function  page({searchParams:{id, page}}:SearchParamProps) {
     
  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  })

  if(!accounts) return;
  
  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId })

  

  return(<section className="home"> 

                <div className = "home-content">
  
                  <header className= "home=header">
  
                  <Headerbox
                    type="greeting"
                    title="Welcome"
                    user= {loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transaction efficiently."/>
                          
                          <TotalBalanceBox
                            accounts={[accountsData]}
                            totalBanks={accounts?.totalBanks}
                            totalCurrentBalance={accounts?.totalCurrentBalance}
                          />
                      </header>
          
                      <RecentTransactions 
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
                   </div>
                   <RightSideBar 
        user={loggedIn}
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
    );
    
}
