import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    context.res = {
        status: 202,
        body: "Endpoint to create a new task"
    };

};

export default httpTrigger;