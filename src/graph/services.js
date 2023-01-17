import axios from 'axios';
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from './config';
const msalInstance = new PublicClientApplication(msalConfig);

export const getToken = async () => {
    const activeAccount = msalInstance.getActiveAccount();
    const accounts = msalInstance.getAllAccounts();
    const request = {
        scopes: ["User.Read", "User.Read.All"],
        account: activeAccount || accounts[0]
    };
    const authResult = await msalInstance.acquireTokenSilent(request);
    return authResult.accessToken
}
export const getUsers = async (accessToken) => {
    const users = await axios.get("https://graph.microsoft.com/v1.0/users", {
        headers: {
            Authorization: 'Bearer' + ' ' + accessToken
        }
    });
    return users;
}