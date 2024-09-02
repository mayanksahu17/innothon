"use client"
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Dashboard() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="bg-background shadow">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">GreatWork</span>
          </Link>
          <div className="hidden items-center gap-4 md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Find Talent</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Browse Talent
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Post a Project
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Hire a Project
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Find Work
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Why Our Product
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Get Advice from Expert
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Find Work</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Browse Jobs
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Ways to Earn
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Find Work for Your Skills
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Join Freelancer Plus
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Why Our Product</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex gap-x-36 ml-20 items-center m-4 w-[50%] p-8">
                {/* <div className="flex items-center gap-x-"> */}
                <DropdownMenuItem className="w-[15%] bg-blue-50 rounded-md p-2ml-5">
                  <Link href="#" prefetch={false}>
                    We bring you the world’s best freelancers and agencies, meticulously vetted and rated by clients like you. Whether you need a developer, designer, marketer, or writer, our platform connects you with professionals who have proven expertise in their fields.
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="w-[12%]  bg-blue-50 rounded-md p-2ml-5">
                  <Link href="#" prefetch={false}>
                    Our intuitive platform is designed to make collaboration effortless. From secure messaging to real-time project tracking and milestone management, we provide all the tools you need to stay aligned and on track.
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="w-[15%] bg-blue-50 rounded-md ml-5">
                  <Link href="#" prefetch={false}>
                    No hidden fees, no surprises. Our transparent pricing structure lets you see exactly where your money is going. Choose from fixed-price projects or hourly rates, giving you the flexibility to work within your budget.
                  </Link>
                </DropdownMenuItem>
                {/* </div> */}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">What&apos;s New</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Updates
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Research Institutes
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="relative w-full max-w-md">
              <Input type="search" placeholder="Search for talent or jobs" className="pr-10" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <SearchIcon className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            <Link
              href="/LoginFreelencer"
              className="inline-flex h-9 w-[30%] items-center justify-center rounded-md bg-indigo-500 px-8  text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <span>Log In</span>
            </Link>
            <Link
              href="/SignUpAsFreelencer"
              className="inline-flex h-9 w-[35%] items-center justify-center rounded-md bg-indigo-500 px-8  text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Sign Up
            </Link>
          </div>
          <div className="md:hidden">
            <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-background py-12 md:py-24">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2">

            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl animate-slide-in-left">
                Find the best talent for your business
              </h1>
              <p className="text-muted-foreground md:text-xl animate-slide-in-left delay-100">
                GreatWork connects you with top-rated freelancers and agencies for all your project needs. Post a job and get matched with the perfect fit.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link
                  href="/SignUpAsFreelencer"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-500 
      px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
            </div>
            <img
              srcSet="https://media.giphy.com/media/u1WhXLjwgcXpHJBMRM/giphy.gif?cid=790b7611wqficadxm6fps1pfrj5boyhg4nnqcq512k165m2s&ep=v1_gifs_search&rid=giphy.gif&ct=g"
              width={500}
              height={500}
              alt="Hero Image"
              className="mx-auto rounded-lg object-cover"
              style={{ aspectRatio: "800/600", objectFit: "cover" }}
            />
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2">
            <img
              src="https://media.giphy.com/media/9LQHvkbIzTSLe/giphy.gif?cid=ecf05e47ab11z3ix1ul4iqvjovwu4ndhrxxoluxdj1h7cim4&ep=v1_gifs_related&rid=giphy.gif&ct=g"
              width={600}
              height={400}
              alt="Features Image"
              className="mx-auto rounded-lg object-cover"
              style={{ aspectRatio: "800/600", objectFit: "cover" }}
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Discover the power of GreatWork
              </h2>
              <p className="text-muted-foreground md:text-xl">
                GreatWork offers a wide range of features to help you find the perfect talent for your business. From
                advanced search to secure payments, we&apos;ve got you covered.
              </p>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <SearchIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Advanced Search</h3>
                    <p className="text-muted-foreground">
                      Find the perfect freelancer for your project with our advanced search tools.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <LockIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Secure Payments</h3>
                    <p className="text-muted-foreground">
                      Easily manage payments and invoices with our secure payment system.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <WebcamIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Collaboration Tools</h3>
                    <p className="text-muted-foreground">
                      Collaborate with your team and freelancers using our built-in tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background py-12 md:py-24">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why choose GreatWork?</h2>
              <p className="text-muted-foreground md:text-xl">
                GreatWork is the leading platform for finding and hiring top-rated freelancers and agencies. Here&apos;s why you
                should choose us:
              </p>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <StarIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Top Talent</h3>
                    <p className="text-muted-foreground">Access a global pool of top-rated freelancers and agencies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <ClockIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Faster Hiring</h3>
                    <p className="text-muted-foreground">
                      Get matched with the perfect talent in as little as 24 hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <ShieldIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Secure Payments</h3>
                    <p className="text-muted-foreground">
                      Manage payments and invoices with our secure payment system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              srcSet="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e474jdo8bchdoxun4u9f3uqcf1h6jws8ltqrnbotxtw&ep=v1_gifs_related&rid=giphy.gif&ct=g"
              width={550}
              height={400}
              alt="Why GreatWork"
              className="mx-auto rounded-lg object-cover"
              style={{ aspectRatio: "800/600", objectFit: "cover" }}
            />
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2">
            <img
              src="https://media.giphy.com/media/3oEjHZ3o3w7aSQPHmo/giphy.gif?cid=ecf05e47jk2ordcn0latpecwl88dnbu1d86yizt1n0q9xiho&ep=v1_gifs_related&rid=giphy.gif&ct=g"
              width={500}
              height={500}
              alt="Testimonials"
              className="mx-auto rounded-lg object-cover"
              style={{ aspectRatio: "800/600", objectFit: "cover" }}
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What our customers say</h2>
              <div className="grid gap-6">
                <div className="space-y-2">
                  <p className="text-muted-foreground md:text-xl">
                  &quot;GreatWork has been a game-changer for our business. We&apos;ve been able to find top-quality freelancers
                    who have helped us scale our operations.&quot;
                  </p>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder-user.jpg" alt="Avatar 1" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">John Doe</div>
                      <div className="text-muted-foreground">CEO, Acme Inc.</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground md:text-xl">
                  &quot;GreatWork has been a game-changer for our business. We&apos;ve been able to find top-quality freelancers
                    who have helped us scale our operations.&quot;
                  </p>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/https://media.giphy.com/media/3oEjHZ3o3w7aSQPHmo/giphy.gif?cid=ecf05e47jk2ordcn0latpecwl88dnbu1d86yizt1n0q9xiho&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="Avatar 2" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Jane Smith</div>
                      <div className="text-muted-foreground">CTO, Acme Inc.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       
      </main>
      <footer className="bg-muted py-6 text-sm">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <div className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6" />
            <span>GreatWork</span>
          </div>
          <nav className="flex gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Pricing
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function LockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShieldIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function WebcamIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </svg>
  )
}

