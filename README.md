# Coding Challenge


## TODO:

 object tests
 object of object tests
 array of object tests
 object of array tests
 hacker tests (i.e. someone redefining undefined or infinity etc. (what other primitives are redefiniable?)
 message tests - should be outputting a good message
 check for cycles in arrays/ objects
 remove any usage of json.stringify / parse etc.
 perf analysis?


From: https://jsbin.com/makohefame/1/edit?html,js,output

## Terms of the Exercise

 * Try and stay away from libraries if possible
 * You can take as long as you like to complete the exercise, but for an indicative timescale we expect a senior developer can accomplish this in an hour.
 * You may use online resources to assist you with specific techniques, syntax etc. but please do not just copy code.
 * Please don't share this exercise with any third party

## The Challenge

The aim of the exercise is to demonstrate your problem solving and understanding of JavaScript by implementing something found in every unit testing tool - an "assertEquals" method.

 *  Fill in the "assertEquals" function such that it will correctly compare the passed "expected" vs "actual" parameters.
 *  You may add more functions.
 *  Credit will be given for approach, correctly identifying "failed" assertEquals, **clean, testable** code and coding style.
 *  The set of tests provided isn't exhaustive - there are cases that they don't handle.

## Expected Result

The following tests should "fail": **02, 03, 04, 07, 08 and 09** - and the failures should be reported using the provided mechanism.  
Ideally the failure messages should report further information:

 *  Test 02: Expected "abcdef" found "abc"
 *  Test 03: Expected type Array but found Object
 *  Test 04: Expected array length 2 but found 3
 *  Test 07: Expected propB.propA\[1\].propB "b" but found "c"
 *  Test 08: Expected propB.propC but was not found
 *  Test 09: Expected type null but found type Object
