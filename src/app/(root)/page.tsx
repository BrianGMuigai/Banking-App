import Headerbox from "@/components/headerbox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSideBar from "@/components/ui/RightSideBar";
import React from "react";
import { getLoggedInUser } from "../../../lib/actions/user.action";


export default async function  page() {
     const loggedIn = await getLoggedInUser();

  return(<section className="home"> 

                <div className = "home-content">
  
                  <header className= "home=header">
  
                  <Headerbox
                    type="greeting"
                    title="Welcome"
                    user= {loggedIn?.name || 'Guest'}
                    subtext="Access and manage your account and transaction efficiently."/>
                          
                          <TotalBalanceBox
                            accounts={[]}
                            totalBanks={2}
                            totalCurrentBalance={1250.35}
                          />
                      </header>
                   RECENT TRANSATIONS

                   </div>
                   <RightSideBar
                   user={loggedIn}
                   transations={[]}
                   banks={[{}, {}]}
                   />
    </section>
    );
    
}
