'use server'

import * as z from 'zod'

import { LoginSchema } from '@/schemas'
import { signIn } from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'
import { error } from 'console'

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values)

    if (!validatedFields.success) {
        throw new Error('Invalid fields!')
    }

    const { email, password } = validatedFields.data

    try {
        await signIn('credentials', {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.message) {
                case 'CredentialsSignin':
                    return { error: 'Invalid credentials!' }
                default:
                    return { error: 'An error occurred' }
            }
        }
        throw error
    }
}
