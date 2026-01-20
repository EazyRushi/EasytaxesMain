import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type InsertContactInquiry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const res = await apiRequest(
        api.contact.submit.method,
        api.contact.submit.path,
        data
      );
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent",
        description: "We've received your inquiry and will be in touch shortly.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
