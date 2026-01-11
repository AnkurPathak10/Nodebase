import { NodeType } from "@/generated/prisma/enums";
import { NodeExecutor } from "../types";
import { manualTriggerExecutor } from "@/features/triggers/components/manual-trigger/executor";
import { httpRequestExecutor } from "../components/http-requests/executor";
import { googleFormTriggerExecutor } from "@/features/triggers/components/google-form-trigger/executor";

export const executorRegistry: Record<NodeType, NodeExecutor> = {
    [NodeType.MANUAL_TRIGGER]: manualTriggerExecutor,
    [NodeType.INITIAL]: manualTriggerExecutor, //it will never happen , just added to solve type errors
    [NodeType.HTTP_REQUEST]: httpRequestExecutor,
    [NodeType.GOOGLE_FORM_TRIGGER]: googleFormTriggerExecutor,
    
};

export const getExecutor = (type: NodeType): NodeExecutor => {
    const executor = executorRegistry[type];
    if(!executor){
        throw new Error(`No executor found for the node type: ${type}`);
    }

    return executor;
};