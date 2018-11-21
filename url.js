/* eslint-disable */
// var f = [];
// function factorial (n) {
//   if (n == 0 || n == 1)
//     return 1;
//   if (f[n] > 0)
//     return f[n];
//   return f[n] = factorial(n-1) * n;
// } 
// function walker(n) {
//     var f = [];
//     function factorial() {
//         if (n <= 1 || n == 2)
//             return 2;
//         if (f[n] > 0)
//             return f[n];
//       return  f[n] = factorial(n - 1) + n;
//     }
//     const edit = 21 - f[f.length -1];
//     f[f.length - 1 + 1] = edit;
//     console.log(edit, f)
//     return f.lenght
// }

function factorialize(input) {
    const HashMap = []
    if (input === 0 || input === 1) return 1;
    for (var i = input; i >= 3; i--) {
        if (i == 3) {
            input += i;
            HashMap.push(5)
        } else {
            input += i;
            HashMap.push(i)
        }
    }
    let result = arr.reduce((sum, current) => sum + current, 0);
    return result
}

// Redirect to a New Address
// When you have changed an address, for example a new domain name, you should perform a 301 redirect.
// This is where the server sends an HTTP status code of 301, with the new address.

//     A 301 status code tells the user agent: ie the browser or search engine spider, there is a new address.
// This is sort of like when you move and submit an address change to the post office.Your mail is forwarded.

//         A 301 redirect allows you to keep the traffic and hopefully your search engine ranking.

// Normally you would do this from the server.There are times when this is not possible and you would need to use a JavaScript 
// redirect to a URL.

// This is pretty simple, just include one of the following snippets:

window.location.assign("new target URL");
//or
// window.location.replace("new target URL");
// I would recommend using replace because the original URL is not valid.So retaining it in their session history 
// might confuse them and trigger an automatic redirect anyway.

//     location.replace is useful for any 301 redirect scenario, including when you need to redirect from HTTP to HTTPS.
// But a more succinct way to redirect from HTTP to HTTPS using JavaScript is the following code snippet:

if (location.protocol !== "https:") {
    location.replace(window.location.href.replace("http:", "https:"));
}
// I do recommend configuring your server to send the proper HTTP redirection headers because they are much more efficient.
// This applies to both new addresses and HTTP to HTTPS.

// Redirect On A Form Submission
// Another time where using the location.replace method is useful is submitting forms.

// This is not the right choice 100 % of the time, but should be a consideration.A good example is checking out of a shopping cart.

// Once the user clicks the button to submit payment it is typically not a good idea for them to go back to the cart.
// This can cause all sorts of confusion and potential duplicate orders.

// In response to the cart or any form being submitted you need to add a click or pointer event handler to intercept the action.
// In the handler method you should include a return false to prevent the form from being submitted to the server.

    submitBtn.addEventListener("click", function (evt) {
        evt.preventDefault();
        window.location.replace("new target URL");
        return false;
    });
// You would do this normally when you create a client - side form handler,
// so don't forget this when you are adding JavaScript code to redirect to a new another page.

// Just a helpful note to this process: You may want to include a queryString parameter in 
// your URL to pass along a reference to the user's state. This might help you render or hydrate the new target URL.

// JavaScript Redirect in a Single Page App(SPA)
// A core principle of Single Page Web Applications(SPA) is things that used to live on the server now live in the browser.
// One of those responsibilities is managing redirections.For example when you make an AJAX call to a secure service and without 
// a valid authorization token.The service should return a 401 status code.When receiving a 401 status code the application 
// should redirect the user to the login address.

// In classic web development the AJAX request would have been a page request or postback.
// The server recognizes the unauthorized state and performs the proper redirect server - side.In ASP.NET we do this with 
// the response.redirect function.

// In a SPA the client application's code needs to manage the redirect. 
// I have encountered two common scenarios; redirecting to an external party or (secure token server) STS or 
// to the application's login view.The internal redirection is fairly easy, change the hash fragment's route to the login view.

window.location.hash = "#!login";
// If you are familiar with single page applications you will recognize this as how to use JavaScript to redirect to another page.

// Remember when redirecting to a new page due to stale or missing authentication token you are most likely using active 
// authentication and need to persist the authentication token somewhere, like IndexedDB.

// If you are using passive authentication the page will post back to the authentication server and the token returned, 
// typically in the header.

// Redirecting to an STS normally involves changing the browser's address from the SPA URL to the authentication URL. 
// The STS URL is most likely on a completely different domain, server, etc.

// Whatever the case may be the location must change.Most developers', me included, 
// first reaction is to set the location.href property to the new URL. Doing this is disappointing because nothing happens. 
// The href is a read-only property.

// To change the browser's address you should use the location.redirect function. This causes the browser to load the new URL.

window.location.redirect(myLoginUrl);
// Now the browser loads the new target.In this scenario the user then logins using the STS and return to the application 
// authenticated.

// Authentication is one scenario you might find yourself needing to programatically redirecting the user.
// Of course there are many other scenarios where you might need to redirect a user either internally or externally in the course of normal application usage.

//     Summary
// There are different reasons why you might need to redirect from one page to another.
// Try to configure these on the server as much as possible.But there are many common scenarios where you need to use 
// JavaScript to perform a page redirect.

// The window.location object has properties and methods you can manipulate using JavaScript to redirect to different URLs.
// The location.replace and location.assign can be very helpful.The replace method keeps the session history clean, 
// and the assign method allows the user to back track through the URL history.
