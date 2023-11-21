
import { Client, Account, Avatars, Databases } from "appwrite";


const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('655b6a6247e89c890cbf');
    

export const account = new Account(client);
export const avatars = new Avatars(client);
export const database = new Databases(client);
export const url = {
    db:'655b6ae8dff2923c88b9',
    collection:'655b6b2af24d980a1524'
} 