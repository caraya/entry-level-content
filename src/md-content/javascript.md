<section data-type="chapter">

# <a id="javascript"></a>JavaScript Basics

This chapter will cover the basics of Javascript. The idea is that code written following this chapter will work in all browsers but will not support the latest features. Future chapters will cover more advanced language features and APIs

## <a id="javascript-values"></a>Values, Types, and Operators

### <a id="javascript-values-numbers"></a>Numbers

Javascript number values are, unsurprisingly, numeric values. In a JavaScript program, they are written as follows:

```js
13
```
Use that in a program, and it will cause the bit pattern for the number 13 to come into existence inside the computer’s memory.

JavaScript uses a fixed 64 bits (8 bytes) to store a single number value. There are only so many patterns you can make with 64 bits, which means that the number of different numbers that can be represented is limited.

Javascript, and the computer running it, have to take other things into account when working with numbers. Some of these numbers are negative, meaning that there is a sign indicating a negative number... that sign uses a bit to indicate the sign of a number. Another issue is that nonwhole numbers must also be represented. To do this, some of the bits are used to store the position of the decimal point. The actual maximum whole number that can be stored is more in the range of 9 quadrillion (15 zeros)—which is still pleasantly huge.

Fractional numbers are written by using a dot.

```js
9.81
```

For very big or very small numbers, you may also use scientific notation by adding an e (for exponent), followed by the exponent of the number.

```js
2.998e8
```

That is 2.998 × 108 = 299,800,000.

Calculations with whole numbers (also called integers) smaller than the aforementioned 9 quadrillion are guaranteed to always be precise. **Unfortunately, calculations with fractional numbers are generally not**. Just as &pi; (pi) cannot be precisely expressed by a finite number of decimal digits, many numbers lose some precision when only 64 bits are available to store them. This is a shame, but it causes practical problems only in specific situations. The important thing is to be aware of it and treat fractional digital numbers as approximations, not as precise values.

#### Arithmetic

The main thing to do with numbers is arithmetic. Arithmetic operations such as addition or multiplication take two number values and produce a new number from them.

The + and * symbols are called operators. The first stands for addition, and the second stands for multiplication. Putting an operator between two values will apply it to those values and produce a new value.

The basic arithmetic operators are:

<table>
  <thead>
    <tr>
      <th>Operator</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Addition (+)</td>
      <td>Binary Operator. Returns the total of the two operatands</td>
      <td> 3 + 2 = 5</td>
    </tr>
    <tr>
      <td>Subtraction <br>
        <td>Binary Operator. Returns the difference of the two operands</td>
      <td>3 - 2 = 1</td>
    </tr>
    <tr>
      <td>Multiplication (*)</td>
      <td>Binary Operator. Returns the first operand to itself a specified number (the second operand) of times</td>
      <td>3 * 2 = 6</td>
    </tr>
    <tr>
    <tr>
      <td>Division (/)</td>
      <td>Binary Operator. Returns the number of times one number is contained within another one. This number of times is not always an integer.</td>
      <td>3 / 2 = 0 When working with integers</td>
    </tr>
      <td>Remainder (%)</td>
      <td>Binary operator. Returns the integer remainder of dividing the two operands.</td>
      <td>12 % 5 = 2</td>
    </tr>
  </tbody>
</table>

Here's what an math expression looks like in Javascript.

```js
100 + 4 * 11
```

The example doesn't mean &rdquo;add 4 and 100, and multiply the result by 11&ldquo;. Rather it means &rdquo;multiply 4 times 11 and add 100&ldquo;.

But as in mathematics, you can change this by wrapping the addition in parentheses.

```js
(100 + 4) * 11
```

When operators appear together without parentheses, the order in which they are applied is determined by the precedence of the operators.

<table>
  <thead>
    <tr>
      <th>Operator type</th>
      <th>Associativity</th>
      <th>Individual operators</th>
    </tr>
  </thead>
  <tbody>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Multiplication">Multiplication</a></td>
   <td>left-to-right</td>
   <td><code>3 * 2</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Division">Division</a></td>
   <td>left-to-right</td>
   <td><code>3 / 2</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder">Remainder</a></td>
   <td>left-to-right</td>
   <td><code> 3 % 2</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition">Addition</a></td>
   <td>left-to-right</td>
   <td><code> 3 + 2</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators.html#Subtraction">Subtraction</a></td>
   <td>left-to-right</td>
   <td><code>3 - 2</code></td>
  </tr>
 </tbody>
</table>

When multiple operators with the same precedence appear next to each other, as in 1 - 2 + 1, they are applied left to right: (1 - 2) + 1.

<div class="info">
  <p>These rules of precedence are not something you should worry about in everyday code. When in doubt, just add parentheses.</p>
</div>

There is one more arithmetic operator, which you might not immediately recognize. The % symbol is used to represent the remainder operation. X % Y is the remainder of dividing X by Y. For example, 314 % 100 produces 14, and 144 % 12 gives 0. The remainder operator’s precedence is the same as that of multiplication and division. You’ll also often see this operator referred to as modulo.

#### <a id="javascript-values-special-numbers"></a>Special Numbers

There are three special values in JavaScript that are considered numbers but don’t behave like numbers.

The first two, `Infinity` and `-Infinity`, represent the positive and negative infinities. Don’t put too much trust in infinity-based computation, though. It isn’t mathematically sound, and it will quickly lead to the next special number: NaN.

`NaN` stands for &rdquo;not a number&ldquo;, even though it is a value of the number type. You’ll get this result when you do things that don’t yield a meaningful result.

### <a id="javascript-values-strings"></a>Strings

The next basic data type is the string. Strings are used to represent text. They are written by enclosing their content in quotes, either single, double or backticks.

```js
console.log('Float on the ocean');
console.log("Lie on the ocean");
console.log(`Down on the sea`);
```

Make sure the quotes at the start and the end of the string match.

You can make a string of almost anything between the quotes. But a there are some charactters that deserve special attention. When you want to put quotation marks inside a string you have to alternate.

```js
console.log("This 'will work'");
console.log('This "will work"');
console.log(`This "Will Work"`)

console.log("this "will not work"");
console.log('this 'will not work'');
```

The reason it won't work if you use the same type of quotation marks is that the Javascript engine believes the second quotation ends the string.  If you alternate the type of quotation marks or use backticks then you can use either type of quotation marks. It will work.

The same thing happens if you need to use a single quotation mark as an apostrophe.

```js
console.log('I don't think this will work');

console.log('but I don\'t have a doubt this will');
console.log("but I don't have a doubt this will");
console.log(`but I don't have a doubt this will`)
```

Newlines (the characters you get when you press enter) can be included without escaping only when you use backticks  (`) to enclose the string.

