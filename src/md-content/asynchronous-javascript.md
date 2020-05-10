<section data-type="article">

<a id="javascript-asynchronous"></a><h1>Asynchronous Javascript<h1>

When we write JavaScript we normally do it synchronously &mdash; every instruction is executed one at a time in the order they appear in the script. The script will finish once the last instruction is executed.

In the example below we log three items to the console.

```js
console.log('1');
console.log('2');
console.log('3');
```

We will always get the same result: 1 2 3.

This works great for small pieces of code or scripts that don't produce output on the browser. But sooner rather than later you will want to work on larger scripts and you will find one of the first issues with JavaScript: It blocks rendering.

Let's take the following HTML document.

```html
<!DOCTYPE html>
<html lang='en'>
 <head>
   <meta charset='UTF-8'>
   <meta name='viewport' content='width=device-width, initial-scale=1.0'>
   <title>Document</title>
   <script src='myscript.js'></script>
 </head>
 <body>

 </body>
</html>
```

And the following content in myscript.js:

```js
// Capture the body tag as the third child of the document (zero based)
const content = document.documentElement.childNodes[2];
// Create an h2 element and assign it to the header constant
const header = document.createElement('h2');
// Add content to the header
header.innerHTML = 'This was inserted';
// Assign it as the first child of the body element
content.insertAdjacentElement('afterbegin', header);
```

The browser will load the page and when it finds the script it will load it and process it. Because the browser can not know ahead of time if the script will insert, remove or change content on the page it will pause rendering until the script is fully parsed and any changes to the page like inserting or removing nodes are completed. The script can have any number of functions and interact with databases and other resources on your page and application.

This will happen for every script that you add to the page; they will each load completely before moving onto the next. Working with smaller scripts may be fine but imagine if you're loading jQuery from a Content Delivery Network and then loading our script. Our HTML will look like this:

```html
<!DOCTYPE html>
<html lang='en'>
 <head>
   <meta charset='UTF-8'>
   <meta name='viewport' content='width=device-width, initial-scale=1.0'>
   <title>Document</title>
   <script
     src='https://code.jquery.com/jquery-3.3.1.min.js'></script>
   <script src='myscript.js'></script>
 </head>
 <body>
   <!-- content goes here -->
 </body>
</html>
```

Even with no content, this page will take longer to load as it now has to download jQuery before it can continue processing the page and its content, which may include other scripts.

Things will get slower when the code we write does heavy processing like database access or image manipulation.

## <a id="javascript-asynchronous-method"></a>Methods of writing synchronous code

Before we jump in to asynchronous (async) code we'll look at two ways of writing synchronous code: Callbacks and try/catch blocks.

### <a id="javascript-callbacks"></a>Callbacks

Callbacks are functions that are passed as parameters to other functions. An example of a callback is the second parameter of an event listener. In the example below, clicking the button with id of myButton will trigger the function and produce the alert for the user.

```js
myButton.addEventListener('click', function() {
  alert('You Clicked THE Button');
})
```

Another example is when we use forEach to loop through the items in an Array. In this case forEach will loop through the array

```js
const gods = ['Apollo', 'Artemis', 'Ares', 'Zeus'];

gods.forEach(function (eachName, index){
  console.log(index + 1 + '. ' + eachName);
});
```

The two examples work because JavaScript allows functions to be passed as parameters to other functions.

When we pass a callback function as an argument to another function, we are only passing the function definition. We are not executing the function in the parameter. The containing function can execute the callback anytime.

Note that the callback function is not executed immediately. It is “called back” (hence the name) somewhere inside the containing function’s body synchronously.

### <a id="javascript-this"></a>Working with 'this'

When the callback function uses the this object, we have to modify how we execute the callback function to preserve the this object context. Or else the this object will either point to the global window object (in the browser), if the callback was passed to a global function. Or it will point to the object of the containing method.

```js
const agentData = {
 id: 007,
 fullName: 'Not Set',
 // setUserName is a method on the agentData object
 setUserName: function (firstName, lastName)  {
   this.fullName = firstName + ' ' + lastName;
 }
}

function getUserInput(firstName, lastName, callback)  {
 if ((firstName.length > 3) && (lastName.length > 3)) {
   callback (firstName, lastName);
 } else {
   console.log('data could not be saved.');
 }
}
```

When we create a new agent something unexpected happens. agentData.fullName returns the default value of Not Set but when we check for fullName in the window object (window.fullName) we get the name we expected . When we call a function directly, like we call getUserInput, the context of the function is the root object (window in the case of the browser) and we did not set the this object to be agentData so the browser assumes that the object we want to store the data in is the Window Object and not agentData. In most cases, the value of this is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called.

