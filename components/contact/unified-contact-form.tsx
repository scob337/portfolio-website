"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UnifiedContactFormProps {
  title?: string;
  description?: string;
  showCard?: boolean;
  className?: string;
}

export function UnifiedContactForm({
  title = "تواصل معي",
  description = "أرسل لي رسالة وسأرد عليك في أقرب وقت ممكن",
  showCard = true,
  className = ""
}: UnifiedContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        toast({
          title: "تم إرسال الرسالة بنجاح!",
          description: "شكراً لتواصلك معي. سأرد عليك في أقرب وقت ممكن.",
        });
      } else {
        throw new Error("فشل في إرسال الرسالة");
      }
    } catch (error) {
      setSubmitStatus("error");
      toast({
        title: "خطأ في إرسال الرسالة",
        description: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const FormContent = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
          <User className="w-4 h-4" />
          الاسم الكامل
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="أدخل اسمك الكامل"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full"
          dir="rtl"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
          <Mail className="w-4 h-4" />
          البريد الإلكتروني
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full"
          dir="ltr"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          الرسالة
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="اكتب رسالتك هنا..."
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={5}
          className="w-full resize-none"
          dir="rtl"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            جاري الإرسال...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            إرسال الرسالة
          </>
        )}
      </Button>

      {submitStatus === "success" && (
        <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
          <CheckCircle className="w-5 h-5" />
          <span>تم إرسال الرسالة بنجاح!</span>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
          <AlertCircle className="w-5 h-5" />
          <span>حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.</span>
        </div>
      )}
    </form>
  );

  if (showCard) {
    return (
      <Card className={`w-full max-w-2xl mx-auto ${className}`}>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">{title}</CardTitle>
          <CardDescription className="text-gray-600">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <FormContent />
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <FormContent />
    </div>
  );
}

export default UnifiedContactForm;