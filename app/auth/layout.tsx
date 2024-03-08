import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-default grid place-content-center">
            {children}
        </div>
    )
}

export default AuthLayout