```js
// getUserInput is called from the global object
getUserInput ('James', 'Bond', agentData.setUserName);
console.log (agentData.fullName); // Returns Undefined
console.log (window.fullName); // Returns James Bond
```

When a function is called as a method of an object, its this is set to the object the method is called on.

So how do we solve this problem?

### <a id="javascript-apply-call"></a>Apply and Call

We can fix the problem with defining this using apply. This method  (available to all functions) is  used to set the this object inside the function and to pass arguments to the functions.

For apply to work we add an extra parameter that designates what object we want to use to represent this, in this case we call it callbackObj.

The biggest difference is that, our new version of getUserInput uses the call method of the callback function with four parameters, including the new callbackObj.

The Apply function first parameter is also the value to be used as the this object inside the function, while the last parameter is an array of values to pass to the function.

```js
const agentData = {
 id: 007,
 fullName: 'Not Set',
 // setUserName is a method on the agentData object
 setUserName: function (firstName, lastName)  {
   this.fullName = firstName + ' ' + lastName;
 }
}

function getUserInput(firstName, lastName, callback, callbackObj)  {
  if ((firstName.length >= 3) && (lastName.length >= 3)) {
   callback.apply (callbackObj, [firstName, lastName]);
 } else {
   console.log('data could not be saved.');
 }
}
```

Using apply in  getUserInput adds a fourth parameter to the function signature, the object that we want to use as the value of this.

```js
getUserInput ('James', 'Bond', agentData.setUserName, agentData);
```

Because we’ve told our function that we want to use agentData as the value of this we get the expected result.

```js
console.log (agentData.fullName); // James Bond
console.log (window.fullName); // Undefined
```

There is a second way to pass the object we want to represent this. The call method.

Call takes the value to be used as the this object inside the function as the first parameter, and the remaining arguments to be passed to the function are passed as a comma separated list instead of an array.  The example using apply converted to use call looks like this:

```js
const agentData = {
 id: 007,
 fullName: 'Not Set',
 // setUserName is a method on the agentData object
 setUserName: function (firstName, lastName)  {
   this.fullName = firstName + ' ' + lastName;
 }
}

function getUserInput(firstName, lastName, callback, callbackObj)  {
  if ((firstName.length >= 3) && (lastName.length >= 3)) {
   callback.call (callbackObj, firstName, lastName);
 } else {
   console.log('data could not be saved.');
 }
}
```

### <a id="javascript-try-catch"></a>Try/Catch blocks

The second way to write synchronous code is to create try/catch blocks.

The idea behind try/catch blocks is that we need to run instructions in sequence but we must also do something if any of the commands fail.

We will use the following JSON for the example.

```js
// data from the server
let json = '{"id":"007", "firstName":"James", "lastName": "Bond"}';
```

In the try/catch block below, we want to make sure that the data parses successfully and do something useful if there is an error, instead of just throwing an error  and stopping.

In this example we just log a message and the error to console. In more complex examples the catch error may attempt connecting to the database again or ask the user to enter the data again if it wasn't complete or well formed.

```js
try {
 // convert the text representation to JS object
 let user = JSON.parse(json);
 // Log the results to console
 console.log (user.id); // 007
 console.log (user.firstName);  // James
 console.log (user.lastName); // Bond
} catch(err) {
 console.log ('I\'m sorry Dave, I can\'t do that ');
 console.log (err.name);
 console.log (err.message);
}
```

There is a third optional parameter, finally. It will happen regardless of whether the try block succeeds or the catch block is called. This gives the option of doing cleanup, closing database connections and doing other cleanup tasks your code needs to complete.

In the example below, the script will always log All Done, regardless if the JSON parsing was successful or not.

```js
try {
 // convert the text representation to JS object
 let user = JSON.parse(json);
 // Log the results to console
 console.log (user.id); // 007
 console.log (user.firstName);  // James
 console.log (user.lastName); // Bond
} catch(err) {
 console.log ('I\'m sorry Dave, I can\'t do that ');
 console.log (err.name);
 console.log (err.message);
} finally {
 //This will always execute regardless
 console.log ('All Done');
}
```

## <a id="javascript-brief-intro-async"></a>Brief Introduction to Async Code

Async (short for asynchronous) code will execute without blocking rendering and return a value when the code in the async block finishes.

Contrast the definition of async with the synchronous code we've been working so far where all statements are executed in the order they appear.

The example below uses both sync (synchronous) and async (asynchronous) code to illustrate the difference. The console log statements outside of fetch will execute in the order they appear in the document.

```js
console.log ('Starting');
fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/32795/coffee2.png') // 1
 .then((response) => {
   if (response.ok) {
     console.log('It worked :)')
     return response.blob(); // 2
   } else {
     throw new Error('Network response was not ok.' );
   }
 })
 .then((myBlob) => {
   let objectURL = URL.createObjectURL(myBlob); // 3
   let myImage = document.createElement('img'); // 4
   myImage.src = objectURL; // 5
   document.body.appendChild(myImage); // 6
 })
 .catch((error) => {
   console.log(
     'There has been a problem with your fetch operation: ',
     error.message
   );
 });
console.log ('All done!');
```

