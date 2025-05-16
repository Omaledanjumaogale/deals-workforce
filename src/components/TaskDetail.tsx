import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Calendar,
  Clock,
  MapPin,
  Tag,
  Users,
  MessageSquare,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";

interface Bid {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  amount: number;
  proposal: string;
  timeframe: string;
  status: "pending" | "accepted" | "rejected";
  createdAt: string;
}

interface TaskDetailProps {
  taskId?: string;
  title?: string;
  description?: string;
  budget?: number;
  location?: string;
  category?: string;
  skills?: string[];
  timeline?: {
    startDate: string;
    endDate: string;
  };
  client?: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
  };
  status?: "open" | "in-progress" | "completed";
  bids?: Bid[];
  isOwner?: boolean;
}

const TaskDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();

  // In a real app, you would fetch task details based on the ID
  // For now, we'll use mock data
  const taskId = "task-123";
  const title = "Website Development for E-commerce Platform";
  const description =
    "Looking for an experienced web developer to build a responsive e-commerce website with product catalog, shopping cart, and payment integration. The site should be mobile-friendly and have an admin dashboard for inventory management.";
  const budget = 50000;
  const location = "Lagos, Nigeria";
  const category = "Digital";
  const skills = ["React", "Node.js", "MongoDB", "Payment Integration"];
  const timeline = {
    startDate: "2023-07-15",
    endDate: "2023-08-15",
  };
  const client = {
    id: "client-123",
    name: "John Adebayo",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    rating: 4.8,
  };
  const status = "open";
  const bids = [
    {
      id: "bid-1",
      userId: "user-1",
      userName: "Sarah Okafor",
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      amount: 45000,
      proposal:
        "I have 5 years of experience building e-commerce websites with React and Node.js. I can deliver a fully functional website within the timeline.",
      timeframe: "4 weeks",
      status: "pending",
      createdAt: "2023-07-10T10:30:00Z",
    },
    {
      id: "bid-2",
      userId: "user-2",
      userName: "Michael Eze",
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      amount: 52000,
      proposal:
        "I specialize in e-commerce development with a focus on security and performance. I can complete this project in 3 weeks with all requirements met.",
      timeframe: "3 weeks",
      status: "pending",
      createdAt: "2023-07-11T14:15:00Z",
    },
  ];
  const isOwner = false;

  const [bidAmount, setBidAmount] = useState<string>("");
  const [bidProposal, setBidProposal] = useState<string>("");
  const [bidTimeframe, setBidTimeframe] = useState<string>("");
  const [showBidDialog, setShowBidDialog] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("details");

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-NG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleSubmitBid = () => {
    // Handle bid submission logic here
    console.log({ bidAmount, bidProposal, bidTimeframe });
    setShowBidDialog(false);

    // Show success message or redirect to messaging interface
    alert(
      "Your bid has been submitted successfully! You will be notified if the client accepts your bid.",
    );
  };

  const handleAcceptBid = (bidId: string) => {
    // Handle accepting bid logic here
    console.log(`Accepting bid ${bidId}`);

    // Redirect to messaging interface
    navigate(`/messages/${taskId}/${bidId}`);
  };

  const handleRejectBid = (bidId: string) => {
    // Handle rejecting bid logic here
    console.log(`Rejecting bid ${bidId}`);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-sm ${i <= rating ? "text-yellow-500" : "text-gray-300"}`}
        >
          ★
        </span>,
      );
    }
    return stars;
  };

  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return <Badge className="bg-green-500">Open for Bids</Badge>;
      case "in-progress":
        return <Badge className="bg-blue-500">In Progress</Badge>;
      case "completed":
        return <Badge className="bg-purple-500">Completed</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const renderBidStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge
            variant="outline"
            className="text-yellow-600 border-yellow-600"
          >
            Pending
          </Badge>
        );
      case "accepted":
        return (
          <Badge variant="outline" className="text-green-600 border-green-600">
            Accepted
          </Badge>
        );
      case "rejected":
        return (
          <Badge variant="outline" className="text-red-600 border-red-600">
            Rejected
          </Badge>
        );
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <div className="flex items-center gap-2 mt-2">
            {renderStatusBadge(status)}
            <Badge variant="outline" className="flex items-center gap-1">
              <Tag className="h-3 w-3" /> {category}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {location}
            </Badge>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-green-600">
            {formatCurrency(budget)}
          </p>
          <p className="text-sm text-gray-500">Budget</p>
        </div>
      </div>

      <Tabs
        defaultValue="details"
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">Task Details</TabsTrigger>
          <TabsTrigger value="bids">Bids ({bids.length})</TabsTrigger>
          <TabsTrigger value="client">Client Info</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Task Description</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {formatDate(timeline.startDate)} -{" "}
                  {formatDate(timeline.endDate)}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 whitespace-pre-line">{description}</p>

              <div className="mt-6">
                <h3 className="font-medium text-gray-900 mb-2">
                  Required Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              {!isOwner && status === "open" && (
                <Dialog open={showBidDialog} onOpenChange={setShowBidDialog}>
                  <DialogTrigger asChild>
                    <Button className="bg-green-600 hover:bg-green-700">
                      Place Bid
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Submit Your Bid</DialogTitle>
                      <DialogDescription>
                        Provide your bid details for this task. Be clear about
                        your proposal and timeframe.
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
                          value={bidAmount}
                          onChange={(e) => setBidAmount(e.target.value)}
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
                          value={bidTimeframe}
                          onChange={(e) => setBidTimeframe(e.target.value)}
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
                          value={bidProposal}
                          onChange={(e) => setBidProposal(e.target.value)}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setShowBidDialog(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="bg-green-600 hover:bg-green-700"
                        onClick={handleSubmitBid}
                      >
                        Submit Bid
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              )}
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="bids" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Submitted Bids</CardTitle>
              <CardDescription>
                {bids.length} bids received for this task
              </CardDescription>
            </CardHeader>
            <CardContent>
              {bids.length > 0 ? (
                <div className="space-y-6">
                  {bids.map((bid) => (
                    <div key={bid.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage
                              src={bid.userAvatar}
                              alt={bid.userName}
                            />
                            <AvatarFallback>
                              {bid.userName.substring(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-medium">{bid.userName}</h3>
                            <p className="text-sm text-gray-500">
                              {new Date(bid.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-600">
                            {formatCurrency(bid.amount)}
                          </p>
                          <p className="text-sm text-gray-500">
                            {bid.timeframe}
                          </p>
                          {renderBidStatusBadge(bid.status)}
                        </div>
                      </div>
                      <p className="mt-3 text-gray-700">{bid.proposal}</p>

                      {isOwner && bid.status === "pending" && (
                        <div className="mt-4 flex justify-end gap-2">
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="outline"
                                className="text-red-600 border-red-600 hover:bg-red-50"
                              >
                                <XCircle className="h-4 w-4 mr-1" /> Reject
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Reject this bid?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to reject this bid from{" "}
                                  {bid.userName}? This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  className="bg-red-600 hover:bg-red-700"
                                  onClick={() => handleRejectBid(bid.id)}
                                >
                                  Reject Bid
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>

                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button className="bg-green-600 hover:bg-green-700">
                                <CheckCircle className="h-4 w-4 mr-1" /> Accept
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Accept this bid?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to accept this bid from{" "}
                                  {bid.userName} for{" "}
                                  {formatCurrency(bid.amount)}? This will close
                                  the task for other bidders.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  className="bg-green-600 hover:bg-green-700"
                                  onClick={() => handleAcceptBid(bid.id)}
                                >
                                  Accept Bid
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                  <h3 className="text-lg font-medium text-gray-900">
                    No bids yet
                  </h3>
                  <p className="text-gray-500 mt-1">
                    Be the first to bid on this task!
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="client" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Client Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={client.avatar} alt={client.name} />
                  <AvatarFallback>{client.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-medium">{client.name}</h3>
                  <div className="flex items-center mt-1">
                    {renderStars(client.rating)}
                    <span className="ml-2 text-sm text-gray-500">
                      {client.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
              >
                <MessageSquare className="h-4 w-4" /> Contact Client
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TaskDetail;
