# TODO Backend

This is the API Backend of the TODO application. 

The application was built using:

* Azure Functions
* Node
* Typescript

This project is using clean architecture and DDD to be easier to add new features avoiding the coupling on the application.
It uses dynamic persistance, you can configure how you want to store your data only by a enviroment variable (only needs that this persistance type is implemented on the application).

You can run the application locally with:

```bash
npm install
npm start
```

The configurations of the project are in the ```local.settings.json```.

The enviroment variables to this project are:

| Variable | Definition| 
|----------|-----------|
| DATABASE_TYPE | The persistance type of the project (1 - In Memory) |