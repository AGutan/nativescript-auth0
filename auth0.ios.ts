/// <reference path="./Lock.ios.d.ts" />


import common = require("./auth0.common");

import * as appSettings from "application-settings";
import * as frameModule from "ui/frame";
import * as util from "utils/utils";
import * as application from "application";

declare var A0Lock;

export class Auth0Lock extends common.Auth0Lock{
    constructor(options: common.Options){
        super(options);
    }

    public show() : Promise<any>{
        return new Promise((resolve, reject) =>  {
            var page = frameModule.topmost().ios.controller;

            let lock: A0Lock = A0Lock.newLockWithClientIdDomain(this.options.clientId,this.options.domain);
            let controller: A0LockViewController = lock.newLockViewController();
            
            //Add scope
            if(this.options.scope){
                var scopeItems = this.options.scope.join(" ");
                console.log("Adding scope of " + scopeItems);

                controller.authenticationParameters.scopes = this.options.scope;
            }

            controller.onAuthenticationBlock = function(profile: A0UserProfile, token: A0Token){
                    
                page.dismissViewControllerAnimatedCompletion(true, null);

                console.log("Authentication Success");

                let creds: common.Credentials = {
                    accessToken: token.accessToken,
                    idToken: token.idToken,
                    refreshToken: token.refreshToken,
                };

                appSettings.setString(common.Auth0Lock._tokenKey, JSON.stringify(creds));

                resolve({
                    credentials: creds,
                    ios: {
                        profile: profile,
                        token: token
                    }
                });
            }			
            page.presentViewControllerAnimatedCompletion(controller, true, null);

            console.log("PRESENT");
        });
    }
}