To make it possible to include such characters in a regular string, we use a backslash (`\`) to indicates that the following character has a special meaning. We call this  escaping the character.

A quote that is preceded by a backslash (`\'` or `\"`) will not end the string but be part of it.

When an n character occurs after a backslash (`\n`), it is interpreted as a newline.

Similarly, a t after a backslash (`\t`) means a tab character. Take the following string:

```md
"This is the first line\nAnd this is the second"
```
The actual text contained is this:

```md
This is the first line
And this is the second
```

There are, of course, situations where you want a backslash in a string to be just a backslash, not a special code. If two backslashes follow each other (`\\`), they will collapse together, and only one will be left in the resulting string value. This is how the string “A newline character is written like "\n".” can be expressed:

```js
console.log("A newline character looks like this \"\\n\".");
```
Strings, too, have to be modeled as a series of bits to be able to exist inside the computer. JavaScript uses the Unicode standard. Unicodde assigns a number character you would from just about every language in the world, including Greek, Arabic, Japanese, Armenian, andothers. If we have a number for every character, a string can be described by a sequence of numbers.

And that’s what JavaScript does. But there’s a complication: JavaScript’s representation uses 16 bits per string element, which can describe up to 216 different characters. But Unicode defines more characters than that—about twice as many, at this point. So some characters, such as many emoji, take up two “character positions” in JavaScript strings.

We cannot perform arithmethic operation on strings but the + operator can be used on them. It does not add, but it concatenates—it glues two strings together.

The following line will produce the string "concatenate":

```js
console.log("con" + "cat" + "e" + "nate");
```
String values have a number of associated functions (methods) that can be used to perform other operations on them. We'll discuss these methods in a later chapter

Strings written with single or double quotes behave very much the same—the only difference is in which type of quote you need to escape inside of them. Backtick-quoted strings, usually called template literals, can do a few more tricks. Apart from being able to span lines, they can also embed other values.

```js
console.log(`half of 100 is ${100 / 2}`);
// half of 100 is 50
```

When you write something inside ${} in a template literal, its result will be computed, converted to a string, and included at that position.

We'll revisit string template literals in a later section

#### <a id="javascript-unary-operators"></a>Unary Operators

Unlike arithmetic operators that require two values to work, unary operators require just one operand to work

<table>
  <tbody>
    <tr>
      <th>Operator</th>
      <th>Explanation</th>
      <th>Example</th>
    </tr>
    <tr>
      <td><strong>Unary plus (+)</strong></td>
      <td>Tries to convert the operand into a number if it's not one already.</td>
      <td>+5</td>
    </tr>
    <tr>
      <td>*<em>Unary negation (-) *</em></td>
      <td>Tries to convert the operand into a number if it's not one already and negates after</td>
      <td>-5</td>
    </tr>
    <tr>
      <td><strong>Increment (++)</strong></td>
      <td>Adds one to its operand</td>
      <td>i++</td>
    </tr>
    <tr>
      <td><strong>Decrement (--)</strong></td>
      <td>Decrements by one from its operand</td>
      <td>i--</td>
    </tr>
  </tbody>
</table>

### <a id="javascript-values-booleans"></a>Booleans

It is often useful to have a value that distinguishes between two possibilities, like “yes” and “no” or “on” and “off”. For this purpose, JavaScript has a Boolean type, which has just two values, true and false, which are written as those words.

```js
console.log(3 > 2)
// Is 3 greater than 2?
// → true (yes, it is)
console.log(3 < 2)
// Is 3 less than 2?
// → false (no, it isn't)
```

#### <a id="javascript-logical-operators"></a>logical Operators

Logical operators work on Boolean values. JavaScript supports three logical operators: and, or, and not. These can be used to “reason” about Booleans.

The && operator represents logical and. It is a binary operator, that returns true only if both the values given to it are true.

```js
console.log(true && false)
// → false
console.log(true && true)
// → true
```

The || operator denotes logical or. It returns true if either of the values given to it is true.

```js
console.log(false || true)
// → true
console.log(false || false)
// → false
```

Not is written as an exclamation mark (!). It is a unary operator that flips the value given to it converting it to its opposite; true (!true) converts to false and false (!false) coonverts to true

When mixing these Boolean operators with arithmetic and other operators, it is not always obvious when parentheses are needed. We can get by knowing that of the operators we have seen so far, || has the lowest precedence, then comes &&, then the comparison operators (>, ==, and so on), and then the rest. This order has been chosen such that, in typical expressions like the following one, as few parentheses as possible are necessary:

```js
1 + 1 == 2 && 10 * 10 > 50
```

The last logical operator we'll cover is the ternary operator, operating on three values. It is written with a question mark and a colon:

```js
console.log(true ? 1 : 2); // → 1
console.log(false ? 1 : 2); // → 2
```

This one is called the conditional operator (or sometimes just the ternary operator since it is the only such operator in the language).

The value on the left of the question mark is the condition. When the condition is true, it chooses the middle value, and when it is false, it chooses the value on the right.

### <a id="javascript-empty-values"></a>Empty Values

null and undefined are two special values that denote the absence of a meaningful value. They are themselves values without any information attached.

Many operations in the language that don’t produce a value return undefined because they have to return something.

There are two features of null you should understand:

* null is an empty or non-existent value
* null must be assigned. It is not possible for something to be null by default

In this example, we assign null to variable a:

```js
let a = null;
console.log(a); // null
```

Undefined most typically means a variable has been declared, but not defined. When you create a variable but don't assign a value to it it is undefined by default.

```js
let a;
console.log(a);
```

The difference in meaning between undefined and null is an accident of JavaScript’s design, and it doesn’t matter most of the time. In cases where you actually have to concern yourself with these values, I recommend treating them as mostly interchangeable.

### <a id="javascript-auto-conversion"></a>Automatic Type Conversion

JavaScript goes out of its way to accept almost any program you give it, even programs that do odd things. This is nicely demonstrated by the following expressions:

```js
console.log(8 * null) // → 0
console.log("5" - 1) // → 4
console.log("5" + 1) // → 51
console.log("five" * 2) // → NaN
console.log(false == 0) // → true
```
When an operator is applied to the “wrong” type of value, JavaScript will quietly convert (coerce) that value to the type it needs, using a set of rules that often aren’t what you want or expect.

* The null in the first expression becomes 0,
* The string "5" in the second expression becomes the number 5
* In the third expression, the + operator tries string concatenation before numeric addition, so the number 1 is converted to the string "1". The result is "51" rather than 6

When something that doesn’t map to a number in an obvious way (such as "five" or undefined) is converted to a number, you get the value `NaN`. Further arithmetic operations on `NaN` will all result in `NaN`, so if you get NaN in unexpected place, look for type coercion as the cause.

When comparing values of the same type using ==, the outcome is easy to predict: you should get true when both values are the same, except in the case of NaN.

But when the type of both values differ, JavaScript tries, in most cases, to convert one of the values to the other value’s type. However, when null or undefined occurs on either side of the operator, it produces true only if both sides are one of null or undefined.

```js
console.log(null == undefined);
// → true
console.log(null == 0);
// → false
```

When you want to test whether a value has a real value instead of null or undefined, you can compare it to null with the == (or !=) operator.

But what if you want to test whether something refers to the precise value false? Expressions like 0 == false and "" == false are also true because of automatic type conversion. When you don't want any type conversions to happen, use the strict equality operators: === and !==. The first tests if two values are precisely equal , and the second tests two values are not precisely equal.

If you know the type of the values you're working with then you're fine with using `==`. But, if you're working with user values or in situations where you don't know the type of the values that you'll get then be defensive and use `===`.

### <a id="javascript-logical-short-circuits"></a>Short-circuiting of logical operators

The  && and || logical operators will convert the value on their left side to Boolean type in order to decide what to do, but depending on the operator and the result of that conversion, they will return either the original left-hand value or the right-hand value.

The || operator will return the value to its left when that can be converted to true and will return the value on its right otherwise. This has the expected effect with Boolean values and does something analogous for values of other types that will be converted to its Boolean equivalent.

```js
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// Both agnes and user convert to true
// → Agnes
```

We can use this functionality as a way to fall back on a default value. If you have a value that might be empty, you can put || after it with a replacement value. If the initial value can be converted to false, you’ll get the replacement instead.

The && operator works similarly but the other way around. When the value to its left is something that converts to false, it returns that value, and otherwise it returns the value on its right.

```js
console.log("" && "user")
// Empty string converts to false
// → ""
console.log("Agnes" && "user")
// Both agnes and user convert to true
// → user
```

Another important property of these two operators is that the part to their right is evaluated only when necessary. In the case of `true || X`, because the first operand is true, X will never evaluate. The same goes for `false && X`, because the first operand is false, X will never be evaluated. This is called short-circuit evaluation.

The conditional operator works in a similar way. Using `value ? 1 : 2` as an example, only one of the the second and third values will be evaluated depending on whether value is true or false.

## <a id="javascript-program-structure"></a>Program Structure

### <a id="javascript-expressions-and-statements"></a> Expressions and statements

In the last section we created values and applied different operators to them too get new values. This is the core of any Javascript. But values need larger structures be useful.

A fragment of code that produces a value is called an expression. Every literal value (such as 22 or "psychoanalysis") is an expression. An expression between parentheses is also an expression, as is a binary operator applied to two expressions or a unary operator applied to one.

Expressions can contain other expressions in a way similar to how subsentences in human languages are nested &mdash; a subsentence can contain its own subsentences, and so on. This means we can build expressions that describe arbitrarily complex computations.

If an expression corresponds to a sentence fragment, a JavaScript statement corresponds to a full sentence. A program is a list of statements.

The simplest kind of statement is an expression with a semicolon after it. This is a program:

```js
1;
!false;
```

It is a useless program, though.

An expression produces a stand alone value that only amounts to something if it affects the world. These effects can range from displaying soomething on the screen to changing the internal status of the machine so future expressions are affected.

The statements in the previous example just produce the values 1 and true and then immediately throw them away. This leaves no impression on the world at all. When you run this program, nothing observable happens.

In some cases, JavaScript allows you to omit the semicolon at the end of a statement. In other cases, it has to be there, or the next line will be treated as part of the same statement. To avoid errors and the complexities of semicolons, this chapter will always use semicolons where they are needed.

### <a id="javascript-variables"></a>variables

How does a program keep an internal state? How does it remember things? We have seen how to produce new values from old values, but this does not change the old values, and the new value has to be immediately used or it will dissipate again. To catch and hold values, JavaScript provides a thing called a variable, or variable:

```js
let caught = 5 * 5;
```

That’s a second kind of statement. The keyword `let` indicates that this sentence is going to define a variable. It is followed by the name of the variable and, if we want to immediately give it a value, by an = operator and an expression.

The previous statement creates a variable called caught and uses it to grab hold of the number that is produced by multiplying 5 by 5.

After a variable has been defined, its name can be used as an expression. The value of such an expression is the value the variable currently holds. Here’s an example:

```js
let ten = 10;
console.log(ten * ten);
// → 100
```

When a variable points at a value, that does not mean it is tied to that value forever. The = operator can be used at any time on existing variables to disconnect them from their current value and have them point to a new one.

```js
let mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark
```

Note that you define the variable using let once.  If we were to change the example above to define the same variable twice, like so:

```js
let mood = "light";
console.log(mood);
// → light
let mood = "dark";
console.log(mood);
// → dark
```

The second definition of mood will return an syntax error because mood was already defined the first time.

You should imagine variables as tentacles, rather than boxes. They do not contain values; they grasp them—two variables can refer to the same value. A program can access only the values that it still has a reference to. When you need to remember something, you grow a tentacle to hold on to it or you reattach one of your existing tentacles to it.

Let’s look at another example. To remember the number of dollars that Luigi still owes you, you create a variable. And then when he pays back $35, you give this variable a new value.

```js
let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105
```

When you define a variable without giving it a value, the tentacle has nothing to grasp, so it ends in thin air. If you ask for the value of an empty variable, you’ll get the value undefined.

A single let statement may define multiple variables. The definitions must be separated by commas.

```js
let one = 1, two = 2;
console.log(one + two);
// → 3
```

The words var and const can also be used to create variables, in a way similar to let.

```js
var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// → Hello Ayda
```

The first, `var` (short for “variable”), is the way variables were declared in pre-2015 JavaScript. we'll discuss the exact differences later in the chapter. For now, remember that it mostly does the same thing, but we’ll rarely use it in this book because it has some confusing properties.

The word `const` stands for constant. It defines a constant variable, which points at the same value for as long as it lives. This is useful for variables that give a name to a value so that you can easily refer to it later.

### <a id="javascript-variable-names"></a>variable names

variable names can be any word. Digits can be part of variable names &mdash; catch22 is a valid name, for example &mdash; but the name must not start with a digit &mdash; 22catch is not a valid name. A variable name may include dollar signs ($) or underscores (_) but no other punctuation or special characters.

Words with a special meaning, such as let, are keywords, and they may not be used as variable names. There are also a number of words that are “reserved for use” in future versions of JavaScript, which also can’t be used as variable names. The full list of keywords and reserved words is rather long.

```markdown
break case catch class const continue debugger
default delete do else enum export extends false
finally for function if implements import interface
in instanceof let new package private protected
public return static super switch this throw true
try typeof var void while with yield
```

Don’t worry about memorizing this list. When creating a variable produces an unexpected syntax error, see whether you’re trying to define a reserved word.

### <a id="javascript-environment"></a>The environment

The collection of variables and their values that exist at a given time is called the environment. When a program starts up, this environment is not empty. It always contains variables that are part of the language standard, and most of the time, it also has variables that provide ways to interact with the surrounding system. For example, in a browser, there are functions to interact with the currently loaded website and to read mouse and keyboard input.

### <a id="javascript-functions">Functions

A lot of the values provided in the default environment have the type function. A function is a piece of program wrapped in a value. Such values can be applied in order to run the wrapped program. For example, in a browser environment, the variable prompt holds a function that shows a little dialog box asking for user input. It is used like this:

Executing a function is called invoking, calling, or applying it. You can call a function by putting parentheses after an expression that produces a function value. Usually you’ll directly use the name of the variable that holds the function. The values between the parentheses are given to the program inside the function. In the example, the prompt function uses the string that we give it as the text to show in the dialog box. Values given to functions are called arguments. Different functions might need a different number or different types of arguments.

The prompt function isn’t used much in modern web programming, mostly because you have no control over the way the resulting dialog looks, but can be helpful in toy programs and experiments.

#### <a id="javascript-consolelog"></a>The console.log Function

Most JavaScript systems (including all modern web browsers and Node.js) provide a console.log function that writes out its arguments to some text output device. In browsers, the output lands in the JavaScript console. This part of the browser interface is hidden by default, but most browsers open it when you press F12 or, on a Mac, command-option-I. If that does not work, search through the menus for an item named Developer Tools or similar.

Though variable names cannot contain period characters, console.log does have one. This is because console.log isn’t a simple variable. It retrieves the log property from the value held by the console variable.

#### <a id="javascript-return-values"></a>Return values

Showing a dialog box or writing text to the screen is a side effect. A lot of functions are useful because of the side effects they produce. Functions may also produce values, in which case they don’t need to have a side effect to be useful. For example, the function Math.max takes any amount of number arguments and gives back the greatest.

```js
console.log(Math.max(2, 4));
// → 4
```

When a function produces a value, it is said to return that value. Anything that produces a value is an expression in JavaScript, which means function calls can be used within larger expressions. Here a call to Math.min, which is the opposite of Math.max, is used as part of a plus expression:

```js
console.log(Math.min(2, 4) + 100);
// → 102
```

### <a id="javascript-control-flow"></a>Control Flows

When your program contains more than one statement, the statements are executed as if they are a story, from top to bottom. This example program has two statements. The first one asks the user for a number, and the second, which is executed after the first, shows the square of that number.

```js
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " + theNumber * theNumber);
```

The function Number converts a value to a number. We need that conversion because the result of prompt is a string value, and we want a number. There are similar functions called String and Boolean that convert values to those types.

### <a id="javascript-conditional-execution"></a>Conditional Execution

Not all programs are straight roads. We may, for example, want to create a branching road, where the program takes the proper branch based on the situation at hand. This is called conditional execution.

Conditional execution is created with the if keyword in JavaScript. In the simple case, we want some code to be executed only if a certain condition is true. We might, for example, want to show the square of the input only if the input is actually a number.

```js
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
}
```

With this modification, if you enter a string, no output is shown.

The if keyword executes or skips a statement depending on the value of a Boolean expression. The deciding expression is written after the keyword, between parentheses, followed by the statement to execute.

The Number.isNaN function is a standard JavaScript function that returns true only if the argument it is given is NaN. The Number function happens to return NaN when you give it a string that doesn’t represent a valid number. Thus, the condition translates to “unless theNumber is not-a-number, do this”.


```js
if (1 + 1 == 2) console.log("It's true");
// → It's true
```

The statement after the if is wrapped in curly braces ({ and }). The braces can be used to group any number of statements into a single block. If the block is one statement then you can omit the braces but to avoid having to think whether they are necessary, most programmers use them in every block.
You often run one block of code when the condition is true and another, different, block when the condition is false. To handle the second block we use the else statement.

```js
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}
```

If you have more than two paths to choose from, you can “chain” multiple if/else pairs together. Here’s an example:

```js
let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}
```

The program will first check whether num is less than 10. If it is, it chooses that branch, shows "Small", and is done. If it isn’t, it takes the else branch, which itself contains a second if. If the second condition (< 100) holds, that means the number is between 10 and 100, and "Medium" is shown. If it doesn’t, the second and last else branch is chosen.

#### <a id="javascript-while-do-loops"></a>While And Do Loops

Consider a program that outputs all even numbers from 0 to 12. One way to write this is as follows:

```js
console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);
```

That works, but the idea of writing a program is to make something less work, not more. If we needed all even numbers less than 1,000, this approach would be unworkable. What we need is a way to run a piece of code multiple times. This form of control flow is called a loop.

#### <a id="javascript-loop-control-flows"></a>Loop control flow

Looping control flow allows us to go back to some point in the program where we were before and repeat it with our current program state. If we combine this with a variable that counts, we can do something like this:

```js
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// → 0
// → 2
//   … etcetera
```

A statement starting with the keyword while creates a loop. The word while is followed by an expression in parentheses and then a statement, much like if. The loop keeps entering that statement as long as the expression produces a value that gives true when converted to Boolean.

The number variable demonstrates the way a variable can track the progress of a program. Every time the loop repeats, number gets a value that is 2 more than its previous value. At the beginning of every repetition, it is compared with the number 12 to decide whether the program’s work is finished.

As an example that actually does something useful, we can now write a program that calculates and shows the value of 210 (2 to the 10th power). We use two variables: one to keep track of our result and one to count how often we have multiplied this result by 2. The loop tests whether the second variable has reached 10 yet and, if not, updates both variables.

```js
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024
```

The counter could also have started at 1 and checked for <= 10, but for reasons that will become apparent in Chapter 4, it is a good idea to get used to counting from 0.

A do loop is a control structure similar to a while loop. It differs only on one point: a do loop always executes its body at least once, and it starts testing whether it should stop only after that first execution. To reflect this, the test appears after the body of the loop.

```js
let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
```

This program will force you to enter a name. It will ask again and again until it gets something that is not an empty string. Applying the ! operator will convert a value to Boolean type before negating it, and all strings except the empty string convert to true. This means the loop continues going round until you provide a non-empty name.

#### <a id="javascript-for-loops"></a>For Loops

Many loops follow the pattern shown in the while examples. First a “counter” variable is created to track the progress of the loop. Then comes a while loop, usually with a test expression that checks whether the counter has reached its end value. At the end of the loop body, the counter is updated to track progress.

Because this pattern is so common, JavaScript and similar languages provide a slightly shorter and more comprehensive form, the for loop.

```js
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
// → 0
// → 2
//   … etcetera
```

The parentheses after a for keyword must contain two semicolons. The part before the first semicolon initializes the loop, usually by defining a variable. The second part is the expression that checks whether the loop must continue. The final part updates the state of the loop after every iteration. In most cases, this is shorter and clearer than a while construct.

This is the code that computes 2 too the 10th power using a for loop:

```js
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024
```

### <a id="javascript-indenting-code"></a>Indenting Code

In the examples, I’ve been adding spaces in front of statements that are part of some larger statement. These spaces are not required—the computer will accept the program just fine without them. In fact, even the line breaks in programs are optional. You could write a program as a single long line if you felt like it.

The role of this indentation inside blocks is to make the structure of the code stand out and make it easier for humans to read. In code where new blocks are opened inside other blocks, it can become hard to see where one block ends and another begins. With proper indentation, the visual shape of a program corresponds to the shape of the blocks inside it. I like to use two spaces for every open block, but tastes differ—some people use four spaces, and some people use tab characters (and the tabs can represent two, four or eight spaces). The important thing is to remain consisten with the number of spaces or tabs that you use.

```js
if (false != true) {
  console.log("That makes sense.");
  if (1 < 2) {
    console.log("No surprise there.");
  }
}
```

Most code editor programs (including the one in this book) will help by automatically indenting new lines the proper amount.


### <a id="javascript-breakint-out-of-a-loop"></a>Breaking Out of a Loop

Having the looping condition produce false is not the only way a loop can finish. There is a special statement called break that has the effect of immediately jumping out of the enclosing loop.

This program illustrates the break statement. It finds the first number that is both greater than or equal to 20 and divisible by 7.

```js
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// → 21
```

Using the remainder (%) operator is an easy way to test whether a number is divisible by another number. If it is, the remainder of their division is zero.

The for construct in the example does not have a part that checks for the end of the loop. This means that the loop will never stop unless the break statement inside is executed.

If you were to remove that break statement or you accidentally write an end condition that always produces true, your program would get stuck in an infinite loop. A program stuck in an infinite loop will never finish running, which is a bad thing.

If you create an infinite loop in one of the examples on these pages, you’ll usually be asked whether you want to stop the script after a few seconds. If that fails, you will have to close the tab that you’re working in, or on some browsers close your whole browser, to recover.

The continue keyword is similar to break, in that it influences the progress of a loop. When continue is encountered in a loop body, control jumps out of the body and continues with the loop’s next iteration.

### <a id="javascript-updating-variables"></a>Updating Variables Succinctly

Especially when looping, a program often needs to “update” a variable to hold a value based on that variable’s previous value.

```js
counter = counter + 1;
```

JavaScript provides a shortcut for this.

```js
counter += 1;
```

Similar shortcuts work for many other operators, such as result *= 2 to double result or counter -= 1 to count downward.

This allows us to shorten our counting example a little more.

```js
for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}
```

For counter += 1 and counter -= 1, there are even shorter equivalents: counter++ and counter--.

Dispatching on a value with switch
It is not uncommon for code to look like this:

```js
if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();
```

There is a construct called switch that is intended to express such a “dispatch” in a more direct way. Unfortunately, the syntax JavaScript uses for this (which it inherited from the C/Java line of programming languages) is somewhat awkward—a chain of if statements may look better. Here is an example:

```js
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
```

You may put any number of case labels inside the block opened by switch. The program will start executing at the label that corresponds to the value that switch was given, or at default if no matching value is found. It will continue executing, even across other labels, until it reaches a break statement. In some cases, such as the "sunny" case in the example, this can be used to share some code between cases (it recommends going outside for both sunny and cloudy weather). But be careful—it is easy to forget such a break, which will cause the program to execute code you do not want executed.

### <a id="javascript-capitalization"></a>Capitalization

variable names may not contain spaces, yet it is often helpful to use multiple words to clearly describe what the variable represents. These are pretty much your choices for writing a variable name with several words in it:

```js
let fuzzylittleturtle = 1;
let fuzzy_little_turtle = 1;
let FuzzyLittleTurtle = 1;
let fuzzyLittleTurtle = 1;
```

The first style can be hard to read. I rather like the look of the underscores, though that style is a little painful to type. The standard JavaScript functions, and most JavaScript programmers, follow the bottom style—they capitalize every word except the first. It is not hard to get used to little things like that, and code with mixed naming styles can be jarring to read, so we follow this convention.

In a few cases, such as the Number function, the first letter of a variable is also capitalized. This was done to mark this function as a constructor. Don't let it bother you, it is what it is.

### <a id="javascript-comments"></a>Comments

Often, raw code does not convey all the information you want a program to convey to human readers, or it conveys it in such a cryptic way that people might not understand it. At other times, you might just want to include some related thoughts as part of your program. This is what comments are for.

A comment is a piece of text that is part of a program but is completely ignored by the computer. JavaScript has two ways of writing comments. Javascript supports both single line and multiline comments.

A single-line comment, you can use two slash characters (//) and then the comment text after it.

```js
let accountBalance = calculateBalance(account);
// It's a green hollow where a river sings
accountBalance.adjust();
// Madly catching white tatters in the grass.
let report = new Report();
// Where the sun on the proud mountain rings:
addToReport(accountBalance, report);
// It's a little valley, foaming like light
// in a glass.
```

A single line comment goes only to the end of the line. A multi line commenct is wrapped by  /* and */ characters and will be ignored in its entirety, regardless of whether it contains line breaks. This is useful for adding blocks of information about a file or a chunk of program.

```js
/*
  I first found this number scrawled on the back of
  an old notebook. Since then, it has often dropped
  by, showing up in phone numbers and the serial
  numbers of products that I've bought. It obviously
  likes me, so I've decided to keep it.
*/
const myNumber = 11213;
```

## <a id="javascript-functions2"></a>Defining Functions

Functions are the bread and butter of JavaScript programming. The concept of wrapping a piece of program in a value has many uses. It gives us a way to structure larger programs, to reduce repetition, to associate names with subprograms, and to isolate these subprograms from each other.

The most obvious application of functions is defining new vocabulary. Creating new words in prose is usually bad style. But in programming, it is indispensable.

Typical adult English speakers have some 20,000 words in their vocabulary. Few programming languages come with 20,000 commands built in. And the vocabulary that is available tends to be more precisely defined, and thus less flexible, than in human language. Therefore, we usually have to introduce new concepts to avoid repeating ourselves too much.

### <a id="javascript-function-definition"></a>Defining a function

A function definition is a regular variable where the value of the variable is a function. For example, this code defines square to refer to a function that produces the square of a given number:

```js
const square = function(x) {
  return x * x;
};

console.log(square(12));
// → 144
```

A function is created with an expression that starts with the keyword function. Functions have a set of parameters (in this case, only x) and a body, which contains the statements that are to be executed when the function is called. The function body of a function created this way must always be wrapped in braces, even when it consists of only a single statement.

A function can have multiple parameters or no parameters at all. In the following example, makeNoise does not list any parameter names, whereas power lists two:

```js
const makeNoise = function() {
  console.log("Pling!");
};

makeNoise();
// → Pling!

const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));
// → 1024
```

Some functions produce a value, such as power and square, and some don’t, such as makeNoise, whose only result is a side effect. A return statement determines the value the function returns. When control comes across such a statement, it immediately jumps out of the current function and gives the returned value to the code that called the function. A return keyword without an expression after it will cause the function to return undefined. Functions that don’t have a return statement at all, such as makeNoise, similarly return undefined.

Parameters to a function behave like regular variables, but their initial values are given by the caller of the function, not the code in the function itself.

### <a id="javascript-function-variable-and-scope"></a>Variables And Scopes

Each variable has a scope, which is the part of the program in which the variable is visible. For variables defined outside of any function or block, the scope is the whole program—you can refer to such variables wherever you want. These are called global.

But variables created for function parameters or declared inside a function can be referenced only in that function, so they are known as local variables. Every time the function is called, new instances of these variables are created. This provides some isolation between functions—each function call acts in its own little world (its local environment) and can often be understood without knowing a lot about what’s going on in the global environment.

variables declared with let and const are in fact local to the block that they are declared in, so if you create one of those inside of a loop, the code before and after the loop cannot “see” it. In pre-2015 JavaScript, only functions created new scopes, so old-style variables, created with the var keyword, are visible throughout the whole function that they appear in—or throughout the global scope, if they are not in a function.

```js
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40
```

Each scope can “look out” into the scope around it, so x is visible inside the block in the example. The exception is when multiple variables have the same name—in that case, code can see only the innermost one. For example, when the code inside the halve function refers to n, it is seeing its own n, not the global n.

```js
const halve = function(n) {
  return n / 2;
};

let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10
```

### <a id="javascript-function-nested-scoppe"></a>Nested scope

JavaScript distinguishes not just global and local variables. Blocks and functions can be created inside other blocks and functions, producing multiple degrees of locality.

For example, this function—which outputs the ingredients needed to make a batch of hummus—has another function inside it:

```js
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
```

The code inside the ingredient function can see the factor variable from the outer function. But its local variables, such as unit or ingredientAmount, are not visible in the outer function.

The set of variables visible inside a block is determined by the place of that block in the program text. Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to variable visibility is called lexical scoping.

### <a id="javascript-functions-as-values"></a>Functions as values

A function variable usually simply acts as a name for a specific piece of the program. Such a variable is defined once and never changed. This makes it easy to confuse the function and its name.

But the two are different. A function value can do all the things that other values can do—you can use it in arbitrary expressions, not just call it. It is possible to store a function value in a new variable, pass it as an argument to a function, and so on. Similarly, a variable that holds a function is still just a regular variable and can, if not constant, be assigned a new value, like so:

```js
let launchMissiles = function() {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function() {/* do nothing */};
}
```

### <a id="javascript-function-declaration-notation"></a>Declaration Notation

There is a slightly shorter way to create a function variable. When the function keyword is used at the start of a statement, it works differently.

```js
function square(x) {
  return x * x;
}
```

This is a function declaration. The statement defines the variable square and points it at the given function. It is slightly easier to write and doesn’t require a semicolon after the function.

There is one subtlety with this form of function definition.

```js
console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}
```

The preceding code works, even though the function is defined below the code that uses it. Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope. This is sometimes useful because it offers the freedom to order code in a way that seems meaningful, without worrying about having to define all functions before they are used.

### <a id="javascript-arrow-functions"></a>Arrow Functions

There’s a third notation for functions, which looks very different from the others. Instead of the function keyword, it uses an arrow (=>) made up of an equal sign and a greater-than character (not to be confused with the greater-than-or-equal operator, which is written >=).

```js
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
```

The arrow comes after the list of parameters and is followed by the function’s body. It expresses something like “this input (the parameters) produces this result (the body)”.

When there is only one parameter name, you can omit the parentheses around the parameter list. If the body is a single expression, rather than a block in braces, that expression will be returned from the function. So, these two definitions of square do the same thing:

```js
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
```

When an arrow function has no parameters at all, its parameter list is just an empty set of parentheses.

```js
const horn = () => {
  console.log("Toot");
};
```

There’s no deep reason to have both arrow functions and function expressions in the language. Apart from a minor detail, which we’ll discuss in Chapter 6, they do the same thing. Arrow functions were added in 2015, mostly to make it possible to write small function expressions in a less verbose way. We’ll be using them a lot in Chapter 5.

### <a id="javascript-call-stack"></a>The call stack

The way control flows through functions is somewhat involved. Let’s take a closer look at it. Here is a simple program that makes a few function calls:

```js
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
```

A run through this program goes roughly like this: the call to greet causes control to jump to the start of that function (line 2). The function calls console.log, which takes control, does its job, and then returns control to line 2. There it reaches the end of the greet function, so it returns to the place that called it, which is line 4. The line after that calls console.log again. After that returns, the program reaches its end.

We could show the flow of control schematically like this:

```markdown
not in function
  in greet
    in console.log
    in greet
not in function
   in console.log
not in function
```

Because a function has to jump back to the place that called it when it returns, the computer must remember the context from which the call happened. In one case, console.log has to return to the greet function when it is done. In the other case, it returns to the end of the program.

The place where the computer stores this context is the call stack. Every time a function is called, the current context is stored on top of this stack. When a function returns, it removes the top context from the stack and uses that context to continue execution.

Storing this stack requires space in the computer’s memory. When the stack grows too big, the computer will fail with a message like “out of stack space” or “too much recursion”. The following code illustrates this by asking the computer a really hard question that causes an infinite back-and-forth between two functions. Rather, it would be infinite, if the computer had an infinite stack. As it is, we will run out of space, or “blow the stack”.

```js
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");
// → ??
```

### <a id="javascript-optional-arguments"></a>Optional Arguments

The following code is allowed and executes without any problem:

```js
function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));
// → 16
```

We defined square with only one parameter. Yet when we call it with three, the language doesn’t complain. It ignores the extra arguments and computes the square of the first one.

JavaScript is extremely broad-minded about the number of arguments you pass to a function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters get assigned the value undefined.

The downside of this is that it is possible—likely, even—that you’ll accidentally pass the wrong number of arguments to functions. And no one will tell you about it.

The upside is that this behavior can be used to allow a function to be called with different numbers of arguments. For example, this minus function tries to imitate the - operator by acting on either one or two arguments:

```js
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5
```

If you write an = operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given.

For example, this version of power makes its second argument optional. If you don’t provide it or pass the value undefined, it will default to two, and the function will behave like square.

```js
function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64
```

### <a id="javascript-functions-closure"></a>Closure

The ability to treat functions as values, combined with the fact that local variables are re-created every time a function is called, brings up an interesting question. What happens to local variables when the function call that created them is no longer active?

The following code shows an example of this. It defines a function, wrapValue, that creates a local variable. It then returns a function that accesses and returns this local variable.

```js
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
```

This is allowed and works as you’d hope—both instances of the variable can still be accessed. This situation is a good demonstration of the fact that local variables are created anew for every call, and different calls can’t trample on one another’s local variables.

This feature—being able to reference a specific instance of a local variable in an enclosing scope—is called closure. A function that references variables from local scopes around it is called a closure. This behavior not only frees you from having to worry about lifetimes of variables but also makes it possible to use function values in some creative ways.

With a slight change, we can turn the previous example into a way to create functions that multiply by an arbitrary amount.

```js
function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10
```

The explicit local variable from the wrapValue example isn’t really needed since a parameter is itself a local variable.

Thinking about programs like this takes some practice. A good mental model is to think of function values as containing both the code in their body and the environment in which they are created. When called, the function body sees the environment in which it was created, not the environment in which it is called.

In the example, multiplier is called and creates an environment in which its factor parameter is bound to 2. The function value it returns, which is stored in twice, remembers this environment. So when that is called, it multiplies its argument by 2.

### <a id="javascript-function-recursion"></a>Recursion

It is perfectly okay for a function to call itself, as long as it doesn’t do it so often that it overflows the stack. A function that calls itself is called recursive. Recursion allows some functions to be written in a different style. Take, for example, this alternative implementation of power:

```js
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
// → 8
```

This is rather close to the way mathematicians define exponentiation and arguably describes the concept more clearly than the looping variant. The function calls itself multiple times with ever smaller exponents to achieve the repeated multiplication.

But this implementation has one problem: in typical JavaScript implementations, it’s about three times slower than the looping version. Running through a simple loop is generally cheaper than calling a function multiple times.

The dilemma of speed versus elegance is an interesting one. You can see it as a kind of continuum between human-friendliness and machine-friendliness. Almost any program can be made faster by making it bigger and more convoluted. The programmer has to decide on an appropriate balance.

In the case of the power function, the inelegant (looping) version is still fairly simple and easy to read. It doesn’t make much sense to replace it with the recursive version. Often, though, a program deals with such complex concepts that giving up some efficiency in order to make the program more straightforward is helpful.

Worrying about efficiency can be a distraction. It’s yet another factor that complicates program design, and when you’re doing something that’s already difficult, that extra thing to worry about can be paralyzing.

Therefore, always start by writing something that’s correct and easy to understand. If you’re worried that it’s too slow—which it usually isn’t since most code simply isn’t executed often enough to take any significant amount of time—you can measure afterward and improve it if necessary.

Recursion is not always just an inefficient alternative to looping. Some problems really are easier to solve with recursion than with loops. Most often these are problems that require exploring or processing several “branches”, each of which might branch out again into even more branches.

Consider this puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced. How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number?

For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.

Here is a recursive solution:

```js
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)
```

Note that this program doesn’t necessarily find the shortest sequence of operations. It is satisfied when it finds any sequence at all.

It is okay if you don’t see how it works right away. Let’s work through it, since it makes for a great exercise in recursive thinking.

The inner function find does the actual recursing. It takes two arguments: the current number and a string that records how we reached this number. If it finds a solution, it returns a string that shows how to get to the target. If no solution can be found starting from this number, it returns null.

To do this, the function performs one of three actions. If the current number is the target number, the current history is a way to reach that target, so it is returned. If the current number is greater than the target, there’s no sense in further exploring this branch because both adding and multiplying will only make the number bigger, so it returns null. Finally, if we’re still below the target number, the function tries both possible paths that start from the current number by calling itself twice, once for addition and once for multiplication. If the first call returns something that is not null, it is returned. Otherwise, the second call is returned, regardless of whether it produces a string or null.

To better understand how this function produces the effect we’re looking for, let’s look at all the calls to find that are made when searching for a solution for the number 13.

```js
find(1, "1")
  find(6, "(1 + 5)")
    find(11, "((1 + 5) + 5)")
      find(16, "(((1 + 5) + 5) + 5)")
        too big
      find(33, "(((1 + 5) + 5) * 3)")
        too big
    find(18, "((1 + 5) * 3)")
      too big
  find(3, "(1 * 3)")
    find(8, "((1 * 3) + 5)")
      find(13, "(((1 * 3) + 5) + 5)")
        found!
```

The indentation indicates the depth of the call stack. The first time find is called, it starts by calling itself to explore the solution that starts with (1 + 5). That call will further recurse to explore every continued solution that yields a number less than or equal to the target number. Since it doesn’t find one that hits the target, it returns null back to the first call. There the || operator causes the call that explores (1 * 3) to happen. This search has more luck—its first recursive call, through yet another recursive call, hits upon the target number. That innermost call returns a string, and each of the || operators in the intermediate calls passes that string along, ultimately returning the solution.

### <a id="javascript-functions-growing"></a>Growing functions

There are two more or less natural ways for functions to be introduced into programs.

The first is that you find yourself writing similar code multiple times. You’d prefer not to do that. Having more code means more space for mistakes to hide and more material to read for people trying to understand the program. So you take the repeated functionality, find a good name for it, and put it into a function.

The second way is that you find you need some functionality that you haven’t written yet and that sounds like it deserves its own function. You’ll start by naming the function, and then you’ll write its body. You might even start writing code that uses the function before you actually define the function itself.

How difficult it is to find a good name for a function is a good indication of how clear a concept it is that you’re trying to wrap. Let’s go through an example.

We want to write a program that prints two numbers: the numbers of cows and chickens on a farm, with the words Cows and Chickens after them and zeros padded before both numbers so that they are always three digits long.

* 007 Cows
* 011 Chickens

This asks for a function of two arguments—the number of cows and the number of chickens. Let’s get coding.

```js
function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);
```

Writing `.length` after a string expression will give us the length of that string. Thus, the while loops keep adding zeros in front of the number strings until they are at least three characters long.

Mission accomplished! But just as we are about to send the farmer the code (along with a hefty invoice), she calls and tells us she’s also started keeping pigs, and couldn’t we please extend the software to also print pigs?

We sure can. But just as we’re in the process of copying and pasting those four lines one more time, we stop and reconsider. There has to be a better way. Here’s a first attempt:

```js
function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);
```

It works! But that name, printZeroPaddedWithLabel, is a little awkward. It conflates three things—printing, zero-padding, and adding a label—into a single function.

Instead of lifting out the repeated part of our program wholesale, let’s try to pick out a single concept.

```js
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);
```

A function with a nice, obvious name like zeroPad makes it easier for someone who reads the code to figure out what it does. And such a function is useful in more situations than just this specific program. For example, you could use it to help print nicely aligned tables of numbers.

How smart and versatile should our function be? We could write anything, from a terribly simple function that can only pad a number to be three characters wide to a complicated generalized number-formatting system that handles fractional numbers, negative numbers, alignment of decimal dots, padding with different characters, and so on.

A useful principle is to not add cleverness unless you are absolutely sure you’re going to need it. It can be tempting to write general “frameworks” for every bit of functionality you come across. Resist that urge. You won’t get any real work done—you’ll just be writing code that you never use.

### <a id="javascript"></a>Functions And Side Effects

Functions can be roughly divided into those that are called for their side effects and those that are called for their return value. (Though it is definitely also possible to both have side effects and return a value.)

The first helper function in the farm example, `printZeroPaddedWithLabel`, is called for its side effect: it prints a line. The second version, zeroPad, is called for its return value. It is no coincidence that the second is useful in more situations than the first. Functions that create values are easier to combine in new ways than functions that directly perform side effects.

A pure function is a specific kind of value-producing function that not only has no side effects but also doesn’t rely on side effects from other code—for example, it doesn’t read global variables whose value might change. A pure function has the pleasant property that, when called with the same arguments, it always produces the same value (and doesn’t do anything else). A call to such a function can be substituted by its return value without changing the meaning of the code. When you are not sure that a pure function is working correctly, you can test it by simply calling it and know that if it works in that context, it will work in any context. Nonpure functions tend to require more scaffolding to test.

Still, there’s no need to feel bad when writing functions that are not pure or to wage a holy war to purge them from your code. Side effects are often useful. There’d be no way to write a pure version of console.log, for example, and console.log is good to have. Some operations are also easier to express in an efficient way when we use side effects, so computing speed can be a reason to avoid purity.


## <a id="javascript-objects-and-arrays"></a>Data Structures: Objects and Arrays

Numbers, Booleans, and strings are the atoms that data structures are built from. Many types of information require more than one atom, though. Objects allow us to group values—including other objects—to build more complex structures.

The programs we have built so far have been limited by the fact that they were operating only on simple data types. This section will introduce basic data structures. By the end of it, you’ll know enough to start writing useful programs.

The chapter will work through a more or less realistic programming example, introducing concepts as they apply to the problem at hand. The example code will often build on functions and variables that were introduced earlier in the text.

### <a id="javascript-weresquirrel"></a>The weresquirrel

Every now and then, usually between 8 p.m. and 10 p.m., Jacques finds himself transforming into a small furry rodent with a bushy tail.

On one hand, Jacques is quite glad that he doesn’t have classic lycanthropy. Turning into a squirrel does cause fewer problems than turning into a wolf. Instead of having to worry about accidentally eating the neighbor (that would be awkward), he worries about being eaten by the neighbor’s cat. After two occasions where he woke up on a precariously thin branch in the crown of an oak, naked and disoriented, he has taken to locking the doors and windows of his room at night and putting a few walnuts on the floor to keep himself busy.

That takes care of the cat and tree problems. But Jacques would prefer to get rid of his condition entirely. The irregular occurrences of the transformation make him suspect that they might be triggered by something. For a while, he believed that it happened only on days when he had been near oak trees. But avoiding oak trees did not stop the problem.

Switching to a more scientific approach, Jacques has started keeping a daily log of everything he does on a given day and whether he changed form. With this data he hopes to narrow down the conditions that trigger the transformations.

The first thing he needs is a data structure to store this information.

### <a id="javascript-data-sets"></a>Data sets

To work with a chunk of digital data, we’ll first have to find a way to represent it in our machine’s memory. Say, for example, that we want to represent a collection of the numbers 2, 3, 5, 7, and 11.

We could get creative with strings—after all, strings can have any length, so we can put a lot of data into them—and use "2 3 5 7 11" as our representation. But this is awkward. You’d have to somehow extract the digits and convert them back to numbers to access them.

Fortunately, JavaScript provides a data type specifically for storing sequences of values. It is called an array and is written as a list of values between square brackets, separated by commas.

```js
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3
```

The notation for getting at the elements inside an array also uses square brackets. A pair of square brackets immediately after an expression, with another expression inside of them, will look up the element in the left-hand expression that corresponds to the index given by the expression in the brackets.

The first index of an array is zero, not one. So the first element is retrieved with listOfNumbers[0]. Zero-based counting has a long tradition in technology and in certain ways makes a lot of sense, but it takes some getting used to. Think of the index as the amount of items to skip, counting from the start of the array.

### <a id="javascript-properties"></a>Properties

We’ve seen a few suspicious-looking expressions like myString.length (to get the length of a string) and Math.max (the maximum function) in past chapters. These are expressions that access a property of some value. In the first case, we access the length property of the value in myString. In the second, we access the property named max in the Math object (which is a collection of mathematics-related constants and functions).

Almost all JavaScript values have properties. The exceptions are null and undefined. If you try to access a property on one of these nonvalues, you get an error.

```js
null.length;
// → TypeError: null has no properties
```

The two main ways to access properties in JavaScript are with a dot and with square brackets. Both value.x and value[x] access a property on value—but not necessarily the same property. The difference is in how x is interpreted. When using a dot, the word after the dot is the literal name of the property. When using square brackets, the expression between the brackets is evaluated to get the property name. Whereas value.x fetches the property of value named “x”, value[x] tries to evaluate the expression x and uses the result, converted to a string, as the property name.

So if you know that the property you are interested in is called color, you say value.color. If you want to extract the property named by the value held in the variable i, you say value[i]. Property names are strings. They can be any string, but the dot notation works only with names that look like valid variable names. So if you want to access a property named 2 or John Doe, you must use square brackets: value[2] or value["John Doe"].

The elements in an array are stored as the array’s properties, using numbers as property names. Because you can’t use the dot notation with numbers and usually want to use a variable that holds the index anyway, you have to use the bracket notation to get at them.

The length property of an array tells us how many elements it has. This property name is a valid variable name, and we know its name in advance, so to find the length of an array, you typically write array.length because that’s easier to write than array["length"].

### <a id="javascript-methods"></a>Methods

Both string and array objects contain, in addition to the length property, a number of properties that hold function values.

```js
let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH
```

Every string has a toUpperCase property. When called, it will return a copy of the string in which all letters have been converted to uppercase. There is also toLowerCase, going the other way.

Interestingly, even though the call to toUpperCase does not pass any arguments, the function somehow has access to the string "Doh", the value whose property we called.

Properties that contain functions are generally called methods of the value they belong to, as in “toUpperCase is a method of a string”.

This example demonstrates two methods you can use to manipulate arrays:

```js
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]
```

The push method adds values to the end of an array, and the pop method does the opposite, removing the last value in the array and returning it.

These somewhat silly names are the traditional terms for operations on a stack. A stack, in programming, is a data structure that allows you to push values into it and pop them out again in the opposite order so that the thing that was added last is removed first. These are common in programming—you might remember the function call stack from the previous chapter, which is an instance of the same idea.

### <a id="javascript-objects"></a>Objects

Back to the weresquirrel. A set of daily log entries can be represented as an array. But the entries do not consist of just a number or a string—each entry needs to store a list of activities and a Boolean value that indicates whether Jacques turned into a squirrel or not. Ideally, we would like to group these together into a single value and then put those grouped values into an array of log entries.

Values of the type object are arbitrary collections of properties. One way to create an object is by using braces as an expression.

```js
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false
```

Inside the braces, there is a list of properties separated by commas. Each property has a name followed by a colon and a value. When an object is written over multiple lines, indenting it like in the example helps with readability. Properties whose names aren’t valid variable names or valid numbers have to be quoted.

```js
let descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree"
};
```

This means that braces have two meanings in JavaScript. At the start of a statement, they start a block of statements. In any other position, they describe an object. Fortunately, it is rarely useful to start a statement with an object in braces, so the ambiguity between these two is not much of a problem.

Reading a property that doesn’t exist will give you the value undefined.

It is possible to assign a value to a property expression with the = operator. This will replace the property’s value if it already existed or create a new property on the object if it didn’t.

To briefly return to our tentacle model of variables—property variables are similar. They grasp values, but other variables and properties might be holding onto those same values. You may think of objects as octopuses with any number of tentacles, each of which has a name tattooed on it.

The delete operator cuts off a tentacle from such an octopus. It is a unary operator that, when applied to an object property, will remove the named property from the object. This is not a common thing to do, but it is possible.

```js
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true
```

The binary in operator, when applied to a string and an object, tells you whether that object has a property with that name. The difference between setting a property to undefined and actually deleting it is that, in the first case, the object still has the property (it just doesn’t have a very interesting value), whereas in the second case the property is no longer present and in will return false.

To find out what properties an object has, you can use the Object.keys function. You give it an object, and it returns an array of strings—the object’s property names.

```js
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]
```

There’s an Object.assign function that copies all properties from one object into another.

```js
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}
```

Arrays, then, are just a kind of object specialized for storing sequences of things. If you evaluate typeof [], it produces "object". You can see them as long, flat octopuses with all their tentacles in a neat row, labeled with numbers.

We will represent the journal that Jacques keeps as an array of objects.

```js
let journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
   squirrel: true},
  /* and so on... */
];
```

### <a id="javascript-mutability"></a>Mutability

We will get to actual programming real soon now. First there’s one more piece of theory to understand.

We saw that object values can be modified. The types of values discussed in earlier chapters, such as numbers, strings, and Booleans, are all immutable—it is impossible to change values of those types. You can combine them and derive new values from them, but when you take a specific string value, that value will always remain the same. The text inside it cannot be changed. If you have a string that contains "cat", it is not possible for other code to change a character in your string to make it spell "rat".

Objects work differently. You can change their properties, causing a single object value to have different content at different times.

When we have two numbers, 120 and 120, we can consider them precisely the same number, whether or not they refer to the same physical bits. With objects, there is a difference between having two references to the same object and having two different objects that contain the same properties. Consider the following code:

```js
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
```

The object1 and object2 variables grasp the same object, which is why changing object1 also changes the value of object2. They are said to have the same identity. The variable object3 points to a different object, which initially contains the same properties as object1 but lives a separate life.

variables can also be changeable or constant, but this is separate from the way their values behave. Even though number values don’t change, you can use a let variable to keep track of a changing number by changing the value the variable points at. Similarly, though a const variable to an object can itself not be changed and will continue to point at the same object, the contents of that object might change.

```js
const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
// This isn't allowed
score = {visitors: 1, home: 1};
```

When you compare objects with JavaScript’s == operator, it compares by identity: it will produce true only if both objects are precisely the same value. Comparing different objects will return false, even if they have identical properties. There is no “deep” comparison operation built into JavaScript, which compares objects by contents, but it is possible to write it yourself (which is one of the exercises at the end of this chapter).

### The lycanthrope’s log

So, Jacques starts up his JavaScript interpreter and sets up the environment he needs to keep his journal.

```js
let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}
```

Note that the object added to the journal looks a little odd. Instead of declaring properties like events: events, it just gives a property name. This is shorthand that means the same thing—if a property name in brace notation isn’t followed by a value, its value is taken from the variable with the same name.

So then, every evening at 10 p.m.—or sometimes the next morning, after climbing down from the top shelf of his bookcase—Jacques records the day.

```js
addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);
```

Once he has enough data points, he intends to use statistics to find out which of these events may be related to the squirrelifications.

Correlation is a measure of dependence between statistical variables. A statistical variable is not quite the same as a programming variable. In statistics you typically have a set of measurements, and each variable is measured for every measurement. Correlation between variables is usually expressed as a value that ranges from -1 to 1. Zero correlation means the variables are not related. A correlation of one indicates that the two are perfectly related—if you know one, you also know the other. Negative one also means that the variables are perfectly related but that they are opposites—when one is true, the other is false.

To compute the measure of correlation between two Boolean variables, we can use the phi coefficient (ϕ). This is a formula whose input is a frequency table containing the number of times the different combinations of the variables were observed. The output of the formula is a number between -1 and 1 that describes the correlation.

We could take the event of eating pizza and put that in a frequency table like this, where each number indicates the amount of times that combination occurred in our measurements:

**Eating pizza versus turning into a squirrel**

If we call that table n, we can compute ϕ using the following formula:

```js
ϕ =
n11n00 − n10n01
√ n1•n0•n•1n•0
```

(If at this point you’re putting the book down to focus on a terrible flashback to 10th grade math class &mdash; hold on! I do not intend to torture you with endless pages of cryptic notation &mdash; it’s just this one formula for now. And even with this one, all we do is turn it into JavaScript.)

The notation n01 indicates the number of measurements where the first variable (squirrelness) is false (0) and the second variable (pizza) is true (1). In the pizza table, n01 is 9.

The value n1• refers to the sum of all measurements where the first variable is true, which is 5 in the example table. Likewise, n•0 refers to the sum of the measurements where the second variable is false.

So for the pizza table, the part above the division line (the dividend) would be 1×76−4×9 = 40, and the part below it (the divisor) would be the square root of 5×85×10×80, or √340000. This comes out to ϕ ≈ 0.069, which is tiny. Eating pizza does not appear to have influence on the transformations.

**Computing correlation**

We can represent a two-by-two table in JavaScript with a four-element array ([76, 9, 4, 1]). We could also use other representations, such as an array containing two two-element arrays ([[76, 9], [4, 1]]) or an object with property names like "11" and "01", but the flat array is simple and makes the expressions that access the table pleasantly short. We’ll interpret the indices to the array as two-bit binary numbers, where the leftmost (most significant) digit refers to the squirrel variable and the rightmost (least significant) digit refers to the event variable. For example, the binary number 10 refers to the case where Jacques did turn into a squirrel, but the event (say, “pizza”) didn’t occur. This happened four times. And since binary 10 is 2 in decimal notation, we will store this number at index 2 of the array.

This is the function that computes the ϕ coefficient from such an array:

```js
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));
// → 0.068599434
```

This is a direct translation of the ϕ formula into JavaScript. Math.sqrt is the square root function, as provided by the Math object in a standard JavaScript environment. We have to add two fields from the table to get fields like n1• because the sums of rows or columns are not stored directly in our data structure.

Jacques kept his journal for three months. The resulting data set is available in the coding sandbox for this chapter, where it is stored in the JOURNAL variable and in a downloadable file.

To extract a two-by-two table for a specific event from the journal, we must loop over all the entries and tally how many times the event occurs in relation to squirrel transformations.

```js
function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]
```

Arrays have an includes method that checks whether a given value exists in the array. The function uses that to determine whether the event name it is interested in is part of the event list for a given day.

The body of the loop in tableFor figures out which box in the table each journal entry falls into by checking whether the entry contains the specific event it’s interested in and whether the event happens alongside a squirrel incident. The loop then adds one to the correct box in the table.

We now have the tools we need to compute individual correlations. The only step remaining is to find a correlation for every type of event that was recorded and see whether anything stands out.

#### Array loops

In the tableFor function, there’s a loop like this:

```js
for (let i = 0; i < JOURNAL.length; i++) {
  let entry = JOURNAL[i];
  // Do something with entry
}
```

This kind of loop is common in JavaScript &mdash; going over arrays one element at a time is something that comes up a lot, and to do that you’d run a counter over the length of the array and pick out each element in turn.

There is a simpler way to write such loops in modern JavaScript.

```js
for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`);
}
```

When a for loop looks like this, with the word of after a variable definition, it will loop over the elements of the value given after of. This works not only for arrays but also for strings and some other data structures.

**The final analysis**

We need to compute a correlation for every type of event that occurs in the data set. To do that, we first need to find every type of event.

```js
function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

