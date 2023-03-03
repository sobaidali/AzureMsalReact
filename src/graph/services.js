import axios from 'axios';
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from './config';
const msalInstance = new PublicClientApplication(msalConfig);

export const getToken = async () => {
    const activeAccount = msalInstance.getActiveAccount();
    const accounts = msalInstance.getAllAccounts();
    const request = {
        scopes: ["https://twcb2c.onmicrosoft.com/8265a640-2eed-432d-8af7-014f2da83592/access_as_user"],
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