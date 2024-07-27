import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { createLinkToken } from "../../lib/actions/user.action";
import {   PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink  } from 'react-plaid-link' ;

const PlaidLink = ({user, variant }: PlaidLinkProps) => {

    const router = useRouter();
    const [ token, settoken ] = useState('');

    useEffect(() =>{
        const getLinkToken =async () =>{
        const data = await createLinkToken(user);

          setToken(data?.linkToken);
        }

        getLinkToken();
    }, [user]);

    const onSuccess= useCallback< PlaidLinkOnSuccess>( async (public_token: String ) =>{
             //   await exchangePublicToken({
               //     publicToken:p4ublic_token,
                 //   user,
               // })
               router.push ('/');
    }, [user] )

    const config: PlaidLinkOptions = {
        token,
        onSuccess,
    }
      const { open, ready } =usePlaidLink(config);
  return(
  <>
    {variant === 'primary' ? (
    <Button 
       onClick={() => open()}
       disabled = {!ready}
       className ="plaidlink-primary"
    >
        Connect bank
    </Button>
  ): variant === 'ghost' ? (
    <Button >
        Connect bank
    </Button>
  ):(
    <Button>
        Connect bank
    </Button>
  ) }
  </>
)};


export default PlaidLink;
