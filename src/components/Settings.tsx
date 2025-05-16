import React, { useState } from "react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Bell, Moon, Sun, Wifi, WifiOff } from "lucide-react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [onlineMode, setOnlineMode] = useState(true);

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <div className="bg-white rounded-lg border p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">General Settings</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      {onlineMode ? (
                        <Wifi className="text-green-500" />
                      ) : (
                        <WifiOff className="text-red-500" />
                      )}
                      <h3 className="font-medium">Online Mode</h3>
                    </div>
                    <p className="text-sm text-gray-500">
                      When disabled, you'll work in offline mode with limited
                      functionality
                    </p>
                  </div>
                  <Switch
                    checked={onlineMode}
                    onCheckedChange={setOnlineMode}
                  />
                </div>

                <div className="pt-4">
                  <Button variant="outline" className="mr-2">
                    Reset All Settings
                  </Button>
                  <Button>Save Changes</Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <div className="bg-white rounded-lg border p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Notification Settings
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <Bell
                        className={
                          notifications ? "text-green-500" : "text-gray-400"
                        }
                      />
                      <h3 className="font-medium">Push Notifications</h3>
                    </div>
                    <p className="text-sm text-gray-500">
                      Receive notifications about new tasks, bids, and messages
                    </p>
                  </div>
                  <Switch
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-gray-500">
                      Receive email updates about your account activity
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="pt-4">
                  <Button>Save Notification Preferences</Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="appearance" className="space-y-6">
            <div className="bg-white rounded-lg border p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Appearance Settings
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      {darkMode ? (
                        <Moon className="text-purple-500" />
                      ) : (
                        <Sun className="text-yellow-500" />
                      )}
                      <h3 className="font-medium">Dark Mode</h3>
                    </div>
                    <p className="text-sm text-gray-500">
                      Switch between light and dark theme
                    </p>
                  </div>
                  <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                </div>

                <div className="pt-4">
                  <Button>Apply Theme</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
