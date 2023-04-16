import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { AppConfig } from "../src/config";
import { UpdateTaskUseCase } from "../src/useCases/UpdateTask";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const { id } = req.params

    if (!id) {

        context.res = {
            status: 400,
            body: "You must inform an id"
        };
    }
    var config: AppConfig = {
        databaseType: Number(process.env.DATABASE_TYPE)
    }

    const useCase = new UpdateTaskUseCase(config);
    const task = useCase.closeById(id);

    if (task == undefined) {
        context.res = {
            status: 404,
            body: "No task found with the informed Id"
        };
    } else {
        context.res = {
            body: task
        };
    }

};

export default httpTrigger;