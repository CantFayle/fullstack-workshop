'use client'
import React from "react";
import {signIn, signOut} from "next-auth/react"

export default function SignInOutButton({authenticated = false}): React.ReactElement {
  return (
    <button onClick={
      () => authenticated
        ? signOut()
        : signIn("google", {callbackUrl: "/"})
    }>
      Sign {authenticated ? 'out' : 'in'}
    </button>
  )
}