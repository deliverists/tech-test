# Coding Challenge

## Assumptions made:

There are some decisions that have to be made when deciding how to implement assertEquals to decide what exactly equality means when it comes to complex objects. A couple assumptions I have made are:

 * I am purposely allowing a property check into the prototype chain. I believe the "user" of an object shouldn't care how a property is getting returned (whether it be from the object itself or from it's prototype) to consider it equal.  The same is true to whether it is being retrieved via an ES6 Proxy object or via a special getter method that might be different on 2 different objects. Some of these things are possible to check for and some aren't. I believe a safer decision when judging equality is merely "does the property exist on both objects and do they return the same value". I don't care how the object returns that value.

 * I am also purposely ignoring the order that properties exist on an object. I realise that this could be argued that order of properties is important as it's possible to loop through properties by index. However, I believe that a typical use case of an objects properties wouldn't care about order so I'm not either.

 * I noticed that a complexity in the "Expected output" in the "terms of the exercise" is that in some instances the word "but" is used and in some it isn't. I decided to "change the game" a bit here for simplicity and therefore my expectations are that the word "but" ALWAYS should appear. In the real world this is the kind of subtlety I would discuss with business owners/ customers to see whether this subtle complexity in the specification is really desired or not before writing the more complex solution to cover it.

 * I have also decided not to publish the "ancestor keys" into the message in other places it might be appropriate - this was merely because of time constraints.

 * I have made some shortcuts that given more time I would clean up - When I build the string to create the "ancestor keys" in the message I make a big assumption that any key beginning with a '[' is an array index instead of a property name. Instead I would refactor this to pass the type as well as the property name in the state in the future.

 * Note: I'm also aware there are some edge cases of equality here that I am not solving but I believe a more complete solution is outside the realms of this technical test.

## TODO:

 refactor duplication in message asserts around joining the ancestor keys
 refactor message asserts - so all our expectations are on exact string and no duplication in tests
 objects that are same except different prototypes?
 non enumerable properties?
 symbol?
 hacker tests (i.e. someone redefining undefined or infinity etc. (what other primitives are redefiniable?)
 check for cycles in arrays/ objects
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
