## You will need to run NPM install to have all of the necessary dependencies for this project.

## Purpose

Run-time: ~1 hour

This workshop is designed to target these pain points specific to the Geo-Vermonter project:

* Manipulation of the marker via props.
* Implementation of leaflet-pip and understanding its functionality.

It also touches upon:

* A method of organizing styling for React components via using an imported styles object.

## Lesson Guide


### Manipulation of Marker Via Props:
Within App.js, fulfill the logical steps laid out between lines 34 and 52.

As you are coding along, some things to go over:

* Why marker is destructured

* What event.target is and how it relates to the onClick functionality on the button

* Why only the lon values are changed for lateral movement.

* Where the west facing icon is coming from

### Implementation of leaflet-pip and understanding its functionality.

Within Map.js, fulfill the logical steps laid out between lines 24-41.

As you are coding along, some things to go over:

* Why use the useEffect hook for leaflet-pip

* Showing the flow of data between App.js (parent) and Map.js (child) and how we destructure our props object.

* What the two arguments passed into leaflet-pip are and what `.pointInLayer` returns; why we check the length of its return.

* Why h2 is first initialized on line 19 so we can set its value programmatically within the useEffect.

### Bonus: the `styles` object.

Go over how the import from `styles.js` is simply an object we can de/structure to set up our styling in a clear, semantic way. Best practices in CSS is to limit the amount of lines you write; the `Theme` object represents styles used across components and then the `App` object contains the styles for that component specifically.