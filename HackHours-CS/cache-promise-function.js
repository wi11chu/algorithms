/*

If you don't feel comfortable with async/promises, you are more than welcome
to do this (optional) pre-problem problem. Otherwise, we recommend checking out
the main problem.

Doing this pre-problem, however, may serve as an inspiration for the main
problem and be a helpful reminder. It's up to you.

Pre-problem:

Write a function that takes in a function of one parameter, and returns a new
memoized function. The memoized function maintains a cache object through
closure such that when we call the function f(3) -> 4, subsequent calls of
f(3) will not recompute f(3) but rather draw upon the cache to return 4.

Use an object store for the cache, as the function parameter may be any value
that's convertable to JSON. (This is just the memoize problem)

*/

const memoize = func => {
  
};

/*

Main problem:

Imagine we had a function that took in a string and returned a promise that
resolved to some value (e.g. some data).

This type of function is extremely common in web development! For example,
axios.get (https://github.com/axios/axios) is a function that takes in a string
(url) and returns a promise that resolves to some value (in this case the http
response). Here is an example of the usage of axios.get:

axios.get('/user?ID=12345')
  .then(data => {
    // handle success
    console.log(data);
  });

where the data object in the .then(...) callback contains our response data. Note that
unlike fetch, there's no .then(response => response.json()) intermediate step.

Let's call a function (like axios.get) that takes in a string and returns a
promise a "p-function" for convenience.

--------------------------------------------------------------------

Our problem is the following. Write a function that takes in a p-function and
returns a new p-function. This new p-function is a *memoized* version of the
original p-function. This new p-function will maintain a cache of key - value pairs
of url string - response data, such that, when we call our new p-function on a
url string that has a saved response value, we just resolve the promise with
that response value.

The p-function that our caching function takes in as input isn't always going
to be axios.get, although you could think of it as being something similar.

Don't worry about promise rejections/errors or using .catch()

Hint: look up Promise.resolve - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve

*/

// "get" is a p-function, that is, a function that takes in a url-string and
// returns a promise
const cachePromiseFunction = get => {
  
};


/*

Extension:

Our cachePromiseFunction above has a weakness.

Let's say that our memoized p-function (returned by cachePromiseFunction)
is called twice on the same argument, and that the second call happens *before*
the response from the first call is resolved. Then (if our p-function is
e.g. axios.get) the http request will occur twice! We would like just one http
request to occur to minimize network traffic. Can we rewrite our
cachePromiseFunction such that if a subsequent request on the same url is
initiated, we don't make a subsequent http request and instead wait for
the first?

As above, don't worry about promise rejections/errors or using .catch()

*/

// "get" is a p-function, that is, a function that takes in a url-string and
// returns a promise
const cachePromiseFunction2 = get => {
  
};

module.exports = {memoize, cachePromiseFunction, cachePromiseFunction2};
