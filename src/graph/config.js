export const msalConfig = {
    auth: {
        clientId: "xxxxxx-xxxxx-xxxx-xxxxx-xxxxxx",
        authority: "https://login.microsoftonline.com/xxxxxx-xxxx-xxxx-xxxx-xxxxx",
        redirectUri: "https://xxx-xxx.xxx.dynamics.com/"
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};
export const loginRequest = {
    scopes: ["User.Read", "User.Read.All"],
};