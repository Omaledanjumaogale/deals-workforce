import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Camera, Upload } from "lucide-react";

interface AuthFormsProps {
  onLogin?: (email: string, password: string) => void;
  onRegister?: (userData: any) => void;
  defaultTab?: "login" | "register";
}

interface UserData {
  name: string;
  email: string;
  phone: string;
  password: string;
  location: string;
  nationalId: string;
  skills: string[];
  subscriptionTier: string;
  profileImage: string | null;
  accountType?: "full" | "guest";
}

import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthForms = ({
  onLogin,
  onRegister,
  defaultTab = "login",
}: AuthFormsProps) => {
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>(defaultTab);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Login form state
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");

  // Registration form state
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [nationalId, setNationalId] = useState<string>("");
  const [subscriptionTier, setSubscriptionTier] = useState<string>("basic");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [accountType, setAccountType] = useState<"full" | "guest">("full");
  const [institution, setInstitution] = useState<string>("");
  const [courseOfStudy, setCourseOfStudy] = useState<string>("");
  const [highestQualification, setHighestQualification] = useState<string>("");
  const [otherSkills, setOtherSkills] = useState<string>("");
  const [selectedSkillsToLearn, setSelectedSkillsToLearn] = useState<string[]>(
    [],
  );
  const [otherSkillsToLearn, setOtherSkillsToLearn] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await signIn(loginEmail, loginPassword);
      if (error) {
        alert(`Login failed: ${error.message}`);
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userData: UserData = {
        name,
        email,
        phone,
        password,
        location,
        nationalId,
        skills: selectedSkills,
        subscriptionTier,
        profileImage,
        accountType,
      };

      const { error } = await signUp(email, password, userData);

      if (error) {
        alert(`Registration failed: ${error.message}`);
      } else {
        // If guest account, show limitations message
        if (accountType === "guest") {
          alert(
            "You've registered as a guest user. You can only post tasks but cannot access other platform features. Upgrade anytime to access all features.",
          );
          navigate("/post-task");
        } else {
          alert(
            "Registration successful! Please check your email to verify your account.",
          );
          navigate("/dashboard");
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("An error occurred during registration");
    }
  };

  const handleProfileImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill],
    );
  };

  const handleOtherSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherSkills(e.target.value);
  };

  const handleSkillToLearnToggle = (skill: string) => {
    setSelectedSkillsToLearn((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill],
    );
  };

  const handleOtherSkillsToLearnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setOtherSkillsToLearn(e.target.value);
  };

  const skills = [
    "Web Development",
    "Graphic Design",
    "Content Writing",
    "Digital Marketing",
    "Data Entry",
    "Virtual Assistant",
    "Tutoring",
    "Translation",
    "Accounting",
    "Legal Services",
    "Domestic Services",
    "Delivery",
  ];

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login to DEALS-NG</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Button variant="link" className="p-0 h-auto text-xs">
                      Forgot password?
                    </Button>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Create an Account</CardTitle>
              <CardDescription>
                Join DEALS-NG to start posting or bidding on tasks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRegister} className="space-y-4">
                {/* Profile Picture Upload */}
                <div className="flex flex-col items-center space-y-2 mb-4">
                  <Label>Profile Picture</Label>
                  <div className="relative">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={profileImage || ""} />
                      <AvatarFallback className="bg-muted">
                        {name ? name.charAt(0).toUpperCase() : "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-0 right-0 flex space-x-1">
                      <label
                        htmlFor="camera-upload"
                        className="cursor-pointer bg-primary text-primary-foreground p-1 rounded-full"
                      >
                        <Camera size={16} />
                        <input
                          id="camera-upload"
                          type="file"
                          accept="image/*"
                          capture="environment"
                          className="hidden"
                          onChange={handleProfileImageUpload}
                        />
                      </label>
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer bg-primary text-primary-foreground p-1 rounded-full"
                      >
                        <Upload size={16} />
                        <input
                          id="file-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleProfileImageUpload}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Education Information */}
                <div className="space-y-4 border-t pt-4 mt-4">
                  <h3 className="font-medium">Education Information</h3>

                  <div className="space-y-2">
                    <Label htmlFor="institution">
                      Name of Institution Attended
                    </Label>
                    <Input
                      id="institution"
                      placeholder="Enter your institution name"
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course-of-study">Course of Study</Label>
                    <Input
                      id="course-of-study"
                      placeholder="Your course or field of study"
                      value={courseOfStudy}
                      onChange={(e) => setCourseOfStudy(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="highest-qualification">
                      Highest Academic Qualification
                    </Label>
                    <Select
                      value={highestQualification}
                      onValueChange={setHighestQualification}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your highest qualification" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="primary">Primary School</SelectItem>
                        <SelectItem value="secondary">
                          Secondary School
                        </SelectItem>
                        <SelectItem value="ond">OND</SelectItem>
                        <SelectItem value="hnd">HND</SelectItem>
                        <SelectItem value="bachelors">
                          Bachelor's Degree
                        </SelectItem>
                        <SelectItem value="masters">Master's Degree</SelectItem>
                        <SelectItem value="doctorate">Doctorate</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+234 800 000 0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reg-email">Email</Label>
                  <Input
                    id="reg-email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="reg-password">Password</Label>
                    <Input
                      id="reg-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="City, State"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="national-id"
                    className="flex items-center gap-1"
                  >
                    National ID/BVN
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
                      className="text-amber-500"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="M12 8v4" />
                      <path d="M12 16h.01" />
                    </svg>
                  </Label>
                  <Input
                    id="national-id"
                    type="text"
                    placeholder="Enter your NIN or BVN"
                    value={nationalId}
                    onChange={(e) => setNationalId(e.target.value)}
                    required
                    className="font-mono"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Your ID is securely encrypted and used for verification
                    purposes only.
                  </p>
                </div>

                {/* Skills Selection */}
                <div className="space-y-2 border-t pt-4 mt-4">
                  <h3 className="font-medium">Skills & Expertise</h3>
                  <Label>Skills/Expertise (Select all that apply)</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {skills.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={`skill-${skill}`}
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={() => handleSkillToggle(skill)}
                        />
                        <Label htmlFor={`skill-${skill}`} className="text-sm">
                          {skill}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {selectedSkills.includes("Others") && (
                    <div className="mt-2">
                      <Label htmlFor="other-skills">
                        Please specify other skills (comma separated)
                      </Label>
                      <Input
                        id="other-skills"
                        placeholder="UI/UX Design, Project Management, etc."
                        value={otherSkills}
                        onChange={handleOtherSkillsChange}
                      />
                    </div>
                  )}
                </div>

                {/* Skills to Learn */}
                <div className="space-y-2 border-t pt-4 mt-4">
                  <Label>Skills I will be interested in learning</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {skills.map((skill) => (
                      <div
                        key={`learn-${skill}`}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`learn-skill-${skill}`}
                          checked={selectedSkillsToLearn.includes(skill)}
                          onCheckedChange={() =>
                            handleSkillToLearnToggle(skill)
                          }
                        />
                        <Label
                          htmlFor={`learn-skill-${skill}`}
                          className="text-sm"
                        >
                          {skill}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {selectedSkillsToLearn.includes("Others") && (
                    <div className="mt-2">
                      <Label htmlFor="other-skills-to-learn">
                        Please specify other skills you want to learn (comma
                        separated)
                      </Label>
                      <Input
                        id="other-skills-to-learn"
                        placeholder="UI/UX Design, Project Management, etc."
                        value={otherSkillsToLearn}
                        onChange={handleOtherSkillsToLearnChange}
                      />
                    </div>
                  )}
                </div>

                {/* Subscription Tier */}
                <div className="space-y-2">
                  <Label>Account Type</Label>
                  <RadioGroup
                    value={accountType}
                    onValueChange={setAccountType as any}
                    className="flex flex-col space-y-2 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="full" id="full" />
                      <Label htmlFor="full">
                        Full Account (Access all features)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="guest" id="guest" />
                      <Label htmlFor="guest">
                        Guest Account (Post tasks only)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {accountType === "full" && (
                  <div className="space-y-2">
                    <Label>Subscription Tier</Label>
                    <RadioGroup
                      value={subscriptionTier}
                      onValueChange={setSubscriptionTier}
                      className="flex flex-col space-y-2 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="basic" id="basic" />
                        <Label htmlFor="basic">
                          Basic Membership (1,000 naira/year)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="executive" id="executive" />
                        <Label htmlFor="executive">
                          Executive Membership (5,000 naira/year)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                )}

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the Terms of Service and Privacy Policy
                  </Label>
                </div>

                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthForms;
