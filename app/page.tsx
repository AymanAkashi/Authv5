import { Button } from '@/components/ui/button'
import React from 'react'

const HomePage = () => {
    return (
        <main className="min-h-screen w-full bg-gradient-to-tr from-purple-700  via-blue-600 to-sky-500 flex justify-center items-center">
            <div className="space-y-6 text-white text-center">
                <h1 className="text-6xl font-semibold">
                    🔒Auth
                    <p className="inline text-lg">v5</p>
                </h1>
                <p className="text-lg max-w-72">
                    Authv5 is a simple authentication app built with Next.js.
                </p>
                <Button variant={'secondary'} size={'lg'}>
                    Sign up
                </Button>
            </div>
        </main>
    )
}

export default HomePage
