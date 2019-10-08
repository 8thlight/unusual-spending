# Cheat Sheet

In case you're not super-familiar with Node/JS development. And to help you
along with teenytest and testDouble.

## Stack

This a node module using JavaScript. If you start importing TypeScript or React
as part of the exercise you are way off the reservation and have missed the
point.

## Local Modules

The `email` and `payment` local modules are written by your "coworkers" and
cannot be changed. You do not own these modules. You can look at them,
naturally.

## Require and module.exports

Each JavaScript file is itself it's own module, within the larger
`unusual_spending` module. The line `module.exports =` is required in the Node
module system if you want to make the code accessible to the outside world. You
can export an object or a function simply by saying `module.exports = <thing>`.

There's more to it than that but that's sufficient for this exercise. Requiring
a module is done with the `require` function which loads the module and returns
its exports which you set to a variable.

## TeenyTest

The teenytest framework is written by Justin Searls over at test double. The way
it works is any module in the `lib\test` directory is a test. If you export a
function then only one test will be in that module. If you export an object then
every method on that object will also be a test.

## TestDouble.js

Test Double is a dynamic mock framework and dependency injector, also written by
Justin at TestDouble. The way it works is `td.replace` monkey patches the
`require` function. It will require the actual module specified, and then
return a test mock instead that matches the actual module. It will also
ensure that any other place that requires that module will actually get the
mock.

You should `replace` any modules BEFORE you require any real objects. To make
sure they get the mocks.

TestDouble.js also has a simple assertion and stubbing. `when` is a stubbing
function. It takes the function you expect to be called (with parameters) and
then you can stub its return value. `thenReturn` or `thenCallback` are being
used today.

You can also verify methods are called with the `verify` function. Further docs
can be found here.

## Node Assert library

Teenytest doe snot have an assertion library - instead using the standard Node
assert. You can find docs for it here
https://nodejs.org/docs/latest-v11.x/api/assert.html (make sure you set the docs
to your version of Node) but the simplest is to use `assert.ok` or `assert.equal`.
