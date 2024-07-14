import React from 'react';

function NotFoundPage() {
  return (
    <div className="not-found-container flex min-h-screen items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 py-16">
      <div className="container mx-auto text-center">
        <div className="not-found-character">
          {/* Add your custom illustration or animation here */}
        </div>
        <h1 className="text-9xl font-extrabold text-white">Oops! Lost in the cosmos?</h1>
        <p className="text-2xl text-white mt-8">
          {`We couldn't find the page you were looking for. Maybe you mistyped the URL or it doesn't exist anymore.`}
        </p>
    
      </div>
    </div>
  );
}

export default NotFoundPage;
