import { Client, Account } from 'appwrite';


const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6542dccab0535ffee78f');

export const account = new Account(client)

export default client;