console.log(journalEvents(JOURNAL));
// → ["carrot", "exercise", "weekend", "bread", …]
```

By going over all the events and adding those that aren’t already in there to the events array, the function collects every type of event.

Using that, we can see all the correlations.

```js
for (let event of journalEvents(JOURNAL)) {
  console.log(event + ":", phi(tableFor(event, JOURNAL)));
}
// → carrot:   0.0140970969
// → exercise: 0.0685994341
// → weekend:  0.1371988681
// → bread:   -0.0757554019
// → pudding: -0.0648203724
// and so on...
```
Most correlations seem to lie close to zero. Eating carrots, bread, or pudding apparently does not trigger squirrel-lycanthropy. It does seem to occur somewhat more often on weekends. Let’s filter the results to show only correlations greater than 0.1 or less than -0.1.

```js
for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
  }
}
// → weekend:        0.1371988681
// → brushed teeth: -0.3805211953
// → candy:          0.1296407447
// → work:          -0.1371988681
// → spaghetti:      0.2425356250
// → reading:        0.1106828054
// → peanuts:        0.5902679812
```

Aha! There are two factors with a correlation that’s clearly stronger than the others. Eating peanuts has a strong positive effect on the chance of turning into a squirrel, whereas brushing his teeth has a significant negative effect.

Interesting. Let’s try something.

```js
for (let entry of JOURNAL) {
  if (entry.events.includes("peanuts") &&
     !entry.events.includes("brushed teeth")) {
    entry.events.push("peanut teeth");
  }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
// → 1
```

That’s a strong result. The phenomenon occurs precisely when Jacques eats peanuts and fails to brush his teeth. If only he weren’t such a slob about dental hygiene, he’d have never even noticed his affliction.

Knowing this, Jacques stops eating peanuts altogether and finds that his transformations don’t come back.

For a few years, things go great for Jacques. But at some point he loses his job. Because he lives in a nasty country where having no job means having no medical services, he is forced to take employment with a circus where he performs as The Incredible Squirrelman, stuffing his mouth with peanut butter before every show.

One day, fed up with this pitiful existence, Jacques fails to change back into his human form, hops through a crack in the circus tent, and vanishes into the forest. He is never seen again.

### <a id="javascript-further-array-methods"></a>Further arrayology

Before finishing the chapter, I want to introduce you to a few more object-related concepts. I’ll start by introducing some generally useful array methods.

We saw push and pop, which add and remove elements at the end of an array, earlier in this chapter. The corresponding methods for adding and removing things at the start of an array are called unshift and shift.

```js
let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}
```

That program manages a queue of tasks. You add tasks to the end of the queue by calling remember("groceries"), and when you’re ready to do something, you call getTask() to get (and remove) the front item from the queue. The rememberUrgently function also adds a task but adds it to the front instead of the back of the queue.

To search for a specific value, arrays provide an indexOf method. The method searches through the array from the start to the end and returns the index at which the requested value was found—or -1 if it wasn’t found. To search from the end instead of the start, there’s a similar method called lastIndexOf.

```js
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3
```

Both indexOf and lastIndexOf take an optional second argument that indicates where to start searching.

Another fundamental array method is slice, which takes start and end indices and returns an array that has only the elements between them. The start index is inclusive, the end index exclusive.

```js
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
```

When the end index is not given, slice will take all of the elements after the start index. You can also omit the start index to copy the entire array.

The concat method can be used to glue arrays together to create a new array, similar to what the + operator does for strings.

The following example shows both concat and slice in action. It takes an array and an index, and it returns a new array that is a copy of the original array with the element at the given index removed.

```js
function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]
```

If you pass concat an argument that is not an array, that value will be added to the new array as if it were a one-element array.

**Strings and their properties**

We can read properties like length and toUpperCase from string values. But if you try to add a new property, it doesn’t stick.

```js
let kim = "Kim";
kim.age = 88;
console.log(kim.age);
// → undefined
```

Values of type string, number, and Boolean are not objects, and though the language doesn’t complain if you try to set new properties on them, it doesn’t actually store those properties. As mentioned earlier, such values are immutable and cannot be changed.

But these types do have built-in properties. Every string value has a number of methods. Some very useful ones are slice and indexOf, which resemble the array methods of the same name.

```js
console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5
```

One difference is that a string’s indexOf can search for a string containing more than one character, whereas the corresponding array method looks only for a single element.

```js
console.log("one two three".indexOf("ee"));
// → 11
```

The trim method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string.

```js
console.log("  okay \n ".trim());
// → okay
```

padStart takes the desired length and padding character as arguments. There is also a padEnd method that will append the desired character to match the desired length

```js
console.log(String(6).padStart(3, "0"));
// → 006
```

You can split a string on every occurrence of another string with split and join it again with join.

```js
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping
```

A string can be repeated with the repeat method, which creates a new string containing multiple copies of the original string, glued together.

```js
console.log("LA".repeat(3));
// → LALALA
```

We have already seen the string type’s length property. Accessing the individual characters in a string looks like accessing array elements.

```js
let string = "abc";
console.log(string.length);
// → 3
console.log(string[1]);
// → b
```

**Rest parameters**

It can be useful for a function to accept any number of arguments. For example, Math.max computes the maximum of all the arguments it is given.

To write such a function, you put three dots before the function’s last parameter, like this:

```js
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9
```

When such a function is called, the rest parameter is bound to an array containing all further arguments. If there are other parameters before it, their values aren’t part of that array. When, as in max, it is the only parameter, it will hold all arguments.

You can use a similar three-dot notation to call a function with an array of arguments.

```js
let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7
```

This “spreads” out the array into the function call, passing its elements as separate arguments. It is possible to include an array like that along with other arguments, as in max(9, ...numbers, 2).

Square bracket array notation similarly allows the triple-dot operator to spread another array into the new array.

```js
let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]
```

### <a id="javascript-math"></a>The Math object

As we’ve seen, Math is a grab bag of number-related utility functions, such as Math.max (maximum), Math.min (minimum), and Math.sqrt (square root).

The Math object is used as a container to group a bunch of related functionality. There is only one Math object, and it is almost never useful as a value. Rather, it provides a namespace so that all these functions and values do not have to be global variables.

Having too many global variables “pollutes” the namespace. The more names have been taken, the more likely you are to accidentally overwrite the value of some existing variable. For example, it’s not unlikely to want to name something max in one of your programs. Since JavaScript’s built-in max function is tucked safely inside the Math object, we don’t have to worry about overwriting it.

Many languages will stop you, or at least warn you, when you are defining a variable with a name that is already taken. JavaScript does this for variables you declared with let or const but—perversely—not for standard variables nor for variables declared with var or function.

Back to the Math object. If you need to do trigonometry, Math can help. It contains cos (cosine), sin (sine), and tan (tangent), as well as their inverse functions, acos, asin, and atan, respectively. The number π (pi)—or at least the closest approximation that fits in a JavaScript number—is available as Math.PI. There is an old programming tradition of writing the names of constant values in all caps.

```js
function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return {x: radius * Math.cos(angle),
          y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));
