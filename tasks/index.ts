import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { AppConfig } from "../src/config";
import { FindTaskUseCase } from "../src/useCases";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    var config: AppConfig = {
        databaseType: Number(process.env.DATABASE_TYPE)
    }

    var useCase = new FindTaskUseCase(config);

    context.res = {
        body: useCase.GetAll()
    };

};

export default httpTrigger;