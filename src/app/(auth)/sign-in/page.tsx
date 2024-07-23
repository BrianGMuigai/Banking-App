import AuthForm from '@/components/ui/AuthForm'
import React from 'react'

export default function SignIn() {
  return (
    <section className= "flex-center size-full max-sm:px-6">
      <AuthForm type="sign-in"/>
    </section>
  )
}