The fetch function and its associated chain uses the Promise API (discussed in more detail later in the document) to get a resource from the network and perform one or more tasks.  To get a better idea of how this process works, let’s step through the code

 The browser will begin executing the code, see the first console.log message (‘Starting’) and execute it. It will move to the next line and begin executing the fetch call  but it will not wait until the code is done, it will move on with the code execution until it finds the last console.log (‘All done!’) and outputs it to the console. The order in which the console.log messages is

1.	Starting
2.	All done!
3.	It worked :)

While the code completes, the fetch process is still ongoing. After the fetch completes the code moves to the first then block and execute the code in there: If the response is OK, meaning there are no errors and the response code is 200, it will convert the response into a blob.

If the response is not OK, the response code is not 200 or there is another kind of error,  it will move to the next then block; otherwise we throw an error here and jump to the catch block.

The second then block processes the image by performing the following steps:

1.	Create a URL using createObjectURL
2.	Create an image
3.	Attach the URL as the source of the image
4.	Attach the image to the body of the document

Only when the entire task is completed will the console.log message (‘It worked :)’) will display and the image will attach at the end of the document. Fetch may complete   before or  after the browser prints the last message to the console; it will depend on how long the asynchronous code takes to complete.

If you must ensure proper execution order move the all done work as a last item in the fetch chain, adding another then block and making the final console log part of the asynchronous promise chain. The new code looks like this

```js
console.log ('Starting');
fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/32795/coffee2.png')
 .then((response) => {
   if (response.ok) {
     console.log('It worked :)')
     return response.blob(); // 2
   } else {
     throw new Error('Network response was not ok.' );
   }
 })
 .then((myBlob) => {
   let objectURL = URL.createObjectURL(myBlob); // 3
   let myImage = document.createElement('img'); // 4
   myImage.src = objectURL; // 5
   document.body.appendChild(myImage); // 6
 })
 .then(() => {
  console.log ('All done!');
 })
 .catch((error) => {
   console.log(
     'There has been a problem with your fetch operation: ',
     error.message
   );
 });
```

When would you use async? When would sync work better?
Javascript is at its most basic a synchronous, blocking, single-threaded language; Only one operation can be in progress at a time. Instead of getting blocked, the code is pushed to an event queue which gets fired after the execution of all the other codes. This means that you can let your code do several things at the same time without stopping or locking your main thread.

Whether we want to run code synchronously or asynchronously will depend on what we're trying to do.

There are times when we want things to load and happen right away. The callback for a click event handler is a good example.

If we're running an expensive operation like querying a database and using the results to populate templates then we want to push this off the main thread and complete the task asynchronously.
 
## <a id="javascript-settimeout-setinterval"></a>SetTimeout and SetInterval

SetTimeout and SetInterval provide ways to schedule tasks to run at a future point in time.

setTimeout allows you to schedule a task after a given interval.

setInterval lets you run a tasks periodically with a given interval between runs.

Unlike synchronous code, the code running on setTimeout and SetInterval will run without blocking the execution of other code in your page.

### <a id="javascript-settimeout"></a>SetTimeout

setTimeout takes two parameters:

* A string representing code to run
* A number representing the time interval in milliseconds to wait before executing the code.

In the following example, the browser will wait two seconds before executing the anonymous function and presenting the alert message.

```js
let myGreeting = setTimeout(function() {
 alert('Hello, Mr. Universe!');
}, 2000)
```

We're not required to write anonymous functions. The second version of the example uses sayHias the name of the function. The rest of the code remains unchanged.

```js
let myGreeting = setTimeout(function sayHi() {
 alert('Hello, Mr. Universe!');
}, 2000)
```

The code is rather messy. We can clean up the setTimeout call by taking the function outside the setTimeout call. The next iteration of our code defines sayHi first and then references the function by calling sayHi without parenthesis as the first parameter of setTimeout.

```js
function sayHi() {
 alert('Hello Mr. Universe!');
}

let myGreeting = setTimeout(sayHi, 2000);
```

The last step in the demo is to pass parameters to the function we want to use in setTimeout.

This gets a little tricky.

First we configure the function to add the parameter and use it in the body of the function.

When we call setTimeout we pass the values for the function parameters as the third (and subsequent if there is more than one) parameters.

```js
function sayHi(who) {
 alert('Hello ' + who + '!');
}

let myGreeting = setTimeout(sayHi, 2000, 'Mr. Universe');
```

