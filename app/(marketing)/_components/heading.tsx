"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { SignInButton, useAuth } from "@clerk/clerk-react"; 
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  const { isSignedIn, isLoaded } = useAuth(); 

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to {" "}
        <span className="underline">NoteUs</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        NoteUs is a connected workspace where <br />
        better, faster, work happens.
      </h3>
      
      {!isLoaded && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg"/>
        </div>
      )}
      
      {isSignedIn && isLoaded && (
        <Button asChild>
          <Link href="/documents">
            Enter NoteUs
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      
      {!isSignedIn && isLoaded && (
        <SignInButton mode="modal">
          <Button>
            Get NoteUs Free
            <ArrowRight className="h-4 w-4 ml-2"/>
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
