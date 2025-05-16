import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="DEALS-NG Logo"
              className="h-10 w-10"
              onError={(e) => {
                e.currentTarget.src =
                  "https://api.dicebear.com/7.x/shapes/svg?seed=deals-ng";
              }}
            />
            <span className="text-2xl font-bold text-green-600">DEALS-NG</span>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <a
              href="#features"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#benefits"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Benefits
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              How It Works
            </a>
            <Link to="/tasks">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-list"
                >
                  <line x1="8" x2="21" y1="6" y2="6" />
                  <line x1="8" x2="21" y1="12" y2="12" />
                  <line x1="8" x2="21" y1="18" y2="18" />
                  <line x1="3" x2="3.01" y1="6" y2="6" />
                  <line x1="3" x2="3.01" y1="12" y2="12" />
                  <line x1="3" x2="3.01" y1="18" y2="18" />
                </svg>
                Browse Tasks
              </Button>
            </Link>
            <Link to="/post-task">
              <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                Post Task
              </Button>
            </Link>
            {user ? (
              <Link to="/dashboard">
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </nav>
          <Button variant="ghost" className="md:hidden" aria-label="Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-green-50 py-16 md:py-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
            alt="Youths in co-working space"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Connecting <span className="text-green-600">Tasks</span> with{" "}
                <span className="text-orange-500">Talent</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                DEALS-NG is a decentralized crowd-sourced commerce platform
                addressing youth unemployment in Africa through a unique bidding
                system that connects task posters with service providers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => navigate(user ? "/dashboard" : "/register")}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-lg"
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-6 text-lg rounded-lg"
                  onClick={() => {
                    const element = document.getElementById("how-it-works");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="People collaborating"
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Counting Banner */}
      <section className="bg-green-600 py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold mb-2">
                5,000+
              </span>
              <span className="text-sm md:text-base">Active Users</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold mb-2">
                12,500+
              </span>
              <span className="text-sm md:text-base">Tasks Completed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold mb-2">12</span>
              <span className="text-sm md:text-base">Service Categories</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold mb-2">₦25M+</span>
              <span className="text-sm md:text-base">Transactions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platform Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              DEALS-NG offers a comprehensive set of features designed to create
              opportunities and facilitate seamless transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clipboard-list"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <path d="M12 11h4" />
                  <path d="M12 16h4" />
                  <path d="M8 11h.01" />
                  <path d="M8 16h.01" />
                </svg>
              }
              title="Task Posting"
              description="Post tasks with detailed descriptions, requirements, and budgets to find the perfect service provider for your needs."
            />
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-gavel"
                >
                  <path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10" />
                  <path d="m16 16 6-6" />
                  <path d="m8 8 6-6" />
                  <path d="m9 7 8 8" />
                  <path d="m21 11-8-8" />
                </svg>
              }
              title="Bidding System"
              description="Service providers can bid on tasks that match their skills, allowing clients to choose the best offer based on price and ratings."
            />
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
              title="Affiliate Networks"
              description="Build your own network of service providers and earn commissions when they complete tasks through our unique downline system."
            />
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-wallet"
                >
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                  <path d="M3 7v12a2 2 0 0 0 2 2h16v-5" />
                  <path d="M16 12h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Z" />
                </svg>
              }
              title="In-App Wallet"
              description="Securely manage your earnings and payments with our integrated wallet system, with easy withdrawals to your bank account."
            />
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              }
              title="Rating System"
              description="Build your reputation through our performance rating system, helping you stand out and gain more opportunities."
            />
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-square"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              }
              title="Secure Messaging"
              description="Communicate directly with clients or service providers through our secure in-app messaging system once matched."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits for Everyone
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              DEALS-NG creates value for different types of users, whether
              you're looking to get tasks done, offer your services, or build a
              network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              title="For Clients"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-briefcase"
                >
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              }
              benefits={[
                "Access a wide pool of skilled service providers",
                "Get competitive bids for your tasks",
                "Review ratings to find reliable professionals",
                "Secure payment system with escrow protection",
                "Direct communication with selected providers",
              ]}
            />
            <BenefitCard
              title="For Service Providers"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-wrench"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              }
              benefits={[
                "Find tasks matching your skills and location",
                "Set your own rates through competitive bidding",
                "Build a reputation with our rating system",
                "Secure and timely payments for completed work",
                "Flexible work opportunities across categories",
              ]}
            />
            <BenefitCard
              title="For Promoters"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-network"
                >
                  <rect x="16" y="16" width="6" height="6" rx="1" />
                  <rect x="2" y="16" width="6" height="6" rx="1" />
                  <rect x="9" y="2" width="6" height="6" rx="1" />
                  <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                  <path d="M12 12V8" />
                </svg>
              }
              benefits={[
                "Earn commissions from your downline network",
                "5% commission on all tasks completed by referrals",
                "Build a sustainable passive income stream",
                "No limit on network size or earning potential",
                "Help others find opportunities while you earn",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Recent Featured Tasks Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Recent Featured Tasks
            </h2>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => navigate("/marketplace")}
            >
              See All Tasks
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Task Card 1 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">
                    Website Development for Local Restaurant
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 border-green-200"
                  >
                    Digital
                  </Badge>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Lagos</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  Need a responsive website with online ordering system for a
                  local restaurant. Must include menu management and customer
                  reviews.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700"
                  >
                    Web Development
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700"
                  >
                    UI/UX
                  </Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-1 text-amber-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-dollar-sign"
                    >
                      <line x1="12" x2="12" y1="2" y2="22" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    <span className="font-medium">₦60,000</span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clock"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>Due in 14 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Task Card 2 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">
                    Home Cleaning Service
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 border-green-200"
                  >
                    Domestic
                  </Badge>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Abuja</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  Need weekly cleaning service for a 3-bedroom apartment. Tasks
                  include dusting, mopping, bathroom cleaning, and kitchen
                  cleaning.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700"
                  >
                    Cleaning
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700"
                  >
                    Home Services
                  </Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-1 text-amber-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-dollar-sign"
                    >
                      <line x1="12" x2="12" y1="2" y2="22" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    <span className="font-medium">₦8,000</span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clock"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>Due in 3 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Task Card 3 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">
                    Mathematics Tutoring for WAEC
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 border-green-200"
                  >
                    Academic
                  </Badge>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Ibadan</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  Looking for a mathematics tutor for a high school student
                  preparing for WAEC exams. Focus on algebra, calculus, and
                  statistics.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700"
                  >
                    Mathematics
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700"
                  >
                    Tutoring
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700"
                  >
                    WAEC
                  </Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-1 text-amber-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-dollar-sign"
                    >
                      <line x1="12" x2="12" y1="2" y2="22" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    <span className="font-medium">₦12,000</span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clock"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>Due in 7 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular Service Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Category 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=80"
                  alt="Domestic Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Domestic Services</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Cleaning, laundry, nanny services
                </p>
              </div>
            </div>

            {/* Category 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80"
                  alt="Professional Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Professional Services</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Legal, financial, consulting
                </p>
              </div>
            </div>

            {/* Category 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80"
                  alt="Digital Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Digital Services</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Web development, design, marketing
                </p>
              </div>
            </div>

            {/* Category 4 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80"
                  alt="Academic Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Academic Services</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Tutoring, research, editing
                </p>
              </div>
            </div>

            {/* Category 5 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=500&q=80"
                  alt="Business Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Business Services</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Virtual assistant, data entry
                </p>
              </div>
            </div>

            {/* Category 6 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80"
                  alt="Creative Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Creative Services</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Photography, video editing
                </p>
              </div>
            </div>

            {/* Category 7 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=500&q=80"
                  alt="Technical Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Technical Services</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Carpentry, electrical, plumbing
                </p>
              </div>
            </div>

            {/* Category 8 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80"
                  alt="Real Estate Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Real Estate Services</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Rent, lease, property management
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Getting started with DEALS-NG is simple, whether you want to post
              tasks or offer your services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard
              number="1"
              title="Create an Account"
              description="Sign up and choose between ordinary (1000 naira) or executive (5000 naira) membership to access all features."
            />
            <StepCard
              number="2"
              title="Complete Your Profile"
              description="Add your skills, location, and profile picture to help match you with relevant tasks or service providers."
            />
            <StepCard
              number="3"
              title="Post or Bid on Tasks"
              description="Post tasks with your requirements or bid on available tasks that match your expertise."
            />
            <StepCard
              number="4"
              title="Complete Transactions"
              description="Perform tasks, receive payments, and build your rating through successful completions."
            />
          </div>
        </div>
      </section>

      {/* Ready to Join Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Join the DEALS-NG Network?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Create your account today and start accessing opportunities or
              posting tasks. Our platform helps you connect with the right
              people for any job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                <svg
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
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Start Earning Immediately
              </h3>
              <p className="text-gray-600">
                Begin earning right after signing up by bidding on available
                tasks or posting your own.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                <svg
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Access Diverse Opportunities
              </h3>
              <p className="text-gray-600">
                Find tasks across multiple categories that match your skills and
                interests.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                <svg
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
                  <rect x="16" y="16" width="6" height="6" rx="1" />
                  <rect x="2" y="16" width="6" height="6" rx="1" />
                  <rect x="9" y="2" width="6" height="6" rx="1" />
                  <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                  <path d="M12 12V8" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Build Your Network</h3>
              <p className="text-gray-600">
                Create your own affiliate network and earn commissions from your
                downline.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                <svg
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
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                Our escrow protection ensures you get paid for completed work
                with no disputes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Membership
            </h2>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              Select the membership tier that best suits your needs and start
              your journey with DEALS-NG.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8">
            <Card className="w-full md:w-96 bg-white text-gray-900">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Ordinary Membership
                  </h3>
                  <div className="text-4xl font-bold text-green-600 mb-1">
                    ₦1,000
                  </div>
                  <p className="text-gray-500">per year</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600 mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Access to task marketplace</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600 mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Bid on tasks up to ₦10,000</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600 mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Basic affiliate network features</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600 mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>In-app messaging</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => navigate("/register?plan=ordinary")}
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>

            <Card className="w-full md:w-96 bg-white text-gray-900 border-orange-500 border-2">
              <CardContent className="p-8">
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    RECOMMENDED
                  </span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Executive Membership
                  </h3>
                  <div className="text-4xl font-bold text-orange-500 mb-1">
                    ₦5,000
                  </div>
                  <p className="text-gray-500">per year</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-orange-500 mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Access to all tasks without limits</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-orange-500 mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Priority in task matching</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-orange-500 mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Advanced affiliate network tools</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-orange-500 mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Reduced platform fees (2% discount)</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-orange-500 mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Premium support</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  onClick={() => navigate("/register?plan=executive")}
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from service providers, clients, and promoters who have
              experienced the benefits of the DEALS-NG platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Client Testimonial */}
            <TestimonialCard
              name="Chioma Okafor"
              role="Business Owner"
              image="https://api.dicebear.com/7.x/avataaars/svg?seed=chioma"
              quote="Finding reliable service providers used to be a challenge for my business. With DEALS-NG, I can quickly post tasks and receive competitive bids from qualified professionals. The rating system helps me choose the best person for each job."
              userType="Client"
            />

            {/* Service Provider Testimonial */}
            <TestimonialCard
              name="Emmanuel Adeyemi"
              role="Freelance Web Developer"
              image="https://api.dicebear.com/7.x/avataaars/svg?seed=emmanuel"
              quote="DEALS-NG has transformed my freelance career. I now have a steady stream of projects that match my skills, and the secure payment system ensures I get paid promptly for my work. My client base has grown significantly since joining."
              userType="Service Provider"
            />

            {/* Promoter Testimonial */}
            <TestimonialCard
              name="Blessing Nwachukwu"
              role="Network Marketer"
              image="https://api.dicebear.com/7.x/avataaars/svg?seed=blessing"
              quote="The affiliate network on DEALS-NG has created a new income stream for me. By connecting service providers with clients, I earn commissions while helping others find opportunities. It's a win-win for everyone involved."
              userType="Promoter"
            />

            {/* Downline Network Testimonial */}
            <TestimonialCard
              name="Tunde Bakare"
              role="Student"
              image="https://api.dicebear.com/7.x/avataaars/svg?seed=tunde"
              quote="Joining DEALS-NG through my mentor's referral was the best decision I made as a student. I can now earn money part-time by completing tasks that fit around my class schedule, and I'm building valuable skills for my future career."
              userType="Downline Member"
            />
          </div>
        </div>
      </section>

      {/* Recruitment Interface */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Free Job Postings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Employers can post job opportunities for free. Candidates can
              apply with their profiles and motivation statements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Job Posting 1 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">Frontend Developer</CardTitle>
                  <Badge
                    variant="outline"
                    className="bg-blue-50 text-blue-700 border-blue-200"
                  >
                    Remote
                  </Badge>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Lagos (Remote)</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  We're looking for a skilled Frontend Developer with React
                  experience to join our growing team. 3+ years of experience
                  required.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700"
                  >
                    TypeScript
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700"
                  >
                    Tailwind
                  </Badge>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Apply Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Apply for Frontend Developer Position
                      </DialogTitle>
                      <DialogDescription>
                        Submit your application for this position. Your contact
                        information will be hidden from employers until approved
                        by admin.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="motivation">Motivation Statement</Label>
                        <Textarea
                          id="motivation"
                          placeholder="Why are you a good fit for this position?"
                          rows={5}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="cv-upload">Upload CV (PDF only)</Label>
                        <Input id="cv-upload" type="file" accept=".pdf" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => {}}>
                        Cancel
                      </Button>
                      <Button
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => {}}
                      >
                        Submit Application
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Job Posting 2 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">
                    Digital Marketing Specialist
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="bg-purple-50 text-purple-700 border-purple-200"
                  >
                    Full-time
                  </Badge>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Abuja</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  Join our marketing team to develop and implement digital
                  marketing strategies. Experience with social media campaigns
                  required.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700"
                  >
                    Social Media
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700"
                  >
                    SEO
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700"
                  >
                    Content Creation
                  </Badge>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Apply Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Apply for Digital Marketing Position
                      </DialogTitle>
                      <DialogDescription>
                        Submit your application for this position. Your contact
                        information will be hidden from employers until approved
                        by admin.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="motivation2">
                          Motivation Statement
                        </Label>
                        <Textarea
                          id="motivation2"
                          placeholder="Why are you a good fit for this position?"
                          rows={5}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="cv-upload2">Upload CV (PDF only)</Label>
                        <Input id="cv-upload2" type="file" accept=".pdf" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => {}}>
                        Cancel
                      </Button>
                      <Button
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => {}}
                      >
                        Submit Application
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Job Posting 3 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">
                    Customer Support Representative
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="bg-amber-50 text-amber-700 border-amber-200"
                  >
                    Part-time
                  </Badge>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Port Harcourt</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  We're seeking customer support representatives to assist
                  clients via phone and email. Excellent communication skills
                  required.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700"
                  >
                    Customer Service
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700"
                  >
                    Communication
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700"
                  >
                    Problem Solving
                  </Badge>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Apply Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Apply for Customer Support Position
                      </DialogTitle>
                      <DialogDescription>
                        Submit your application for this position. Your contact
                        information will be hidden from employers until approved
                        by admin.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="motivation3">
                          Motivation Statement
                        </Label>
                        <Textarea
                          id="motivation3"
                          placeholder="Why are you a good fit for this position?"
                          rows={5}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="cv-upload3">Upload CV (PDF only)</Label>
                        <Input id="cv-upload3" type="file" accept=".pdf" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => {}}>
                        Cancel
                      </Button>
                      <Button
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => {}}
                      >
                        Submit Application
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/post-job">
              <Button className="bg-green-600 hover:bg-green-700">
                Post a Job Opening
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join DEALS-NG today and be part of a growing community addressing
            youth unemployment through innovative crowd-sourced commerce.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-lg"
              onClick={() => navigate("/register")}
            >
              Sign Up Now
            </Button>
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-6 text-lg rounded-lg"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/logo.svg"
                  alt="DEALS-NG Logo"
                  className="h-8 w-8"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://api.dicebear.com/7.x/shapes/svg?seed=deals-ng";
                  }}
                />
                <span className="text-xl font-bold text-green-400">
                  DEALS-NG
                </span>
              </div>
              <p className="text-gray-400">
                A decentralized crowd-sourced commerce platform addressing youth
                unemployment in Africa.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#benefits"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Benefits
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    How It Works
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-400"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-gray-400">+234 123 456 7890</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-400"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="text-gray-400">support@deals-ng.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-400"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-gray-400">Lagos, Nigeria</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} DEALS-NG. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <Card className="bg-white border-gray-200">
      <CardContent className="p-6">
        <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

