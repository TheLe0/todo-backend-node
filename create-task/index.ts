import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { createTask } from "../src/useCases";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    if (req.body == undefined || req.body.name == undefined) {
        context.res = {
            status: 400,
            body: "Invalid request body!"
        };
        return;
    }

    context.res = {
        status: 202,
        body: createTask(req.body.name)
    };

};

export default httpTrigger;