All versions of the function will produce the same result... but they show different ways we can use setTimeout and the flexibility we have in writing the code.

### <a id="javascript-setinterval"></a>setInterval

setTimeout works perfectly when we need to run the code once after a set period of time. But what happens when we need to run the code every x milliseconds?

That's where setInterval comes in. When we use this command, the code we attach to it will run every time the interval completes.

The example below creates a new date object and logs it to console. We then attach it to setInterval and execute it once every second. This will create the effect of a running clock that updates once per second.

```js
function countTime() {
   let date = new Date();
   let time = date.toLocaleTimeString();
   document.getElementById('demo').innerHTML = time;
}

const createClock = setInterval(countTime, 1000);
```

### <a id="javascript-cleartimeout"></a>clearTimeout

This is less of an issue with setTimeout as it is with setInterval (discussed in later sections) but there may still be situations where you want to abort the execution of code inside a setTimeout call. For example, let's say that we set the timeout of a very expensive task.

```js
function runExpensiveTask() {
 alert('Expensive Task has been completed!');
}

let myTaskRunner = setTimeout(runExpensiveTask, 30000);
```

And we want to stop it because we want to do something else in the page. To do it we call clearTimeout with the id we assigned to setTimeout when we created it.

```js
let forgetIt = clearTimeout(myTaskRunner);
```

### <a id="javascript-clearinterval">clearInterval

With repetitive tasks like our clock example, we definitely want a way to stop the activity... otherwise we may end up getting errors when the browser can't complete any further versions of the task.

stopTime() clears the interval with the ID we created.

The example goes further and creates a button and attaches the stopTime function to the button's click event so when we click the button the interval will stop.

```js
function stopTime() {
  clearInterval(createClock);
}

let myButton = document.getElementById('stopButton');
myButton.addEventListener('click', stopTime);
```

clearTimeout() and clearInterval() use the same list of entries to clear from. This means that you can use either method to remove a setTimeout or setInterval. For consistency, I use clearTimeout to clear setTimeout() entries and clearInterval to clear setInterval() entries.

### <a id="javascript-keepinmind1">Things to keep in mind

There are a few things to keep in mind when working with setTimeout and setInterval.

#### <a id="javascript-keepinmind1-recursive"></a>Recursive Timeout

There is another way we can use setTimeout: Use it recursively to call the same code repeatedly instead of using setInterval.

Compare the first example using a recursive setTimeout to run the code every 100 milliseconds.

```js
let i = 1;

setTimeout(function run() {
 console.log(i);
 setTimeout(run, 100);
}, 100);
```

The second example uses setInterval to accomplish the same effect of running the code every 100 milliseconds.

```js
let i = 1;

setInterval(function run() {
 console.log(i);
}, 100);
```

The difference between the two versions of the code is a subtle one.

Recursive setTimeout guarantees a delay between the executions; the code will run and then wait 100 milliseconds before it runs again. The 100 milliseconds interval will happen regardless of how long the code takes to run.

The example using setInterval does things differently. The interval we choose includes the time taken to execute the code we want to run in. Let's say that the code takes 400 milliseconds to run &mdash; the interval then ends up being only 600 milliseconds.

When your code has the potential to take longer than the interval you’ve assigned, it’s better to use recursive setTimeout() as this will keep the time interval constant between executions regardless of how long the code takes to execute.

#### <a id="javascript-keepinmind1-immediate">Immediate Timeout

Using 0 as the value for setTimeout schedules the execution of func as soon as possible but only after the current code is complete.

For instance, the code below outputs an alert with “Hello”, then an alert with “World” as soon as the user clicks OK on the first alert.

```js
setTimeout(function() {
 alert('Mr. Universe')
}, 0);

alert('hello');
```

#### <a id="javascript-keepinmind1-when"><a>When would you use them?

setTimeout and setInterval are useful when you need to schedule code execution.

Use setTimeout if you want to execute the code once after a given time elapses. Pay attention to the gotchas for using setTimeout and consider them additional alternatives

Use setInterval if you need the code to execute repeatedly at given intervals.
 
## <a id="javascript-raf"></a>Request Animation Frame

Requestanimationframe is a specialized timing function that is primarily used with animation code of any kind (DOM elements, CSS, canvas, WebGL, or any other).The method tells the browser that you wish to perform an animation and requests that the browser call a function to update the animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint

### <a id="javascript-raf-before"></a>Before Request Animation Frame

When working directly with animations you've probably seen either of the two animation models show below

The first example calls the draw function once every 100ms until the clearInterval function is called. An alternative to this code is to use a setTimeout function inside the draw function:

```js
function draw() {
   setTimeout(draw, 100);
   // Drawing code goes here
}
draw();
```

This technique uses a recursive setTimeout call from inside the function to draw until clearTimeout is used to stop it.

