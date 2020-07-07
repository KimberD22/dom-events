# dom-events

## Warm up
In order to warm up we're going to practice rendering information into our DOM with vanilla JS and some [JSON](https://www.w3schools.com/whatis/whatis_json.asp) data. Recently we've continuously been given starter code that receives a lot of information from an API (outside source) and then brings it to our local computer/app. Instead of doing that we'll work with some hardcoded values. You should do all of your work inside of the warm_up folder.

Requirements:
* Render a div with the class name of "wine" inside of the div with class container
* Inside of the div with class name of "wine"
    * an h1 with the title of the wine
    * a p tag with the description of the wine
    * an image with the correct image source
Example of how the div (created within your JS file) should look like
```html
<div class="wine">
    <h1>{{ wine title }}</h1>
    <p>{{ wine description }}</p>
    <img src="{{ wine source link }}" alt="...">
</div>
```

Go the extra mile (NOT REQUIRED. But if you want more practice with rendering info...):
* look at the code snippet below and refactor your code from the last requirements to fit this template
```html
<div class="row">
    <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
            <img src="{{ wine source link }}" alt="...">
            <div class="caption">
                <h3>{{ wine title }}</h3>
                <p>{{ wine description }}</p>
                <p><a href="#" class="btn btn-primary" role="button">More Details...</a></p>
            </div>
        </div>
    </div>
</div>
```

---

[Last lecture](https://github.com/angeljuarez77/dom-manipulation-2#lets-talk-about-events) we discussed what events were. If you need a refresher just click the link and you will be able to look at the examples and explanations written :) (although we really just showed you how to use and attach an event to a single button)

This lecture we're going to get a little more practice with events. We are going to do all of our work inside of the student_examples/events folder.

## Exercise
Our goal for this first exercise is to create a button that changes the color of a div every time we click it! Let's start off simple and only have the color of the div alternate between being blue and purple.

* First create a div and a button.
* Color the div blue.
* Attach an event listener on the button that console logs "I have been pressed" whenever you click it.
* Now that you've reached this point you have to decide how to change the color of the div

<details>
<summary>Need hints? Pseudocode steps</summary>
<br>

We'll begin the steps assuming that you've already created the button and div inside of your HTML file. AND that you colored the div blue using CSS.
* The steps to creating an event with JS are...
    1) You have to choose which element will trigger the event.
       * How do I choose an element within my Javascript file?
    2) You have to choose which event specifically will trigger the action you want ([click event](https://www.w3schools.com/jsref/event_onclick.asp), [keydown event](https://www.w3schools.com/jsref/event_onkeydown.asp), [on change event](https://www.w3schools.com/jsref/event_onchange.asp), [on mouse over](https://www.w3schools.com/jsref/event_onmouseover.asp))
       * What action will take place that logs out the message I want?
    3) You have to create an event listener
    4) Then you attach your event listener to the element you want.
       * How do I use the information from the last 2 steps to create the event listener?

Remember:
There will be a callback function within the event listener. What will this callback do?

* At first when you click the button you just want to ```console.log()``` a string.
    * What should be inside of the callback function of the event listener?
* Then after you ```console.log``` that string we could begin refactoring our code.
* When you click the button you want to change the color of a div... let's think.
    * We now need to target our div
    * We change the styling of it
        * What style property are we going to change?
        * What value should the property be changed to?
    * We specifically want to toggle between them 2 colors (purple and blue). How do you think we could do that?
        * We'd have to keep track of what stage/color the div is in at the current time.

</details>

<details>
<summary>Solution</summary>
<br>

1) First step of the solution. Where we only console log a string on a button press
```html
<div id="colored-div">
</div>

<button id="color-changer-button">Change color!</button>
```

```javascript
const chosenButton = document.getElementById('color-changer-button');

function functionToRun() {
    console.log('I have been pressed');
}

chosenButton.addEventListener("click", functionToRun);
```

2) Second step of the solution. Where we alternate colors of the div from blue to purple.
```html
<div id="colored-div">
</div>

<button id="color-changer-button">Change color!</button>
```

```css
#colored-div {
    border:solid black 1px;
    background-color: blue;
    width: 50px;
    height: 50px;
}
```

```javascript
const chosenButton = document.getElementById('color-changer-button');
const chosenDiv = document.getElementById('colored-div');
let blueOrNotBlue = true;

function functionToRun() {
    if(blueOrNotBlue) {
        chosenDiv.style.backgroundColor = "purple";
        blueOrNotBlue = !blueOrNotBlue
    } else {
        chosenDiv.style.backgroundColor = "blue";
        blueOrNotBlue = !blueOrNotBlue
    }
}
```
</details>

## Event bubbling - What is it?
When you have elements in your HTML page usually you'll have nested HTML tags. A lot of nested HTML tags...

Because of this there's a problem that occurs when you have nested elements which all have events attached to them.

That problem is that all the event handlers fire off when you only intend to create/use one event handler. This is called event bubbling.

In order to not trigger more events than you intended you have to stop the event bubbling