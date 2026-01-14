import type { NodeExecutor } from "@/features/executions/types";
import { stripeTriggerChannel } from "@/inngest/channels/stripe-trigger";

type StripeTriggerData = Record<string , unknown>;

export const stripeTriggerExecutor: NodeExecutor<StripeTriggerData> = async({
    nodeId,
    context,
    step,
    publish,
}) => {
    //Publish loading state for stripe trigger
    await publish(
        stripeTriggerChannel().status({
            nodeId,
            status: "loading",
        }),
    );
    

    const result  = await step.run("stripe-trigger", async() => context);

    await publish(
        stripeTriggerChannel().status({
            nodeId,
            status: "success",
        }),
    );

    //Publish success state forstripe trigger

    return result;
};