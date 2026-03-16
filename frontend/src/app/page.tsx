import Dashboard from '@/components/Dashboard'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">
            Smart Money Tracker
          </h1>
          <p className="text-gray-400">
            Built with Nansen CLI • Track whale movements across chains
          </p>
        </header>
        
        <Dashboard />
      </div>
    </main>
  )
}