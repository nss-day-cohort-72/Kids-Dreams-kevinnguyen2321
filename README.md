# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > The Kids.js module contains the code that will execute once a user clicks on a child in the browser. In the Kids.js module there is a click event listener function and that function takes ‘click’ as an argument as well as e (event). I created a variable clickedItem which has a value of e.target. The “e” is the event object and target is a property of that object and target will refer to the specific element that triggered the event listener, in this case it would be the child “ <li>” element.  

Each child element has a data attribute called type with a value of “child”, so I added a condition to run code only on elements that have the dataset.type value of “child” that way the code runs only on the <li> elements for the children. Dataset is a property on the target object and it stores the data attributes that each element can have. 

Each child also has a data attribute called wish which has their wish stored as the string data type.I created a variable called “wish” to store the value of their wish data attribute which is a string data type as mentioned. Then I made another variable called childName which holds the textContent property of the child (string data type). This property is on the target object and is the text content of the specific <li> element in this case it would be the child’s name.

Finally I did an alert method and used template literals to use the childName variable and wish variable in the string to read  alert(`${childName}'s wish is ${wish}`);

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > So findCelebrityMatch is a function that takes a kidoObject and a celebrityArray. It’s being invoked in the Pairings function and stored in a variable called kidsStar. This variable’s value will be a certain celebrity object during each iteration of the for of loop inside Pairings function. 
 
 The Pairings function is looping over each kid in the kids array via a for of loop.The Pairings function is generating an html string that will create a <li> element each iteration and will use the kid.name property, kidStar.name,kidStar.sport, and kid.wish values. kidsStar will be the celebrity object and kid will be the kid object of each iteration of the loop. In order to get kidStar’s value which is a celebrity object we have to invoke findCelebrityMatch which takes the current kid object being iterated over in Pairings and compares it to a celebrity object in the celebrity array. 

There’s a condition in the findCelebrityMatch function to check if the kid object’s celebrityId value matches any of the celebrity object’s id value in the celebrities array  and if  the id’s match then the celebrity object will be returned in the findCelebrityMatch function to be used in the Pairings function.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > So each celebrity has a data attribute called sport with a string value of their sport. So similar to the child event listener here I created a variable called sport and the value is clickedItem.dataset.sport and clickedItem variable’s value is e.target which is the element clicked and there is a condition that says run this code only if the clickedItem.dataset.type has a value of “celebrity” as each celebrity element also has a data attribute with the value of celebrity.

I created a variable called celebName with its value being the textContent property’s value of the element being clicked which would be the celebrity name in this case and used the string method trim to get rid of the extra spacing and indentation.
I then used the alert method to show alert(`${celebName} is a ${sport} star`);

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > main.js is importing Pairings function from Pairings.js module, Celebrities function  from CelebrityList.js module and Kids function from Kids.js module.
 Each of these functions returns html content in the form of string data type. A variable called mainContainer is created and the value of this variable is the element with an id of ‘container’ which on the html file is a main element with the id of ‘container’ 

A variable called applicationHTML is created and its value is a string of html content for the page. It uses template literals and invokes the various functions imported when needed. Kids function is invoked underneath the h2 element that is labeled Kids to display the list of kids on the page. The same is done for celebrities and pairings.  Finally the innerHTML method is being called on the mainContainer variable and this displays all of the html elements on the DOM. 

