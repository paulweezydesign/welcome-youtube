import { AuthForm } from "@/components/ui/auth-form";
import { useEffect, useState } from "react";

export default function LoginPage() {
  // Using a client-side effect to set the initial mode
  // This prevents hydration errors since useState value is initially false
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      {isClient && (
        <AuthForm initialMode="login" />
      )}
    </div>
  );
} 