import { FaExclamationTriangle } from 'react-icons/fa'

interface FormErrorProps {
    message?: string
}

export const FromError = ({
    message = 'Something went wrong',
}: FormErrorProps) => {
    if (!message) {
        return null
    }
    return (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
            <FaExclamationTriangle className="size-4" />
            <span>{message}</span>
        </div>
    )
}
