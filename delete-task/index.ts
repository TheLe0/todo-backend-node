import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { DeleteTaskUseCase } from "../src/useCases";
import { AppConfig } from "../src/config";

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

    const useCase = new DeleteTaskUseCase(config);
    const taskDeleted = useCase.deleteById(id);

    if (taskDeleted) {
        context.res = {
            body: "The task was successfully deleted"
        };
    } else {
        context.res = {
            status: 404,
            body: "No task found with the informed Id"
        };
    }

};

export default httpTrigger;