// Benefit Card Component
const BenefitCard = ({
  title,
  icon,
  benefits,
}: {
  title: string;
  icon: React.ReactNode;
  benefits: string[];
}) => {
  return (
    <Card className="bg-white border-gray-200">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-600 mr-2 mt-1"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-gray-600">{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

// Step Card Component
const StepCard = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="text-center">
      <div className="h-16 w-16 rounded-full bg-green-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({
  name,
  role,
  image,
  quote,
  userType,
}: {
  name: string;
  role: string;
  image: string;
  quote: string;
  userType: string;
}) => {
  return (
    <Card className="bg-white border-gray-200 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col items-center mb-4">
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200 mb-3"
          >
            {userType}
          </Badge>
          <div className="relative">
            <div className="h-20 w-20 rounded-full overflow-hidden mb-3">
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-quote"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-1">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
        <p className="text-gray-600 text-sm italic">"{quote}"</p>
        <div className="mt-4 flex justify-center">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#FFB800"
                stroke="#FFB800"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Image Slider Component
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      alt: "People collaborating",
      caption: "Connect with talented professionals",
    },
    {
      url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
      alt: "Cheerful youths working together",
      caption: "Empowering youth with opportunities",
    },
    {
      url: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80",
      alt: "Business partners shaking hands",
      caption: "Building successful partnerships",
    },
    {
      url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      alt: "Domestic workers",
      caption: "Quality domestic services at your fingertips",
    },
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      alt: "Team collaboration",
      caption: "Collaborate on projects that matter",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="relative w-full h-full">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
            <p className="text-lg font-medium">{image.caption}</p>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
