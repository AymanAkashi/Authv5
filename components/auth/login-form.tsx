'use client'
import React from 'react'

import * as z from 'zod'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useState, useTransition } from 'react'

import { LoginSchema } from '@/schemas'

import { Input } from '../ui/input'

import {
    Form,
    FormControl,
    FormMessage,
    FormItem,
    FormField,
    FormLabel,
} from '../ui/form'

import { CardWrapper } from './card-wrapper'
import { Button } from '../ui/button'
import { FromError } from '../form-error'
import { FormSuccess } from '../form-success'
import { login } from '@/actions/login'

export const LoginFrom = () => {
    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        startTransition(() => {
            login(values).then((data) => {
                if (data.success) {
                    setSuccess(data.success)
                } else {
                    setError('Invalid fields!')
                }
            })
        })
    }

    return (
        <CardWrapper
            headerLabel="Welcome Back"
            backButtonLabel="Don't have an account?"
            backButtonLink="/auth/register"
            showSocial
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isPending}
                                            id="email"
                                            type="email"
                                            placeholder="alex.doe@example.com"
                                            {...field}
                                            className="placeholder-gray-400/30 placeholder:opacity-25"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="password">
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isPending}
                                            id="password"
                                            type="password"
                                            placeholder="********"
                                            {...field}
                                            className="placeholder-gray-400/30 placeholder:opacity-25 flex justify-center items-center"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FromError message={error} />
                        <FormSuccess message={success} />
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isPending}
                    >
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}
