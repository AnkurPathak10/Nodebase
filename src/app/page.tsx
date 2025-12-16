"use client"
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";



const Page = () => {
  const trpc = useTRPC()
  const {data} = useQuery(trpc.getWorkflows.queryOptions());

  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      toast.success("Job Queued");
    }
  }));

  const testAi = useMutation(trpc.testAi.mutationOptions({
    onSuccess: () => {
      toast.success("AI Job Queued");
    }
  }));

  return (
    <div className='min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6'>
      Protected server component
      <div>
        {JSON.stringify(data)}
      </div>
      <Button disabled={testAi.isPending} onClick={() => testAi.mutate()}>
        Test AI
      </Button>
      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        Create workflow
      </Button>
    </div>

  )
}

export default Page;