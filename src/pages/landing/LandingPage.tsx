import { ArrowDownRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  Code,
  GitBranch,
  List,
  Play,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import UnProtectedNavbar from "@/components/navbar/UnProtectedNavbar";
import { HoverEffect } from "../../components/ui/card-hover-effect";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { SparklingGrid } from "@/components/backgrounds/sparkling/Sparkling";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

export const cardItems = [
  {
    title: "Cloud Computing",
    description:
      "Deploy and scale applications effortlessly with our advanced cloud infrastructure solutions",
    link: "/cloud",
  },
  {
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights with our powerful analytics platform",
    link: "/analytics",
  },
  {
    title: "AI Solutions",
    description:
      "Leverage cutting-edge artificial intelligence to automate and optimize your business processes",
    link: "/ai",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your digital assets with enterprise-grade security measures and monitoring",
    link: "/security",
  },
  {
    title: "DevOps Tools",
    description:
      "Streamline your development workflow with integrated CI/CD pipelines and automation tools",
    link: "/devops",
  },
  {
    title: "API Platform",
    description:
      "Build and manage robust APIs with our comprehensive development platform",
    link: "/api",
  },
];

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const LandingPage = () => {
  return (
    <div className="relative h-full w-full">
      <UnProtectedNavbar />
      <SparklingGrid />
      <section className="py-32">
        {/* <BackgroundLines> */}

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <Badge variant="outline">
                New Release
                <ArrowDownRight className="ml-2 size-4" />
              </Badge>
              <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                Welcome to Our Website
              </h1>
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
                doloremque mollitia fugiat omnis! Porro facilis quo animi
                consequatur. Explicabo.
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Button className="w-full sm:w-auto">Primary Button</Button>
                <Button variant="outline" className="w-full sm:w-auto">
                  Secondary Button
                  <ArrowDownRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
            <img
              src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
              alt="placeholder hero"
              className="max-h-96 w-full rounded-md object-cover"
            />
          </div>
        </div>
        {/* </BackgroundLines> */}
      </section>
      <section className="hero bg-primary-foreground py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="text-section lg:w-1/2">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Seamlessly Manage Your Organization, Users, and Projects
            </h1>
            <p className="text-lg text-foreground mb-6">
              Empower your company with robust tools to create, organize, and
              manage teams, projects, and access to resources. Streamline
              collaboration and enhance productivity like never before.
            </p>
            <a
              href="#get-started"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started Now
            </a>
          </div>
          <div className="image-section lg:w-1/2">
            <img
              src="hero-image-placeholder.png"
              alt="Hero Image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section className="features bg-background py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature">
              <img
                src="feature-icon-1.png"
                alt="Feature 1"
                className="h-16 w-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                User Management
              </h3>
              <p className="text-foreground">
                Manage all users under one roof with customizable roles and
                permissions for seamless collaboration.
              </p>
            </div>
            <div className="feature">
              <img
                src="feature-icon-2.png"
                alt="Feature 2"
                className="h-16 w-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Project Oversight
              </h3>
              <p className="text-foreground">
                Create, track, and collaborate on projects with tools that keep
                everyone aligned.
              </p>
            </div>
            <div className="feature">
              <img
                src="feature-icon-3.png"
                alt="Feature 3"
                className="h-16 w-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Access Control
              </h3>
              <p className="text-foreground">
                Assign, monitor, and revoke access to company resources like
                documents and tools effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="how-it-works bg-gray-100 py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="steps grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="step">
              <img
                src="step-icon-1.png"
                alt="Step 1"
                className="h-16 w-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Step 1: Create Your Organization
              </h3>
              <p>
                Set up your company profile and onboard your team effortlessly.
              </p>
            </div>
            <div className="step">
              <img
                src="step-icon-2.png"
                alt="Step 2"
                className="h-16 w-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Step 2: Manage Users & Projects
              </h3>
              <p>
                Assign roles, manage permissions, and track progress in
                real-time.
              </p>
            </div>
            <div className="step">
              <img
                src="step-icon-3.png"
                alt="Step 3"
                className="h-16 w-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Step 3: Secure Resources
              </h3>
              <p>
                Ensure controlled access to documents and tools with granular
                permissions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials bg-white py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="testimonials-slider">
            <div className="testimonial">
              <p className="text-lg text-gray-700 italic">
                "This platform revolutionized the way we manage our teams and
                resources. Highly recommended!"
              </p>
              <p className="text-sm text-gray-500 mt-4">
                - John Doe, CEO at TechCorp
              </p>
            </div>
            <div className="testimonial">
              <p className="text-lg text-gray-700 italic">
                "Easy to use, powerful features, and excellent support. Our
                productivity has soared!"
              </p>
              <p className="text-sm text-gray-500 mt-4">
                - Jane Smith, Project Manager at InnovateX
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CardSpotlight className="h-96 w-96">
          <p className="text-xl font-bold relative z-20 mt-2 text-foreground">
            Authentication steps
          </p>
          <div className="text-foreground mt-4 relative z-20">
            Follow these steps to secure your account:
            <ul className="list-none  mt-2">
              <li className="flex gap-2 items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
                    fill="currentColor"
                    strokeWidth="0"
                  />
                </svg>
                <p className="text-foreground">Enter your email address</p>
              </li>
              <li className="flex gap-2 items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
                    fill="currentColor"
                    strokeWidth="0"
                  />
                </svg>
                <p className="text-foreground">Create a strong password</p>
              </li>
              <li className="flex gap-2 items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
                    fill="currentColor"
                    strokeWidth="0"
                  />
                </svg>
                <p className="text-foreground">
                  Set up two-factor authentication
                </p>
              </li>
              <li className="flex gap-2 items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
                    fill="currentColor"
                    strokeWidth="0"
                  />
                </svg>
                <p className="text-foreground">Verify your identity</p>
              </li>
            </ul>
          </div>
          <p className="text-foreground mt-4 relative z-20 text-sm">
            Ensuring your account is properly secured helps protect your
            personal information and data.
          </p>
        </CardSpotlight>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HoverEffect items={cardItems} />
      </section>

      <AnimatedTestimonials testimonials={testimonials} />

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <h1 className="mb-6 text-pretty text-4xl font-semibold lg:text-5xl">
              This is where your feature goes
            </h1>

            <div className="mt-10 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-1">
                  <Code className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                  <p className="leading-snug text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://www.shadcnblocks.com/images/block/placeholder.svg"
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-1">
                  <Play className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                  <p className="leading-snug text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://www.shadcnblocks.com/images/block/placeholder.svg"
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-1">
                  <GitBranch className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                  <p className="leading-snug text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://www.shadcnblocks.com/images/block/placeholder.svg"
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-1">
                  <List className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                  <p className="leading-snug text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://www.shadcnblocks.com/images/block/placeholder.svg"
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-1">
                  <WandSparkles className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                  <p className="leading-snug text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://www.shadcnblocks.com/images/block/placeholder.svg"
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-1">
                  <Sparkles className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                  <p className="leading-snug text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://www.shadcnblocks.com/images/block/placeholder.svg"
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="cta text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform the Way You Work?
          </h2>
          <p className="text-lg mb-6">
            Start your free trial today and take the first step toward enhanced
            productivity.
          </p>
          <a
            href="#get-started"
            className="bg-white text-blue-600 py-3 px-6 rounded-lg hover:bg-gray-100 transition"
          >
            Get Started for Free
          </a>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-sm font-semibold">Reach Us</span>
            <h1 className="mb-3 mt-1 text-balance text-3xl font-semibold md:text-4xl">
              Speak with Our Friendly Team
            </h1>
            <p className="text-lg text-muted-foreground">
              We&apos;d love to assist you. Fill out the form or drop us an
              email.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
                <Mail className="h-6 w-auto" />
              </span>
              <p className="mb-2 text-lg font-semibold">Email Us</p>
              <p className="mb-3 text-muted-foreground">
                Our team is ready to assist.
              </p>
              <a href="#" className="font-semibold hover:underline">
                abc@example.com
              </a>
            </div>
            <div>
              <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
                <MapPin className="h-6 w-auto" />
              </span>
              <p className="mb-2 text-lg font-semibold">Visit Us</p>
              <p className="mb-3 text-muted-foreground">
                Drop by our office for a chat.
              </p>
              <a href="#" className="font-semibold hover:underline">
                1234 Street Name, City Name
              </a>
            </div>
            <div>
              <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
                <Phone className="h-6 w-auto" />
              </span>
              <p className="mb-2 text-lg font-semibold"> Call Us</p>
              <p className="mb-3 text-muted-foreground">
                We&apos;re available Mon-Fri, 9am-5pm.
              </p>
              <a href="#" className="font-semibold hover:underline">
                +123 456 7890
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
            <div className="mx-auto flex max-w-sm flex-col  gap-10 justify-evenly">
              <div className="text-center lg:text-left">
                <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                  Contact Us
                </h1>
                <p className="text-muted-foreground">
                  We are available for questions, feedback, or collaboration
                  opportunities. Let us know how we can help!
                </p>
              </div>
              <div className="mx-auto w-fit lg:mx-0">
                <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                  Contact Details
                </h3>
                <ul className="ml-4 list-disc">
                  <li>
                    <span className="font-bold">Phone: </span>
                    (123) 34567890
                  </li>
                  <li>
                    <span className="font-bold">Email: </span>
                    <a href="" className="underline">
                      your-email@example.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
              <div className="flex gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="firstname">First Name</Label>
                  <Input type="text" id="firstname" placeholder="First Name" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input type="text" id="lastname" placeholder="Last Name" />
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input type="text" id="subject" placeholder="Subject" />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea placeholder="Type your message here." id="message" />
              </div>
              <Button className="w-full">Send Message</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <footer>
            <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
              <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
                <div>
                  <span className="flex items-center justify-center gap-4 lg:justify-start">
                    <img
                      src="https://www.shadcnblocks.com/images/block/block-1.svg"
                      alt="logo"
                      className="h-11"
                    />
                    <p className="text-3xl font-semibold">Shadcnblocks</p>
                  </span>
                  <p className="mt-6 text-sm text-muted-foreground">
                    A collection of 100+ responsive HTML templates for your
                    startup business or side project.
                  </p>
                </div>
                <ul className="flex items-center space-x-6 text-muted-foreground">
                  <li className="font-medium hover:text-primary">
                    <a href="#">
                      <FaInstagram className="size-6" />
                    </a>
                  </li>
                  <li className="font-medium hover:text-primary">
                    <a href="#">
                      <FaFacebook className="size-6" />
                    </a>
                  </li>
                  <li className="font-medium hover:text-primary">
                    <a href="#">
                      <FaTwitter className="size-6" />
                    </a>
                  </li>
                  <li className="font-medium hover:text-primary">
                    <a href="#">
                      <FaLinkedin className="size-6" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-3 gap-6 lg:gap-20">
                {sections.map((section, sectionIdx) => (
                  <div key={sectionIdx}>
                    <h3 className="mb-6 font-bold">{section.title}</h3>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                      {section.links.map((link, linkIdx) => (
                        <li
                          key={linkIdx}
                          className="font-medium hover:text-primary"
                        >
                          <a href={link.href}>{link.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
              <p>© 2024 Shadcnblocks. All rights reserved.</p>
              <ul className="flex justify-center gap-4 lg:justify-start">
                <li className="hover:text-primary">
                  <a href="#"> Terms and Conditions</a>
                </li>
                <li className="hover:text-primary">
                  <a href="#"> Privacy Policy</a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
