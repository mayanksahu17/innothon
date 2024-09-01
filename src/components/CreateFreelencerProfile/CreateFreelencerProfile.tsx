"use client"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { UploadButton } from '@/utils/uploadthing';
import { useState } from "react"
import FreelencerProfilePreview from "../FreelencerProfilePreview/FreelencerProfilePreview"
import Link from "next/link"


export default function CreateFreelencerProfile() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [techStacks, setTechStacks] = useState("");
  const [degree, setDegree] = useState("");
  const [school, setSchool] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [language, setLanguage] = useState("");


    const handleSubmit = async()=>{
      const payload = {
        name,
        imageUrl,
        bio,
        skills,
        experience,
        projectTitle,
        projectDescription,
        techStacks,
        degree,
        school,
        graduationYear,
        language,
      }

      const res = await axios.post("/api/auth/profile/complete",payload)
    }
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8 text-indigo-500">Create Your Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Personal Information</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-muted-foreground text-gray-400 font-light">
                Name
              </label>
              <Input id="name" type="text" className="mt-1 block w-full" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="profile-picture" className="block text-sm text-muted-foreground text-gray-400 font-light">
                Profile Picture
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-muted border-dashed rounded-md">
                <div className="space-y-1 text-center">
                   {/* <UploadButton
                    className="mt-40"
                    endpoint='imageUploader'
                    onClientUploadComplete={async (res: any) => {
                      // setImageUrl(res[0].url);
                      setImageUrl('/Images/discover.png');
                      alert("Upload Completed");
                    }}
                    onUploadError={(error: any) => {
                      alert(`ERROR! ${error.message}`);
                    }}
                  />  */}
                  <div className="flex text-sm text-muted-foreground">
                    <label
                      htmlFor="profile-picture"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                    >
                      <span>Upload a file</span>
                      <Input id="profile-picture" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="bio" className="block text-sm text-muted-foreground text-gray-400 font-light">
                Bio
              </label>
              <Textarea id="bio" rows={3} className="mt-1 block w-full" value={bio} onChange={(e) => setBio(e.target.value)} />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Skills</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="skills" className="blockb text-gray-400 font-light  text-sm  text-muted-foreground">
                Skills
              </label>
              <Select onValueChange={(value) => setSkills(value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Domain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ai_ml">AI/ML</SelectItem>
                  <SelectItem value="web_dev">Web Developer</SelectItem>
                  <SelectItem value="android_dev">Android Developer</SelectItem>
                  <SelectItem value="blockchain_dev">Blockchain Developer</SelectItem>
                  <SelectItem value="data_scientist">Data Scientist</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm text-muted-foreground text-gray-400 font-light">
                Years of Experience
              </label>
              <Input id="experience" type="number" min="0" className="mt-1 block w-full" value={experience} onChange={(e) => setExperience(e.target.value)} />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Work Experience</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="projects" className="font-light text-gray-400 block text-sm text-muted-foreground">
                Projects
              </label>
              <div className="mt-1 space-y-2">
                <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                  <Input id="project-title" type="text" placeholder="Project Title" value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} />
                </div>
                <Textarea id="project-description" rows={2} placeholder="Project Description" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} />
              </div>
            </div>
            <div>
              <label htmlFor="tech-stacks" className="block text-sm font-light text-gray-400 text-muted-foreground">
                Tech Stacks
              </label>
              <Select onValueChange={(value) => setTechStacks(value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select tech stacks" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="node">Node.js</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="ruby">Ruby</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="csharp">C#</SelectItem>
                  <SelectItem value="php">PHP</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="degree" className="block text-sm  text-muted-foreground text-gray-400 font-light">
                Degree
              </label>
              <Input id="degree" type="text" className="mt-1 block w-full" value={degree} onChange={(e) => setDegree(e.target.value)} />
            </div>
            <div>
              <label htmlFor="school" className="block text-sm font-light text-gray-400 text-muted-foreground">
                School
              </label>
              <Input id="school" type="text" className="mt-1 block w-full" value={school} onChange={(e) => setSchool(e.target.value)} />
            </div>
            <div>
              <label htmlFor="graduation-year" className="block text-sm font-light text-gray-400 text-muted-foreground">
                Graduation Year
              </label>
              <Input id="graduation-year" type="number" min="1900" max="2100" className="mt-1 block w-full" value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Preferred Language</h2>
          <div>
            <label htmlFor="language" className="block text-sm font-light text-gray-400 medium text-muted-foreground">
              Language
            </label>
            <Select onValueChange={(value) => setLanguage(value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="french">French</SelectItem>
                <SelectItem value="german">German</SelectItem>
                <SelectItem value="hindi">Hindi</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link href='/FreelencerProfilePreview'>
          <Button type="submit">Submit</Button>
        </Link>
      </div>
      <div className="mt-12">
        <FreelencerProfilePreview
          name={name}
          imageUrl={'/Images/discover.png'}
          bio={bio}
          skills={skills}
          experience={experience}
          projectTitle={projectTitle}
          projectDescription={projectDescription}
          techStacks={techStacks}
          degree={degree}
          school={school}
          graduationYear={graduationYear}
          language={language}
        />
      </div>
    </div>
  )
}
