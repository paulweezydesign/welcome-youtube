import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <Head>
        <title>Welcome YouTube</title>
        <meta name="description" content="Welcome to YouTube Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-6">
          Welcome to YouTube Clone
        </h1>
        
        <p className="text-xl mb-8">
          This project demonstrates a simple YouTube-inspired interface with a modern signup form.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup" 
            className="px-6 py-3 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors">
            Go to Sign Up
          </Link>
          
          <a 
            href="https://github.com/paulweezydesign/welcome-youtube"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </main>

      <footer className="w-full p-4 border-t border-gray-200 mt-8 text-center text-gray-500">
        <p>Created with Next.js and Tailwind CSS</p>
      </footer>
    </div>
  );
}