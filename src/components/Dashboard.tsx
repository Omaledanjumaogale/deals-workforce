import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Welcome to DEALS-NG Dashboard</h1>
        <Button
          variant="outline"
          onClick={async () => {
            await signOut();
            navigate("/");
          }}
        >
          Sign Out
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Active Tasks</CardTitle>
            <CardDescription>Tasks you've posted or bid on</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">5</p>
            <Button
              variant="outline"
              className="mt-4 w-full"
              onClick={() => navigate("/marketplace")}
            >
              View All
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Wallet Balance</CardTitle>
            <CardDescription>Your current balance</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">₦15,000</p>
            <Button
              variant="outline"
              className="mt-4 w-full"
              onClick={() => alert("Wallet funding feature coming soon!")}
            >
              Fund Wallet
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Messages</CardTitle>
            <CardDescription>Unread messages</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">3</p>
            <Button
              variant="outline"
              className="mt-4 w-full"
              onClick={() => navigate("/messages")}
            >
              Open Inbox
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="my-tasks" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="my-tasks">My Tasks</TabsTrigger>
          <TabsTrigger value="my-bids">My Bids</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="my-tasks" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Tasks You've Posted</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((task) => (
                  <div key={task} className="p-4 border rounded-lg bg-white">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">
                        Website Development Task #{task}
                      </h3>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        5 bids
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mt-2">
                      Posted 3 days ago
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <p className="font-medium">₦25,000</p>
                      <Button
                        size="sm"
                        onClick={() => navigate(`/task/${task}`)}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="my-bids" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Tasks You've Bid On</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2].map((task) => (
                  <div key={task} className="p-4 border rounded-lg bg-white">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Logo Design Task #{task}</h3>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                        Pending
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mt-2">
                      Bid placed 2 days ago
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <p className="font-medium">Your bid: ₦15,000</p>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => navigate(`/task/${task}`)}
                      >
                        View Task
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="completed" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Completed Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1].map((task) => (
                  <div key={task} className="p-4 border rounded-lg bg-white">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Content Writing #{task}</h3>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        Completed
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mt-2">
                      Completed 1 week ago
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <p className="font-medium">Earned: ₦12,000</p>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => navigate(`/task/${task}`)}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
