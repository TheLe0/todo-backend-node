import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { CreateTaskUseCase } from "../src/useCases";
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

    var useCase = new CreateTaskUseCase(config);

    context.res = {
        status: 202,
        body: useCase.createTask(req.body.name)
    };

};

export default httpTrigger;