You can also use the setInterval technique with a value to indicate how often the animation should run.

We arrived at our final value of 17 by running the following formula: 1000 milliseconds / 60Hz, rounded up.

```js
// Lights, camera...function!
setInterval(function() {
   animateEverything();
}, 17);
```

### <a id="javascript-raf-running"></a>Running RAF

 The Request Animation Frame signature has only one parameter which is the function that you want to run. The main difference between Requestanimationframe and setTimeout and setInterval is that RAF will draw itself again when it’s time for the browser to run the paint event for the next frame, however fast that is on your device.

```js
function draw() {
   // Drawing code goes here
   requestAnimationFrame(draw);
}
draw();
```

The smoothness of your animation is directly dependent on your animation's frame rate and it is measured in frames per second (fps). The higher this number is, the smoother your animation will look to a point.

Since most screens have a refresh rate of 60Hz, the fastest frame rate you can aim for is 60fps (frames per second) when working with web browsers. However, more frames, means more processing, which can often cause stuttering and skipping. This is what is meant by the term dropping frames or jank.

If we have a monitor that gives you 60Hz and you want to achieve 60 fps you have about 16.7 milliseconds to execute all your animation code. This is a reminder that we need to be mindful of the amount of code that we try to run for each animation loop.

### <a id="javascript-raf-polyfill"></a>Polyfill and Feature Detection

Paul Irish wrote a polyfill for older browsers that don't support Request Animation Frame natively.

We can use the code below to detect if the browser supports window.requestAnimationFrame and write code for both sections.

```js
if (!'requestAnimationFrame' in window) {
  console.log('requestAnimationFrame not supported');
  // Provide alternative animation timing method
} else {
  console.log('we support requestAnimationFrame, move along');
  // Rest of the code runs here
}
```