// → {x: 0.3667, y: 1.966}
```

The previous example used Math.random. This is a function that returns a new pseudorandom number between zero (inclusive) and one (exclusive) every time you call it.

```js
console.log(Math.random());
// → 0.36993729369714856
console.log(Math.random());
// → 0.727367032552138
console.log(Math.random());
// → 0.40180766698904335
```

Though computers are deterministic machines—they always react the same way if given the same input—it is possible to have them produce numbers that appear random. To do that, the machine keeps some hidden value, and whenever you ask for a new random number, it performs complicated computations on this hidden value to create a new value. It stores a new value and returns some number derived from it. That way, it can produce ever new, hard-to-predict numbers in a way that seems random.

If we want a whole random number instead of a fractional one, we can use Math.floor (which rounds down to the nearest whole number) on the result of Math.random.

```js
console.log(Math.floor(Math.random() * 10));
// → 2
```

Multiplying the random number by 10 gives us a number greater than or equal to 0 and below 10. Since Math.floor rounds down, this expression will produce, with equal chance, any number from 0 through 9.

There are also the functions Math.ceil (for “ceiling”, which rounds up to a whole number), Math.round (to the nearest whole number), and Math.abs, which takes the absolute value of a number, meaning it negates negative values but leaves positive ones as they are.

**Destructuring**

Let’s go back to the phi function for a moment.

```js
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}
```

One of the reasons this function is awkward to read is that we have a variable pointing at our array, but we’d much prefer to have variables for the elements of the array, that is, let n00 = table[0] and so on. Fortunately, there is a succinct way to do this in JavaScript.

```js
function phi([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) *
              (n01 + n11) * (n00 + n10));
}
```

This also works for variables created with let, var, or const. If you know the value you are variable is an array, you can use square brackets to “look inside” of the value, variable its contents.

A similar trick works for objects, using braces instead of square brackets.

```js
let {name} = {name: "Faraji", age: 23};
console.log(name);
// → Faraji
```

Note that if you try to destructure null or undefined, you get an error, much as you would if you directly try to access a property of those values.

### <a id="javascript-json"></a>JSON

Because properties only grasp their value, rather than contain it, objects and arrays are stored in the computer’s memory as sequences of bits holding the addresses—the place in memory—of their contents. So an array with another array inside of it consists of (at least) one memory region for the inner array, and another for the outer array, containing (among other things) a binary number that represents the position of the inner array.

If you want to save data in a file for later or send it to another computer over the network, you have to somehow convert these tangles of memory addresses to a description that can be stored or sent. You could send over your entire computer memory along with the address of the value you’re interested in, I suppose, but that doesn’t seem like the best approach.

What we can do is serialize the data. That means it is converted into a flat description. A popular serialization format is called JSON (pronounced “Jason”), which stands for JavaScript Object Notation. It is widely used as a data storage and communication format on the Web, even in languages other than JavaScript.

JSON looks similar to JavaScript’s way of writing arrays and objects, with a few restrictions. All property names have to be surrounded by double quotes, and only simple data expressions are allowed—no function calls, variables, or anything that involves actual computation. Comments are not allowed in JSON.

A journal entry might look like this when represented as JSON data:

```json
{
  "squirrel": false,
  "events": ["work", "touched tree", "pizza", "running"]
}
```

JavaScript gives us the functions JSON.stringify and JSON.parse to convert data to and from this format. The first takes a JavaScript value and returns a JSON-encoded string. The second takes such a string and converts it to the value it encodes.

```js
let string = JSON.stringify({squirrel: false,
                             events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// → ["weekend"]
```

### <a id="javascript-asynchronous"></a>Asynchronous Javascript

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

### <a id="javascript-asynchronous-method"></a>Methods of writing synchronous code

Before we jump in to asynchronous (async) code we'll look at two ways of writing synchronous code: Callbacks and try/catch blocks.

#### <a id="javascript-callbacks"></a>Callbacks

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

#### <a id="javascript-this"></a>Working with 'this'

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

#### <a id="javascript-apply-call"></a>Apply and Call

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

#### <a id="javascript-try-catch"></a>Try/Catch blocks

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

### <a id="javascript-brief-intro-async"></a>Brief Introduction to Async Code

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
 
### <a id="javascript-settimeout-setinterval"></a>SetTimeout and SetInterval

SetTimeout and SetInterval provide ways to schedule tasks to run at a future point in time.

setTimeout allows you to schedule a task after a given interval.

setInterval lets you run a tasks periodically with a given interval between runs.

Unlike synchronous code, the code running on setTimeout and SetInterval will run without blocking the execution of other code in your page.

#### <a id="javascript-settimeout"></a>SetTimeout

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

#### <a id="javascript-setinterval"></a>setInterval

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

#### <a id="javascript-cleartimeout"></a>clearTimeout

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

#### <a id="javascript-clearinterval">clearInterval

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

#### <a id="javascript-keepinmind1">Things to keep in mind

There are a few things to keep in mind when working with setTimeout and setInterval.

##### <a id="javascript-keepinmind1-recursive"></a>Recursive Timeout

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

##### <a id="javascript-keepinmind1-immediate">Immediate Timeout

Using 0 as the value for setTimeout schedules the execution of func as soon as possible but only after the current code is complete.

For instance, the code below outputs an alert with “Hello”, then an alert with “World” as soon as the user clicks OK on the first alert.

```js
setTimeout(function() {
 alert('Mr. Universe')
}, 0);

alert('hello');
```

##### <a id="javascript-keepinmind1-when"><a>When would you use them?

setTimeout and setInterval are useful when you need to schedule code execution.

Use setTimeout if you want to execute the code once after a given time elapses. Pay attention to the gotchas for using setTimeout and consider them additional alternatives

Use setInterval if you need the code to execute repeatedly at given intervals.
 
### <a id="javascript-raf"></a>Request Animation Frame

Requestanimationframe is a specialized timing function that is primarily used with animation code of any kind (DOM elements, CSS, canvas, WebGL, or any other).The method tells the browser that you wish to perform an animation and requests that the browser call a function to update the animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint

#### <a id="javascript-raf-before"></a>Before Request Animation Frame

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

#### <a id="javascript-raf-running"></a>Running RAF

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

#### <a id="javascript-raf-polyfill"></a>Polyfill and Feature Detection

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

#### <a id="javascript-raf-when"></a>When would you use it?

Request Animation Frame will work with all kinds of animations, CSS, WebGL, DOM manipulation.

### <a id="javascript-promises"></a>Promises

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

#### <a id="javascript-promises-terminology"></a>Terminology definition

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

#### <a id="javascript-promises-parallel"></a>Parallel Promises: promise.all and promise.race

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

#### <a id="javascript-promises-finally"></a>Keeping code DRY: promise.finally

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

#### <a id="javascript-promises-build-your-own"><a>Building your own promises

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

#### <a id="javascript-promises-polyfill-feature-detect"><a>Feature Detection and Polyfill

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

#### <a id="javascript-promises-when"></a>When would you use it?

Promises are a good way to build asynchronous applications when we don’t know the return value of a function or when don’t know how long will it take for the code inside the promise to complete.  They will work in the latest version of all modern browsers; according to caniuse.com promises will not work in Opera Mini and IE 11 and earlier versions.

Most recent Web APIs are promise-based and when you use them you’re using you are using promises
 
### <a id="javascript-asycn-await"></a>Async/Await

New in ES2017 are async functions and the await keyword that will make writing async code easier to read, reason through and understand what caused any error that may get thrown. The hardest part, for me, of working with ES2016 and later is that I don't always see the reasoning behind the new code, the older version of the code still work just as fine.

Async / Await are different. They look a lot like the synchronous callback code that we used to work with in the ES5 days but they produce the same asynchronous result as if we were writing promises.

#### <a id="javascript-asycn-await-sequential"></a>Async code running sequentially

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

#### <a id="javascript-asycn-await-parallel"></a>Async code running in parallel

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

#### <a id="javascript-asycn-await-errors"></a>Error handling

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
#### <a id="javascript-asycn-await-finally"></a>Keeping it DRY: Using finally

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

#### <a id="javascript-asycn-await-example1">Example: Font loading with async and await

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

#### <a id="javascript-async-different"></a>How is async/await different? When would you use it?

For short scripts and promise chains there is no difference between using Promises directly or using the syntactic sugar in async / await. For more complex code or applications with many nested promises, async / await provides a cleaner, more synchronous looking syntax for your asynchronous code.

One consideration is support for older browsers. Using Babel and preset-env to write your applications using the latest Javascript and let Babel figure out what changes are needed for your user’s browsers. This will reduce the Javascript payloads by eliminating unneeded transpilations of features that browsers support natively.


</section>
