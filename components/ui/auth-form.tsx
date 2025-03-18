import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, Mail } from "lucide-react";

interface AuthFormProps {
  initialMode?: 'login' | 'signup';
}

export function AuthForm({ initialMode = 'signup' }: AuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(initialMode === 'login');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          {isLoginMode ? "Log in" : "Sign up"}
        </CardTitle>
        <CardDescription className="text-center">
          {isLoginMode 
            ? "Enter your credentials to access your account" 
            : "Create an account to get started"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLoginMode && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" placeholder="John" required={!isLoginMode} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" placeholder="Doe" required={!isLoginMode} />
              </div>
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" required />
          </div>
          {isLoginMode && (
            <div className="flex items-center justify-end">
              <a href="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </a>
            </div>
          )}
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading 
              ? (isLoginMode ? "Logging in..." : "Signing up...") 
              : (isLoginMode ? "Log in" : "Sign up")}
          </Button>
        </form>

        <div className="flex items-center gap-2 my-4">
          <div className="h-px flex-1 bg-border"></div>
          <span className="text-xs text-muted-foreground">OR CONTINUE WITH</span>
          <div className="h-px flex-1 bg-border"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" type="button" className="flex items-center gap-2">
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </Button>
          <Button variant="outline" type="button" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>Google</span>
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-center gap-2">
        {!isLoginMode && (
          <p className="text-xs text-muted-foreground text-center">
            By signing up, you agree to our <a href="#" className="underline hover:text-primary">Terms of Service</a> and <a href="#" className="underline hover:text-primary">Privacy Policy</a>.
          </p>
        )}
        <p className="text-sm">
          {isLoginMode ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={toggleMode} 
            className="text-primary underline hover:text-primary/80 bg-transparent border-0 p-0 cursor-pointer font-normal"
            type="button"
          >
            {isLoginMode ? "Sign up" : "Log in"}
          </button>
        </p>
      </CardFooter>
    </Card>
  );
} 