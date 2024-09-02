import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import BestMatchesCard from '../BestMatches/BestMatchesCard'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { EnvelopeIcon, PhoneIcon, BriefcaseIcon } from '@heroicons/react/24/solid'

function HeroFreelencer() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-white to-indigo-100">
      {/* navbar */}
      <header className="bg-indigo-800 text-primary-foreground py-4 px-6 flex items-center justify-between">
        <nav className="flex items-center gap-6">
          <Link href="#" className="font-semibold text-lg" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="px-4 py-2 text-sm text-gray-400">
            Hire Me
          </Button>
          <Avatar className="w-8 h-8 text-gray-500">
            <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* filter */}
      <div className='flex justify-around items-center p-5 m-2'>
        <div className="container mx-auto max-w-6xl mt-8">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8 shadow-indigo-50">
            <h2 className="text-2xl font-bold mb-4 text-indigo-500">Filter Projects</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="duration">Duration</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All" className='bg-white border border-gray-400 mt-1' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short-term">Short-term</SelectItem>
                    <SelectItem value="long-term">Long-term</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="experience">Experience Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All" className='bg-white border border-gray-400 mt-1' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2 flex items-end justify-end">
                <Button className="px-6 py-2 text-sm bg-indigo-500">Apply Filters</Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* progress track */}
          <Card className="w-full max-w-md bg-indigo-50">
            <CardHeader>
              <CardTitle>Profile Completion</CardTitle>
              <CardDescription>Complete your profile to unlock more features.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium">75% Complete</div>
                <div className="text-sm text-muted-foreground">3 steps remaining</div>
              </div>
              <Progress value={75} className="mb-4 bg-indigo-500" />
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10">
                    <EnvelopeIcon className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-xs text-muted-foreground">Verified</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10">
                    <PhoneIcon className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Phone</div>
                    <div className="text-xs text-muted-foreground">Not Verified</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10">
                    <BriefcaseIcon className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Experience</div>
                    <div className="text-xs text-muted-foreground">2 years</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* project cards */}
      <BestMatchesCard />
    </div>
  )
}

export default HeroFreelencer;
