import InMemory from "./InMemory";
import { IApplicationStorage } from "./types";

export default class InMemorySingleton {

    private static _instance: IApplicationStorage;

    private constructor() { }

    public static getInstance (): IApplicationStorage {

        if (this._instance == undefined) {
            this._instance = new InMemory();
        }

        return this._instance;
    }
}