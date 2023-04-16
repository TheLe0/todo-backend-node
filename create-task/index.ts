import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { createTask } from "../src/useCases";
import { AppConfig } from "../src/config";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    if (req.body == undefined || req.body.name == undefined) {
        context.res = {
            status: 400,
            body: "Invalid request body!"
        };
        return;
    }

    var config: AppConfig = {
        databaseType: Number(process.env.DATABASE_TYPE)
    }

    context.res = {
        status: 202,
        body: createTask(req.body.name, config)
    };

};

export default httpTrigger;