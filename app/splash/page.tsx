export default function Splash() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-white">
        <Image src="/images/logo.png" width={150} height={150} alt="Logo" />
        <h1 className="text-3xl font-bold mt-4">Welcome to DawgDonate</h1>
        <p className="text-gray-600 mt-2">Donate and find free items at UGA!</p>
        <div className="mt-6 flex gap-4">
          <Link href="/login"><button className="btn">Login</button></Link>
          <Link href="/signup"><button className="btn">Sign Up</button></Link>
        </div>
      </main>
    );
  }