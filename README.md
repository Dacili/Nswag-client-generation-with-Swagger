# Nswag client generation with Swagger

**Swagger** (https://swagger.io/) offers ability to create client on the frontend side (in our case Angular) to connect with the APIs, so you don't have to create separate service, and to create a separate function for every api function and so on.. And what is also awesome, is that you don't have to create models in your angular app to match the ones from backend, they are created for you as well! In simple, it makes the lives of frontend devs easier. 

Note: this code use the base code from this repo https://github.com/Dacili/SignalR, with additions for nswag  
How to run this solution:
- *apiSignalR* is the backend project (.Net Core 6) - run it via visual studio
- *frontendSignalRAngular* is the frontend project (Angular 13) - run it via cmd, with ng serve

Steps:
1. You will need to setup the swagger on the backend side. Add in the Program.cs: app.UseSwagger();app.UseSwaggerUI();
The generated **swagger.json** you will be able to find at path: https://localhost:7163/swagger/v1/swagger.json
2. On the frontend side, firstly install the npm pkg: npm i nswag
3. Open the frontend project in cmd, and run: **nswag new**   
This will generate the nswag.json file. Leave only part for typescript generation, remove for the csharp.
4. In the nswag.json file change the next things:  
"url": "https://localhost:7163/swagger/v1/swagger.json", (normally this would be some deployed place, not localhost)  
"className": "BackendMediClient",   
"output": "src/app/backend-clientapi-base.ts" (ouput path is very important!)
5. Check the version of runtime in nswag.json   "runtime": "NetCore21"
6. Go to cmd, and type **nswag run**    
 *(make sure that your backend solution is runned)*, otherwise you could get err like this:  
![image](https://user-images.githubusercontent.com/37112852/205689758-4f3814fa-4b8c-4356-a54a-f40b77e8d26e.png)

Notice it will usually throw some errors, if you have multiple versions of .net on your pc. To fix this run:  
**nswag run /runtime:NetCore21**  
7. It should succeed. ![image](https://user-images.githubusercontent.com/37112852/205678381-a12e1115-6c6e-472a-98b6-0d6ab3474517.png)
8. Check the generated file. ![image](https://user-images.githubusercontent.com/37112852/205679054-efa7d371-1d58-4b29-89e1-ef6cbd74d358.png)
9. You can extract this command in package.json under scripts like this:  
"updateClient": "nswag run /runtime:NetCore21",   and then to call it in cmd like: npm run updateClient  
  
10. If you have **multiple backends**, you will need multiple generated client apis.  
Copy nswag.json, rename it to some_name.nswag (notice the extension), in our case:  nswagNewOne.nswag  
Update the nswag.json according to the new backend.  
And run it with cmd:  nswag run **nswagNewOne.nswag** /runtime:NetCore21  
You can do the same, to extract this command in package json as:  "updateClient2": "nswag run nswagNewOne.nswag /runtime:NetCore21"  
  
Notice that generated client functions are returning **Promises** as a result. If you want to change that, to return **Observables** instead, change the nswag.json configuration (template from Fetch to Angular)     
**"template": "Angular"**

  
## Now you have generated clients, and they are ready for use! Yaaay

## What if I don't see functions from the API only some models?
Make sure you have these properties set like this:  
<img width="341" height="61" alt="image" src="https://github.com/user-attachments/assets/8029445c-4836-43ff-b401-1381dee82fcd" />  
And then try again, it should fix the issue.

## What if I don't want all controllers to be exported in Angular app?
in ```nswag.json``` you can filter it with: ```?controllerNameFilter=HREVerifyController,LookupController``` at the end of url,     

```"url": "https://app.dev.com/Something/InternalApi/swagger/Web.json?controllerNameFilter=HREVerifyController,LookupController",```



