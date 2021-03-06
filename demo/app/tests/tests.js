"use strict";
var helpers = require("../scripts/helpers");
var appSetttings = require("application-settings");
var nativescript_auth0_1 = require("nativescript-auth0");
describe('Auth0Lock', function () {
    var accessToken = "G47mNzshIVeFAivt";
    var idToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL25hdGl2ZXNjcmlwdC5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDU5MjQ4NDk5NDA1OTAyNjQwMjUiLCJhdWQiOiJxNWF0UXppNkRnbVdCcEhXUkpiZDdNQk5hNWVMQlBScCIsImV4cCI6MTQ4NzgyODkwMCwiaWF0IjoxNDg3NzkyOTAwfQ.fn9Ndgheo6DajCB_1KWDNmB6CR6bCmhh2rJA3kA8w1Q";
    var refreshToken = "";
    var lock = helpers.getAuthLock();
    before(function () {
        var creds = {
            accessToken: accessToken,
            idToken: idToken,
            refreshToken: refreshToken,
        };
        appSetttings.setString(nativescript_auth0_1.Auth0Lock._tokenKey, JSON.stringify(creds));
    });
    it("Can get user profile", function () {
        var user = lock.getUserInfo();
        console.dump(user);
        assert.isTrue(user);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0EsNENBQThDO0FBQzlDLG1EQUFvRDtBQUNwRCx5REFBNEQ7QUFLNUQsUUFBUSxDQUFDLFdBQVcsRUFBRTtJQUVwQixJQUFJLFdBQVcsR0FBVyxrQkFBa0IsQ0FBQztJQUM3QyxJQUFJLE9BQU8sR0FBVyx5U0FBeVMsQ0FBQztJQUNoVSxJQUFJLFlBQVksR0FBVyxFQUFFLENBQUM7SUFDOUIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRWpDLE1BQU0sQ0FBQztRQUNILElBQUksS0FBSyxHQUFnQjtZQUNQLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFlBQVksRUFBRSxZQUFZO1NBQzdCLENBQUM7UUFFaEIsWUFBWSxDQUFDLFNBQVMsQ0FBQyw4QkFBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0JBQXNCLEVBQUU7UUFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvbW9jaGEvaW5kZXguZC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9jaGFpL2luZGV4LmQudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvamFzbWluZS9pbmRleC5kLnRzXCIgLz5cblxuZGVjbGFyZSB2YXIgYXNzZXJ0OiBDaGFpLkFzc2VydFN0YXRpYzsgXG5pbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuLi9zY3JpcHRzL2hlbHBlcnNcIjtcbmltcG9ydCAqIGFzIGFwcFNldHR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIlxuaW1wb3J0IHsgQXV0aDBMb2NrLCBDcmVkZW50aWFscyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYXV0aDBcIjtcbmltcG9ydCAqIGFzIGogZnJvbSBcImphc21pbmUtY29yZVwiO1xuXG5kZWNsYXJlIHZhciBKU09OO1xuXG5kZXNjcmliZSgnQXV0aDBMb2NrJywgKCkgPT4ge1xuICAvL1BvcHVsYXRlIHRoZXNlIHdpdGggdGhlIGxhdGVzdCB2YWxpZCBlbnRyaWVzXG4gIGxldCBhY2Nlc3NUb2tlbjogc3RyaW5nID0gXCJHNDdtTnpzaElWZUZBaXZ0XCI7XG4gIGxldCBpZFRva2VuOiBzdHJpbmcgPSBcImV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUpwYzNNaU9pSm9kSFJ3Y3pvdkwyNWhkR2wyWlhOamNtbHdkQzVoZFhSb01DNWpiMjB2SWl3aWMzVmlJam9pWjI5dloyeGxMVzloZFhSb01ud3hNRFU1TWpRNE5EazVOREExT1RBeU5qUXdNalVpTENKaGRXUWlPaUp4TldGMFVYcHBOa1JuYlZkQ2NFaFhVa3BpWkRkTlFrNWhOV1ZNUWxCU2NDSXNJbVY0Y0NJNk1UUTROemd5T0Rrd01Dd2lhV0YwSWpveE5EZzNOemt5T1RBd2ZRLmZuOU5kZ2hlbzZEYWpDQl8xS1dETm1CNkNSNmJDbWhoMnJKQTNrQTh3MVFcIjtcbiAgbGV0IHJlZnJlc2hUb2tlbjogc3RyaW5nID0gXCJcIjtcbiAgbGV0IGxvY2sgPSBoZWxwZXJzLmdldEF1dGhMb2NrKCk7XG4gIFxuICBiZWZvcmUoZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgY3JlZHM6IENyZWRlbnRpYWxzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWRUb2tlbjogaWRUb2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hUb2tlbjogcmVmcmVzaFRva2VuLFxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICBhcHBTZXR0dGluZ3Muc2V0U3RyaW5nKEF1dGgwTG9jay5fdG9rZW5LZXksIEpTT04uc3RyaW5naWZ5KGNyZWRzKSk7XG4gIH0pO1xuXG4gIGl0KFwiQ2FuIGdldCB1c2VyIHByb2ZpbGVcIiwgKCkgPT57XG4gICAgICB2YXIgdXNlciA9IGxvY2suZ2V0VXNlckluZm8oKTtcbiAgICAgIGNvbnNvbGUuZHVtcCh1c2VyKTtcbiAgICAgIGFzc2VydC5pc1RydWUodXNlcik7XG4gIH0pXG59KTsiXX0=