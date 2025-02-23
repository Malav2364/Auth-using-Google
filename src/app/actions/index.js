"use server"

import { signIn, signOut } from "@/auth"

export  async function socialLogin(formData) {
    const action = formData.get('action')
    await signIn(action, {redirectTo : "/home"})
    console.log(action)
}

export  async function doLogout(){
    await signOut({redirectTo : "/"})
}