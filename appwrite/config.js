import { Client, Account, Avatars } from "appwrite";


const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('655381207827a85b67db');

export const account = new Account(client);
export const avatars = new Avatars(client);