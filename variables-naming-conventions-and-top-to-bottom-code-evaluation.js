//Assignment done by Pooja Pandey, Please see below 
//Question - let a = "Alice"; let b = 5; let c = 20; let d = a + " brought " + b + " items for $" + c + " . "; console.log(d); review the code and identify issue 
/* 1.there is any name for variable are unclear or too vague 2.do not follow best practices ike camel or descriptive Rename the variable and rewrite the program Using descriptive name Add additional 2 variable to improve the clarity of code.
Why it is important to use meaningful variables? 
Common pitfall to avoid while naming the variables?
How do clear variable names benefit team collobration?
/*------------------------------------------------------------------------------------------------------------------------------------------
Ans- reviewing the code and identify issue:
1. Unclear or Too Vague Variable Names:
•	a is unclear. It could represent a name, so something like personName would make the code more readable.
•	b is a number, but its purpose isn’t clear. In this case, it represents the number of items, so numberOfItems would be more descriptive.
•	c is the price of each item, so a more descriptive name like itemPrice would be better.
2. Not Following Best Practices:

Let's review and improve the  code based on the following criteria:
1.	Variable Naming: The variable names should be descriptive and clear in terms of what they represent.
2.	Best Practices: We should follow camelCase for variable naming as it's a widely adopted JavaScript naming convention.
Observations:
•	The variable a can be renamed to something more descriptive like personName.
•	The variable b can be renamed to something like numberOfItems.
•	The variable c can be renamed to itemPrice.
•	Adding more clarity: I’ll introduce two more variables: totalCost (the total cost of the items) and currencySymbol (the currency symbol to be used).
Revised Code with Descriptive Variable Names:

*/
let personName = "Alice";
let numberOfItems = 5;
let itemPrice = 20;
let currencySymbol = "$"; // Added for clarity
let totalCost = numberOfItems * itemPrice; // Added for clarity

let message = personName + " brought " + numberOfItems + " items for " + currencySymbol + totalCost + " . ";

console.log(message);
/*    
Improvements:
1.	Descriptive Names: 
o	personName instead of a
o	numberOfItems instead of b
o	itemPrice instead of c
o	currencySymbol and totalCost were added for clarity.
2.	Best Practices: 
o	Used camelCase naming convention for all variable names.
3.	Calculation: 
o	The total cost is calculated using the new variable totalCost for better clarity and reusability.
Output:
//This code will output:
//Alice brought 5 items for $100 .
//This approach makes the code clearer and easier to maintain in the long run!
//Things to reflect on.
//Why it is important to use meaningful variables? 
 It is important to use meaningful variable because having meaningful variable names makes it easier to identify which variables are involved and their purpose. Using meaningful variables makes our code cleaner, easier to understand, maintain, and debug. It’s a best practice that greatly improves the quality and longevity of our code, especially when working on larger projects or collaborating with others. meaningful variables also speeds up the debugging process and reduces the chances of introducing errors when making changes


 //Common pitfall to avoid while naming the variables?
Ans- Common pitfall to avoid while naming the variables-
1.Using Generic or Ambiguous Names--.Ambiguous and generic names can lead 
to confusion during debugging and also lack context, which impacts the readability of code.
2.Naming variables as data, value, temp and functions as fetchData , makeThing, runAndCheck, getData.
3. Inconsistent Naming Conventions- Mixing different convetions like  PascalCase, snake_case, and camelCase all together and following  no consistent way of defining a variable can leads to the confusion and makes it hard to understand the code.
Overusing Abbreviations-Overly using abbreviations like usr , usrprfl
 Can be unclear and hard to interpret later.
Best Practice: Use complete and meaningful words (user, userProfile).
4.: using Single-Letter Variables -Using single letters for variables like i, g, k is something every developer should avoid.
 Single-letter variables tend to make code less understandable.
5. Using reserved keywords (e.g., let, if, class, function) or JavaScript built-in function names (e.g., Array, String) as variable names.
This will lead to syntax errors or unexpected behavior, as these are already reserved for specific purposes in the language.
So here we can say that above are the practices we should avoid in our code writing journey  instead we should opt for  aim for clear, descriptive, and consistent names that reflect the purpose of the variable. One example is  for variables, use a consistent naming scheme, such as camelCase.


Ques-How do clear variable names benefit team collobration? 
Ans-Clear variable names are an essential part of effective team collaboration in programming Using clear and meaningful variable names encourages developers to adopt best practices in their coding approach, resulting in better-quality code overall.They improve readability, reduce errors, speed up code reviews, and make debugging easier. They also help onboard new team members quickly, promote best practices, and ultimately lead to more efficient development processes. In a team environment, well-chosen variable names help ensure that everyone is on the same page, making collaboration smoother and more productive. For example, Clear names promote a shared understanding across the entire team, even among non-developers, which fosters better communication and collaboration.



*/
