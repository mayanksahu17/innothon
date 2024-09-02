'use client'
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function Component() {
  const router = useRouter()
  const [user , setUser] = useState({
    userName:"",
    email:"",
    password:"",
    role : "freelancer"
  })

  const [buttonDisabled , setButtonDisabled] = useState(false)
  const [loading , setloading] = useState(false)

  const onSignup = async()=>{
    try {
      setloading(true)
      console.log("response ke pehle hai ")
      const response = await axios.post("/api/auth/sign-up", user)
      console.log(response)
      console.log("response ke baad me")
      console.log("signup success", response.data)
      
      router.push("/verify-email")
      
    } catch (error:any) {
      console.error("Signup failed ",error);
      
    }
  }

  useEffect(()=>{
  if(user.email.length > 0 && user.password.length >0 && user.userName.length > 0){
    setButtonDisabled(false)
  }
  else{
    setButtonDisabled(true)
  }
  },[user])


  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background">
        
      <div className="max-w-md w-full space-y-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Sign Up as Freelancer</h1>
          <p className="mt-2 text-sm text-muted-foreground">Create your account to get started.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
            prefetch={false}
          >
            Sign up as a Freelancer
          </Link>
          <Link
            href="/SignUpAsBussiness"
            className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-1 focus:ring-secondary focus:ring-offset-1"
            prefetch={false}
          >
            Sign up as a Business
          </Link>
        </div>
        <div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" 
              value={user.userName}
              onChange={(e)=> setUser({...user, userName:e.target.value })}
              type="text" placeholder="John Doe" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" 
              value={user.email}
              onChange={(e)=> setUser({...user, email:e.target.value })} 
              type="email"  placeholder="example@email.com" required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" 
              value={user.password}
              onChange={(e)=> setUser({...user, password:e.target.value })}
              type="password" required />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="is-freelancer" />
              <Label htmlFor="is-freelancer">Sign up as a Freelancer</Label>
            </div>
            <Button onClick={onSignup} type="submit" className="w-full">
              Sign Up
            </Button>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/LoginFreelencer" className="font-medium text-primary hover:underline" prefetch={false}>
            Log in
          </Link>
        </div>
      </div>
    </div>
  )
}