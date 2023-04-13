import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const { id } = req.params

    if (!id) {

        context.res = {
            status: 400,
            body: "You must inform an id"
        };
    }

    context.res = {
        body: "The id informed is " + id
    };

};

export default httpTrigger;