"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const loginSchema = z.object({
    email : z.email("Please enter your email"),
    password : z.string().min(1, "Please enter your password")
    ,
})

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
    const router = useRouter();

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async(value: LoginFormValues) => {
        console.log(value);
    }

    const isPending = form.formState.isSubmitting;

    return(
        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle>
                        Welcome back
                    </CardTitle>
                    <CardDescription>
                        Login to continue
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="grid gap-6">
                                <div className="flex flex-col gap-4">
                                    <Button 
                                         variant="outline" 
                                         className="w-full"
                                         type="button"
                                         disabled={isPending}
                                    >
                                        Continue with Github
                                    </Button>
                                    <Button 
                                         variant="outline" 
                                         className="w-full"
                                         type="button"
                                         disabled={isPending}
                                    >
                                        Continue with Google
                                    </Button>
                                </div>
                                <div className="grid gap-6">
                                    <FormField 
                                        control = {form.control}
                                        name = "email"
                                        render = {({ field }) =>(
                                            <FormItem>
                                                <FormLabel> Email</FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        type = "email"
                                                        placeholder="Enter your email"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField 
                                        control = {form.control}
                                        name = "password"
                                        render = {({ field }) =>(
                                            <FormItem>
                                                <FormLabel> Password</FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        type = "email"
                                                        placeholder="Enter your Password"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" className="w-full" disabled={isPending}>
                                        Login
                                    </Button>
                                </div>
                                <div className="text-center text-sm">
                                    Don't have an account? {" "}
                                    <Link href="/signup" className="underline underline-offset-4">
                                        Sign Up
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}