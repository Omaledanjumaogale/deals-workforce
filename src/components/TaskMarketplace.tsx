import React, { useState } from "react";
import {
  Search,
  Filter,
  MapPin,
  Clock,
  DollarSign,
  ChevronDown,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface Task {
  id: string;
  title: string;
  description: string;
  category: string;
  skills: string[];
  location: string;
  budget: number;
  deadline: string;
  postedBy: {
    name: string;
    avatar: string;
    rating: number;
  };
  bidCount: number;
}

const TaskMarketplace = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [sortBy, setSortBy] = useState("newest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Mock data for tasks
  const mockTasks: Task[] = [
    {
      id: "1",
      title: "Website Development for Local Business",
      description:
        "Need a responsive website built for a small retail business. Must include e-commerce functionality and content management system.",
      category: "Digital",
      skills: ["Web Development", "React", "E-commerce"],
      location: "Lagos",
      budget: 50000,
      deadline: "2023-12-15",
      postedBy: {
        name: "John Doe",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
        rating: 4.8,
      },
      bidCount: 7,
    },
    {
      id: "2",
      title: "Logo Design for Tech Startup",
      description:
        "Looking for a modern, minimalist logo design for a new fintech startup. Should convey innovation and trust.",
      category: "Creative",
      skills: ["Graphic Design", "Logo Design", "Branding"],
      location: "Abuja",
      budget: 15000,
      deadline: "2023-11-30",
      postedBy: {
        name: "Sarah Johnson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
        rating: 4.5,
      },
      bidCount: 12,
    },
    {
      id: "3",
      title: "Home Cleaning Service",
      description:
        "Need thorough cleaning of a 3-bedroom apartment including kitchen and bathrooms. Weekly service required.",
      category: "Domestic",
      skills: ["Cleaning", "Home Services"],
      location: "Port Harcourt",
      budget: 8000,
      deadline: "2023-11-25",
      postedBy: {
        name: "Michael Okonkwo",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
        rating: 4.2,
      },
      bidCount: 5,
    },
    {
      id: "4",
      title: "Mathematics Tutoring for High School Student",
      description:
        "Looking for a tutor to help with advanced mathematics for a high school student preparing for WAEC exams.",
      category: "Academic",
      skills: ["Mathematics", "Tutoring", "WAEC Prep"],
      location: "Ibadan",
      budget: 12000,
      deadline: "2023-12-10",
      postedBy: {
        name: "Amina Bello",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=amina",
        rating: 4.9,
      },
      bidCount: 3,
    },
    {
      id: "5",
      title: "Legal Document Review",
      description:
        "Need a lawyer to review a business contract and provide feedback within 48 hours.",
      category: "Professional",
      skills: ["Legal", "Contract Law", "Document Review"],
      location: "Lagos",
      budget: 25000,
      deadline: "2023-11-20",
      postedBy: {
        name: "Chidi Okafor",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=chidi",
        rating: 4.7,
      },
      bidCount: 4,
    },
    {
      id: "6",
      title: "Social Media Management for Small Business",
      description:
        "Looking for someone to manage Instagram and Facebook accounts for a local restaurant. Content creation and engagement required.",
      category: "Digital",
      skills: ["Social Media", "Content Creation", "Marketing"],
      location: "Enugu",
      budget: 18000,
      deadline: "2023-12-01",
      postedBy: {
        name: "Ngozi Eze",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ngozi",
        rating: 4.4,
      },
      bidCount: 9,
    },
  ];

  // Filter tasks based on search query, category, and price range
  const filteredTasks = mockTasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || task.category === selectedCategory;
    const matchesBudget =
      task.budget >= priceRange[0] && task.budget <= priceRange[1];

    return matchesSearch && matchesCategory && matchesBudget;
  });

  // Sort tasks based on selected sort option
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
    } else if (sortBy === "oldest") {
      return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
    } else if (sortBy === "highest") {
      return b.budget - a.budget;
    } else if (sortBy === "lowest") {
      return a.budget - b.budget;
    }
    return 0;
  });

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "Digital", label: "Digital" },
    { value: "Creative", label: "Creative" },
    { value: "Domestic", label: "Domestic" },
    { value: "Academic", label: "Academic" },
    { value: "Professional", label: "Professional" },
    { value: "Business", label: "Business" },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white min-h-screen p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">
            Task Marketplace
          </h1>

          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-80">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                placeholder="Search tasks..."
                className="pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={18} />
              Filters
              <ChevronDown
                size={16}
                className={`transition-transform ${isFilterOpen ? "rotate-180" : ""}`}
              />
            </Button>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="highest">Highest Budget</SelectItem>
                <SelectItem value="lowest">Lowest Budget</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {isFilterOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 p-4 rounded-lg mb-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium mb-2">Category</h3>
                <Tabs
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                  className="w-full"
                >
                  <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
                    {categories.slice(0, 4).map((category) => (
                      <TabsTrigger key={category.value} value={category.value}>
                        {category.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  <div className="mt-2">
                    <TabsList className="grid grid-cols-2 md:grid-cols-3 w-full">
                      {categories.slice(4).map((category) => (
                        <TabsTrigger
                          key={category.value}
                          value={category.value}
                        >
                          {category.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                </Tabs>
              </div>

              <div>
                <h3 className="font-medium mb-2">Budget Range</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 100000]}
                    max={100000}
                    step={1000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="my-6"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{formatCurrency(priceRange[0])}</span>
                    <span>{formatCurrency(priceRange[1])}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Location</h3>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="lagos">Lagos</SelectItem>
                    <SelectItem value="abuja">Abuja</SelectItem>
                    <SelectItem value="port-harcourt">Port Harcourt</SelectItem>
                    <SelectItem value="ibadan">Ibadan</SelectItem>
                    <SelectItem value="enugu">Enugu</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedTasks.length > 0 ? (
            sortedTasks.map((task) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{task.title}</CardTitle>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200"
                      >
                        {task.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                      <MapPin size={14} />
                      <span>{task.location}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {task.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {task.skills.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-1 text-amber-600">
                        <DollarSign size={14} />
                        <span className="font-medium">
                          {formatCurrency(task.budget)}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-blue-600">
                        <Clock size={14} />
                        <span>
                          Due {new Date(task.deadline).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </CardContent>

                  <Separator />

                  <CardFooter className="pt-4">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <img
                            src={task.postedBy.avatar}
                            alt={task.postedBy.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Posted by</p>
                          <div className="flex items-center gap-1">
                            <p className="text-sm font-medium">
                              {task.postedBy.name}
                            </p>
                            <div className="flex items-center text-amber-500">
                              <Star size={12} fill="currentColor" />
                              <span className="text-xs ml-0.5">
                                {task.postedBy.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                            onClick={() => {
                              if (!user) {
                                navigate("/login");
                              }
                            }}
                          >
                            Bid Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Submit Your Bid</DialogTitle>
                            <DialogDescription>
                              Provide your bid details for this task. Be clear
                              about your proposal and timeframe.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                              <label
                                htmlFor="bid-amount"
                                className="text-sm font-medium"
                              >
                                Bid Amount (NGN)
                              </label>
                              <Input
                                id="bid-amount"
                                type="number"
                                placeholder="Enter your bid amount"
                              />
                            </div>
                            <div className="grid gap-2">
                              <label
                                htmlFor="bid-timeframe"
                                className="text-sm font-medium"
                              >
                                Timeframe
                              </label>
                              <Input
                                id="bid-timeframe"
                                placeholder="e.g., 2 weeks, 1 month"
                              />
                            </div>
                            <div className="grid gap-2">
                              <label
                                htmlFor="bid-proposal"
                                className="text-sm font-medium"
                              >
                                Your Proposal
                              </label>
                              <Textarea
                                id="bid-proposal"
                                placeholder="Describe why you're the best fit for this task"
                                rows={5}
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button variant="outline" onClick={() => {}}>
                              Cancel
                            </Button>
                            <Button
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => {
                                alert(
                                  "Your bid has been submitted successfully!",
                                );
                                navigate(`/task/${task.id}`);
                              }}
                            >
                              Submit Bid
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <Search size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                No tasks found
              </h3>
              <p className="text-gray-500 max-w-md">
                We couldn't find any tasks matching your search criteria. Try
                adjusting your filters or search query.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskMarketplace;
