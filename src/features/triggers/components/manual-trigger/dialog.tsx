"use client";

import { Dialog, DialogHeader, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import z from "zod";

const formSchema = z.object({
    endpoint: z.url({ message: "Please enter a valid URL"}),
    method: z.enum(["GET","POST","PUT","PATCH","DELETE"]),
    body: z.string().optional()//.refine()
})

interface Props{
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSubmit?: (values: z.infer<typeof formSchema>) => void;
    defaultEndpoint?: string;
    defaultMethod?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    defaultBody?: string;
};

export const ManualTriggerDialog = ({
    open,
    onOpenChange,
}: Props) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Manual Trigger</DialogTitle>
                    <DialogDescription>
                        Configure settings for manual trigger node.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <p className="text-sm text-muted-foreground">Use to manually execute a workflow, no configuration available</p>
                </div>
            </DialogContent>
        </Dialog>
    )
}