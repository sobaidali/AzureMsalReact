export const b2cPolicies = {
    names: {
        signUpSignOn: 'B2C_1_signupsignon',
    },
    authorities: {
        signUpSignOn: {
            authority: 'https://twcb2c.b2clogin.com/twcb2c.onmicrosoft.com/B2C_1_signupsignon',
        },
    },
    authorityDomain: 'twcb2c.b2clogin.com',
};
export const msalConfig = {
    auth: {
        clientId: "de644932-be6c-4fbf-b9c6-8c1539f4264f",
        clientSecret: "bjx8Q~Tk_hkhR6NtTUwvMffX8OeaCeC43VGURb23",
        authority:  b2cPolicies.authorities.signUpSignOn.authority,
        knownAuthorities: [b2cPolicies.authorityDomain],
        redirectUri: "http://localhost:3000"
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};
export const loginRequest = {
    scopes: ["https://twcb2c.onmicrosoft.com/8265a640-2eed-432d-8af7-014f2da83592/access_as_user"],
};


// Domain Name: twcb2c.onmicrosoft.com
// ClientId: de644932-be6c-4fbf-b9c6-8c1539f4264f
// Tenant ID: 19ed59b5-1465-436f-9164-f204377618b1
// Azure AD B2C EndPoint: https://twcb2c.b2clogin.com/twcb2c.onmicrosoft.com/<policy-name>/oauth2/v2.0/authorize
// App Registeration Name : ReactFrontend App 
// Authority:  https://twcb2c.b2clogin.com/19ed59b5-1465-436f-9164-f204377618b1/B2C_1_signon/v2.0

//https://twcb2c.onmicrosoft.com/8265a640-2eed-432d-8af7-014f2da83592/access_as_user