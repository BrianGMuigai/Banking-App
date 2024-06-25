import Headerbox from "@/components/headerbox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSideBar from "@/components/ui/RightSideBar";
import React from "react";


export default function page() {
     const loggedIn = { firstName:'Brian',lastName:'Muigai', email:'brianmuigai@gmail.com'};

  return(<section className="home"> 

                <div className = "home-content">
  
                  <header className= "home=header">
  
                  <Headerbox
                    type="greeting"
                    title="Welcome"
                    user= {loggedIn?.firstName || 'Guest'}
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
