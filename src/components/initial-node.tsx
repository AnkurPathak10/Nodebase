"use client";

import type { NodeProps } from "@xyflow/react";
import { memo } from "react";
import { PlaceholderNode } from "./react-flow/placeholder-node";
import { PlusIcon } from "lucide-react";
import { WorkflowNode } from "./workflow-node";

export const InitialNode = memo((props: NodeProps) => {
    return (
        <WorkflowNode showToolBar={false}>
            <PlaceholderNode
                {...props}
                onClick={() => {}}
            >
                <div className="cursor-pointer flex items-center justify-center">
                    <PlusIcon/>
                </div>
            </PlaceholderNode>
        </WorkflowNode>
    )
})