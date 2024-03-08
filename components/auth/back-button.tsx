'use client'

import { Button } from '../ui/button'
import Link from 'next/link'

interface BackButtonProps {
    label: string
    link: string
}

export const BackButton = ({ label, link }: BackButtonProps) => {
    return (
        <Button
            variant={'link'}
            className="font-normal w-full"
            size={'sm'}
            asChild
        >
            <Link href={link}>{label}</Link>
        </Button>
    )
}
