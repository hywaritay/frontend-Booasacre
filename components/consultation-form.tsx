"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Checkbox } from "./ui/checkbox"
import { Calendar, CheckCircle2 } from "lucide-react"

export function ConsultationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      ;(e.target as HTMLFormElement).reset()
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <Card className="glass border-border/50">
        <CardContent className="p-12 text-center">
          <div className="inline-flex p-4 rounded-full bg-green-500/10 mb-4">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Consultation Request Received!</h3>
          <p className="text-muted-foreground">
            Our team will review your request and contact you within 24 hours to schedule your consultation.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="glass border-border/50">
      <CardHeader>
        <CardTitle className="text-2xl">Request a Consultation</CardTitle>
        <CardDescription>
          Tell us about your organization's needs and challenges, and we'll design a tailored solution.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="consultFirstName">First Name *</Label>
              <Input id="consultFirstName" name="firstName" required className="glass bg-transparent" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="consultLastName">Last Name *</Label>
              <Input id="consultLastName" name="lastName" required className="glass bg-transparent" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="consultEmail">Email Address *</Label>
            <Input id="consultEmail" name="email" type="email" required className="glass bg-transparent" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="consultPhone">Phone Number *</Label>
            <Input id="consultPhone" name="phone" type="tel" required className="glass bg-transparent" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="consultCompany">Company / Organization *</Label>
            <Input id="consultCompany" name="company" required className="glass bg-transparent" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="industry">Industry</Label>
            <Select name="industry">
              <SelectTrigger className="glass bg-transparent">
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Services Interested In *</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "IT Strategy Consulting",
                "Cloud Solutions",
                "Cybersecurity Services",
                "Data Analytics",
                "Software Development",
                "Digital Transformation",
                "Mobile App Development",
                "AI & Machine Learning",
              ].map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox id={service.toLowerCase().replace(/\s+/g, "-")} name="services" value={service} />
                  <Label
                    htmlFor={service.toLowerCase().replace(/\s+/g, "-")}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {service}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Estimated Budget</Label>
            <Select name="budget">
              <SelectTrigger className="glass bg-transparent">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-50k">Under $50,000</SelectItem>
                <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                <SelectItem value="over-500k">Over $500,000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Project Timeline</Label>
            <Select name="timeline">
              <SelectTrigger className="glass bg-transparent">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">Immediate (1-3 months)</SelectItem>
                <SelectItem value="short">Short-term (3-6 months)</SelectItem>
                <SelectItem value="medium">Medium-term (6-12 months)</SelectItem>
                <SelectItem value="long">Long-term (12+ months)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="consultMessage">Project Description & Challenges *</Label>
            <Textarea
              id="consultMessage"
              name="message"
              required
              rows={6}
              className="glass bg-transparent resize-none"
              placeholder="Describe your organization's needs, current challenges, or maintenance requirements..."
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isLoading}
            className="w-full bg-foreground text-background hover:bg-foreground/90"
          >
            {isLoading ? (
              "Submitting..."
            ) : (
              <>
                Request Consultation
                <Calendar className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
