
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Alex Smith Portfolio";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      <div className="text-center max-w-md animate-fade-in">
        <div className="relative">
          <h1 className="text-9xl font-display font-bold text-primary/10">404</h1>
          <h2 className="text-3xl font-display font-bold absolute inset-0 flex items-center justify-center">
            Page Not Found
          </h2>
        </div>
        
        <p className="text-muted-foreground mb-8 mt-4">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