Older versions of browsers added vendor prefixes as they made the feature available to developers before it was ready to ship.  See [caniuse.com](https://caniuse.com/#feat=requestanimationframe) for the current list of browser support.

### <a id="javascript-raf-when"></a>When would you use it?

Request Animation Frame will work with all kinds of animations, CSS, WebGL, DOM manipulation.

## <a id="javascript-promises"></a>Promises

Promises were introduced in ES2015 (ES6) as a way to defer code execution. Think of promises as buying Pizza, when you come in, you order the pizza but you don’t get it right away, you’re given a receipt and are put in the queue for the pizza to arrive, as soon as the pizza is ready  you will receive it and the transaction is done.

Promises work like your pizza order. You tell the browser what you want to do and the browser tells you that it has queued the task and that it will return the result of your code at some later point in time.  This makes promises different than setTimeout and setInterval in that the amount of time it’ll take a promise to return its value is not specified.

At their most basic, promises are similar to event listeners with a few exceptions:

*	A promise can only succeed or fail once. It cannot succeed or fail twice and it cannot switch from success to failure or vice versa.
* If a promise has succeeded or failed and you later add a success/failure callback, the correct callback will be called, even though the event took place earlier.

This is extremely useful for async success/failure, because you're less interested in the exact time something became available, and more interested in reacting to the outcome.

Promises are important because all modern APIs specified at the WHATWG and W3C use them.  So promise will be with you everywhere.

Let’s look at promises in action with existing APIs. We’ll look at Service Workers and the Fetch API and how they use promises.

The first example show how promises work in a service worker event. The install event runs and completes the following tasks:

* Opens the specified cache
* Adds all the files specified in urlsToCache

The steps happen in the order they appear in the document  but they happen outside outside the main execution thread and will return its result when it’s complete, regardless of how long it takes for the code to run. In this particular case we only care that the files are added to the cache, nor how long it takes to complete the task.

```js
const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
 '/',
 '/styles/main.css',
 '/script/main.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});
```
The next example of promises is the fetch api, a replacement for XHR. In this example we complete the following activities:

1.	Retrieve the image from Codepen
2.	Convert the response to an image blob
3.	Create a URL object for the image blob
4.	Create an image element
5.	Make the src of the image the URL we created in the step 3
6.	Attach the image to the document


```js
fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/32795/coffee2.png') // 1
 .then((response) => {
   if (response.ok) {
     console.log('it worked :)')
     return response.blob(); // 2
   } else {
     throw new Error('There was a problem with the network response.' );
   }
 })
 .then((myBlob) => {
   let objectURL = URL.createObjectURL(myBlob); // 3
   let myImage = document.createElement('img'); // 4
   myImage.src = objectURL; // 5
   document.body.appendChild(myImage); // 6
 })
 .catch((error) => {
   console.log(
     'There has been a problem with your fetch operation: ',
     error.message
   );
 });
```

The idea is that the browser will fetch the image and then execute each then block in sequence. If there is any error we jump to the catch block and execute the code there; in this case we log the error to the console; in a real-world application we may want to fetch data from a backup source… catch gives you an elegant way to recover that may include other promises and their respective chains.

### <a id="javascript-promises-terminology"></a>Terminology definition

The function passed to new Promise is called the executor. When the promise is created, this executor function runs automatically. It contains the code that should eventually produce a result.

When the executor finishes the job, it should call one of the functions that it gets as arguments:

* resolve(value) &mdash; to indicate that the job finished successfully:
  * sets state to "fulfilled",
  * sets result to value.
* reject(error) &mdash; to indicate that an error occurred:
  * sets state to "rejected",
  * sets result to error.

Further terminology definitions:
* Pending: The promise is waiting on a result. It hasn't fulfilled or rejected yet
* Settled: The promise is done, either it has fulfilled or it has rejected. It’s easier to say than fulfilled or rejected all the time

Keep this terminology in mind when working with promises and the code that uses them.

### <a id="javascript-promises-parallel"></a>Parallel Promises: promise.all and promise.race

So far we’ve talked about executing one promise at a time with then and failing the single promise with catch. There are way to run multiple promises in parallel: promises.all and promises.race.

Promise.all takes an array of promises and will fulfill only if all promises in the array fulfill and will reject if any of the promises in the array reject.

The example below fetches two items. It will only fulfill if both promises do so, otherwise it will reject.  Imagine that we’re fetching information to populate our page with content. In that case it makes no sense to get partial data. Either we get it all or we get none.

```js
let request1 = fetch('/users.json');
let request2 = fetch('/articles.json');

Promise.all([request1, request2])
  .then(function(results) {
    alert('Both promises done!');
  });
```

Promise.race returns a Promise that is settles and takes the same value of the first promise that settles (success or failure) amongst the promises in the array we pass as a parameter.

This example creates two promises using setTimeout. Both will fulfill but promise2 will do so faster so promise.race will settle with that value and log 'two' to the console.

```js
let promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'one');
});

let promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(function(value) {
  console.log(value);
});
```

If the array contains one or more non-promise value promises that have already settled, then Promise.race will resolve with the first of these values found in the array.

### <a id="javascript-promises-finally"></a>Keeping code DRY: promise.finally

Until `promise.finally` was introduced there was no way to avoid code repetition. We had to write the same code multiple times, at least once for success and once for failure.

In the example, `fetchAndDisplay` takes two parameters, a URL and the element you want to insert the content into.

The original version does the following:

- shows a loading spinner to indiccate the content is loading
- Fetches the URL
- If the fetch succeeds
  - Insert the text into the element
  - Hide the loading spinner
- If it fails
  - Insert an error message into the text element
  - Hide the loading spinner

This is a short example but it shows one of the reasons why we need a `finally` block. the `hideLoadingSpinner` function is called in muliple locations of `fetchAndDisplay`.  In this case it's simple but you can imagine the potential damage if we were cleaning data after we complete a large transaction, whether success or failure.

```javascript
const fetchAndDisplay = ({ url, element }) => {
  showLoadingSpinner();
  fetch(url)
    .then((response) => response.text())
    .then((text) => {
      element.textContent = text;
      hideLoadingSpinner();
    })
    .catch((error) => {
      element.textContent = error.message;
      hideLoadingSpinner();
    });
  };

fetchAndDisplay({
  url: someUrl,
  element: document.querySelector('#output')
});
```

The `finally` block takes care of the code dupplication. It will run once whether the promise fulfills or rejects. Since we want to hide the spinner regardless of whether it succeeds or fails we put it in the `finally` block.  The code now looks like this.

```javascript
const fetchAndDisplay = ({ url, element }) => {
  showLoadingSpinner();
  fetch(url)
    .then((response) => response.text())
    .then((text) => {
      element.textContent = text;
    })
    .catch((error) => {
      element.textContent = error.message;
    })
    .finally(() => {
      hideLoadingSpinner();
    });
};
```

Again, this is a simple example that runs a single function but you can imagine how this would look if we had to do database teardwon or some other long and expensive operation.

### <a id="javascript-promises-build-your-own"><a>Building your own promises

There may be times when you need to wrap your code on promises to make sure that they execute asynchronously.  This is particularly important when working with older APIs that are not promise based or that provide synchronous results.

In the example below we wrap the setTimeout call with a promise Since setTimeout doesn’t fail we can skip the reject callback.

```js
let myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve('Success!');
  }, 2000);
});
```

Once myFirstPromise has been created as a promise-based function we can use the promise API methods to create our asynchronous code. The Promise API’s resolve() method will fulfill the promise

In the follow up example we call myFirstPromise and then chain a response that will log a message from the promise and an additional message to the console. We don’t really need the catch block.

```js
myFirstPromise
  .then((message) => {
     console.log('Yay! ' + message);
  })
});
```

We can create a promise that rejects using the reject() method. The signature of the function is the same. The main difference is inside the body of the function. If we want to reject the promise then we use the reject() method.

```js
let mySecondPromise = new Promise((resolve, reject) => {
  setTimeout(function(){
    reject('Not Enough Space');
  }, 2000);
});
```

When using mySecondPromise() it will automatically trigger an error and, automatically, jump to the catch() section of the promise chain.  In the example below, we could skip the then() portion altogether,

```js
mySecondPromise
 .catch((error) => {
   console.log('There was an error: ' + error);
 });
```

You may also see code as the examples below showing only then() with two parameters, one for success and one for failure. Which one will run depends on whether the promise resolved or rejected.

When the promise resolves successfully then the following promise will triggers with the first arrow function that will show success.

However, if the promise rejects, then the second function inside then() block will trigger.

```js
promise.then(
  (result) => alert(result), // doesn't run
  (error) => alert(error) // shows error message after 1 second
);
```

This is equivalent to the more verbose:

```js
promise.then((result) => {
 alert(result); // this will not run
})
.catch((error) => {
 alert(error);
})
```

Even though both forms are correct, I would still use the more verbose mode using both then and catch. It makes the code easier to reason through.

### <a id="javascript-promises-polyfill-feature-detect"><a>Feature Detection and Polyfill

Detecting promise support is a matter of testing if 'Promise' is available in the window object, otherwise, we can run an API that is supported in the older browsers you're targeting.

This is one way you can do it:

```js
if (!'Promise' in window) {
  console.log('promises are not supported');
} else {
  console.log('promises are supported, yay!');
  // Use the polyfill for older browsers
}
```

Promises can be polyfilled in multiple ways:

* You can use es6-polyfill as a direct polyfill
* Use Babel to transpile your promise-based code to ES5 for older browsers
* Use an existing promise library like  Q or Bluebird to support promises for all your users.

As the need to support browsers decreases, your code will not need polyfills and you can rely on native promise implementations exclusively.

### <a id="javascript-promises-when"></a>When would you use it?

Promises are a good way to build asynchronous applications when we don’t know the return value of a function or when don’t know how long will it take for the code inside the promise to complete.  They will work in the latest version of all modern browsers; according to caniuse.com promises will not work in Opera Mini and IE 11 and earlier versions.

Most recent Web APIs are promise-based and when you use them you’re using you are using promises
 
## <a id="javascript-asycn-await"></a>Async/Await

New in ES2017 are async functions and the await keyword that will make writing async code easier to read, reason through and understand what caused any error that may get thrown. The hardest part, for me, of working with ES2016 and later is that I don't always see the reasoning behind the new code, the older version of the code still work just as fine.

Async / Await are different. They look a lot like the synchronous callback code that we used to work with in the ES5 days but they produce the same asynchronous result as if we were writing promises.

### <a id="javascript-asycn-await-sequential"></a>Async code running sequentially

Take the following code that represents sequential asynchronous calls

```js
async function asyncFunc() {
   const result1 = await AsyncFunc1();
   console.log(result1);
   const result2 = await AsyncFunc2();
   console.log(result2);
}
```

And compare it with the code that produces the same result using promises:

```js
function asyncFunc() {
   return AsyncFunc1()
   .then((result1) => {
       console.log(result1);
       return AsyncFunc2();
   })
   .then(result2 => {
       console.log(result2);
   });
}
```

As you can see the main difference is that await takes place of the then block. The code is cleaner and it makes more sense to me (not that the promise code is hard to read, just not as clean).

### <a id="javascript-asycn-await-parallel"></a>Async code running in parallel

The code works and it's cleaner but it's sequential. The await statements run sequentially and will wait for one promise to return before executing the next. There are times when we want to run all our promises in parallel either because we want the code to run fast or because we have enough promises that running them sequentially would slow the code execution too much.

To run promises in parallel we use Promise.all. Just like in promise based code we build an array of promises that will fulfill if all promises succeed or fail if anyone of those promises fail.

Here is the async / await code to log the result of two promises.

```js
async function asyncFunc() {
   const [result1, result2] = await Promise.all([
     otherAsyncFunc1(),
     otherAsyncFunc2(),
   ]);
   console.log(result1, result2);
}
```

With the corresponding promise based code. See how similar the two are?

```js
function asyncFunc() {
   return Promise.all([
      otherAsyncFunc1(),
      otherAsyncFunc2(),
   ])
   .then((result1, result2) => {
      console.log(result1, result2);
   });
}
```

### <a id="javascript-asycn-await-errors"></a>Error handling

Next, we need to look at how to handle errors. To me this was the most surprising part of the exercise, going back to using try / catch blocks to handle errors just like the old synchronous code we used to write, except that it's running the code sequentially and waits for each task to complete before performing the next.

```js
async function fetchJson(url) {
   try {
       let request = await fetch(url);
       let text = await request.text();
       return JSON.parse(text);
   }
   catch (error) {
       console.log(`ERROR: ${error.stack}`);
   }
}
```
### <a id="javascript-asycn-await-finally"></a>Keeping it DRY: Using finally

Just like we did with promises, we can use `finally` to run code regardless of whether the `await` statements succceeds or we have to run the code in the catch statement.

```javascript
const fetchAndDisplay = async ({ url, element }) => {
  showLoadingSpinner();
  try {
    const response = await fetch(url);
    const text = await response.text();
    element.textContent = text;
  } catch (error) {
    element.textContent = error.message;
  } finally { // This will run oncce regardless
    hideLoadingSpinner();
  }
};
```

### <a id="javascript-asycn-await-example1">Example: Font loading with async and await

The following script uses Font Face Observer to ensure  that readers get a  consistent reading experience and  control font behavior in my pages. The full script is shown below:

The script uses FontFaceObserver to load each font. Then we use parallel promises check that all the fonts have loaded and modify the classes in the html element to reflect this.

If any of the promises reject, the catch block will change the class of the HTML element  to indicate failure.

All the CSS classes use different fonts based on if the fonts loaded successfully or not.

```js
const mono = new FontFaceObserver('notomono-regular');
const sans = new FontFaceObserver('notosans-regular');
const italic = new FontFaceObserver('notosans-italics');
const bold = new FontFaceObserver('notosans-bold');
const bolditalic = new FontFaceObserver('notosans-bolditalic');

let html = document.documentElement;

html.classList.add('fonts-loading');

Promise.all([
 mono.load(),
 sans.load(),
 italic.load(),
 bolditalic.load()
]).then(() => {
 html.classList.remove('fonts-loading');
 html.classList.add('fonts-loaded');
 console.log('All fonts have loaded.');
}).catch(() =>{
 html.classList.remove('fonts-loading');
 html.classList.add('fonts-failed');
 console.log('One or more fonts failed to load')
});
```

The next example takes the same script and changes to use async / await.

The code is wrapped in an async function. The async keyword is not allowed at the top level of a script.

In the try block we await the promise.all array to complete and change the classes accordingly if the code succeeds (meaning that all promises fulfilled).  This is equivalent to the .then() block in the promise version.

In the catch block we handle failure by adding the appropriate classes. This is equivalent to the .catch() block in the promise code.

Finally, because we wrapped the code in a function we need to call the function for it to run.

```js
const mono = new FontFaceObserver('notomono-regular');
const sans = new FontFaceObserver('notosans-regular');
const italic = new FontFaceObserver('notosans-italics');
const bold = new FontFaceObserver('notosans-bold');
const bolditalic = new FontFaceObserver('notosans-bolditalic');

let html = document.documentElement;

html.classList.add('fonts-loading');

async function loadFonts() {
 try {
   const results = await Promise.all([
     mono.load(),
     sans.load(),
     italic.load(),
     bold.load(),
     bolditalic.load()
   ]);
   html.classList.remove('fonts-loading');
   html.classList.add('fonts-loaded');
   console.log('All fonts have loaded.');
   return results;
 }
 catch (error) {
   html.classList.remove('fonts-loading');
   html.classList.add('fonts-failed');
   console.log('One or more fonts failed to load')
 }
}

loadFonts();
```

Another example is how would our fetch call look in a async / await, try / catch blocks.

Using the promise code that fetches and displays an image, we’ve made it into an async function that uses await to wait for portions of the code to complete

```js
async function loadImage() {
 try {
   const response = await fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/32795/coffee2.png')

   const myBlob = await response.blob();
   const objectURL = await URL.createObjectURL(myBlob);
   const myImage = await document.createElement('img');

   myImage.src = objectURL;

   document.body.appendChild(myImage);
 }
 catch(error) {
   console.log(
     'There has been a problem with your fetch operation: ', error.message
   );
 }
}

loadImage();
```

Async functions and the await keyword are fully supported in modern browsers but not in older versions, Internet Explorer and Opera Mini.

### <a id="javascript-async-different"></a>How is async/await different? When would you use it?

For short scripts and promise chains there is no difference between using Promises directly or using the syntactic sugar in async / await. For more complex code or applications with many nested promises, async / await provides a cleaner, more synchronous looking syntax for your asynchronous code.

One consideration is support for older browsers. Using Babel and preset-env to write your applications using the latest Javascript and let Babel figure out what changes are needed for your user’s browsers. This will reduce the Javascript payloads by eliminating unneeded transpilations of features that browsers support natively.


</section>
