import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Badge } from "./ui/badge";
import { X, Briefcase } from "lucide-react";

export interface JobData {
  id?: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  description: string;
  skills: string[];
  postedDate?: Date;
}

interface JobPostingFormProps {
  onSubmit: (data: JobData) => void;
}

const JobPostingForm = ({ onSubmit }: JobPostingFormProps) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("full-time");
  const [description, setDescription] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  const handleAddSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const jobData: JobData = {
      title,
      company,
      location,
      jobType,
      description,
      skills,
      postedDate: new Date(),
    };

    onSubmit(jobData);
    resetForm();
    setOpen(false);
  };

  const resetForm = () => {
    setTitle("");
    setCompany("");
    setLocation("");
    setJobType("full-time");
    setDescription("");
    setSkillInput("");
    setSkills([]);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-orange-500 text-white">
          <Briefcase className="mr-2 h-4 w-4" />
          Post a Job Opening
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Post a Job Opening
          </DialogTitle>
          <DialogDescription>
            Fill in the details below to post a new job opening. Your job will
            be reviewed and published to the marketplace.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Job Title *</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Frontend Developer"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company Name *</Label>
              <Input
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. DEALS-NG"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Lagos, Remote"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="jobType">Job Type *</Label>
                <Select value={jobType} onValueChange={setJobType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="freelance">Freelance</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Job Description *</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the job responsibilities, requirements, and any other relevant details"
                rows={5}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Required Skills *</Label>
              <div className="flex gap-2">
                <Input
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  placeholder="Add a skill and press Enter"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddSkill();
                    }
                  }}
                  className="flex-1"
                />
                <Button
                  type="button"
                  onClick={handleAddSkill}
                  className="bg-green-600 hover:bg-orange-500"
                >
                  Add
                </Button>
              </div>

              {skills.length > 0 ? (
                <div className="flex flex-wrap gap-2 mt-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-1 px-3 py-1"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(skill)}
                        className="ml-1 rounded-full hover:bg-gray-300 p-0.5"
                      >
                        <X size={12} />
                      </button>
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500 mt-1">
                  Add at least one required skill
                </p>
              )}
            </div>
          </div>

          <DialogFooter className="pt-4">
            <Button
              variant="outline"
              type="button"
              onClick={() => setOpen(false)}
              className="hover:bg-orange-500 hover:text-white"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-green-600 hover:bg-orange-500"
              disabled={
                !title ||
                !company ||
                !location ||
                !description ||
                skills.length === 0
              }
            >
              Post Job
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JobPostingForm;
