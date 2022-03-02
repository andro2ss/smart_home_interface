# Smart Home Interface

The task is to create a piece of web interface for a smart home system. 
At this moment the system should support three types of smart devices: 
light bulb, electric socket and temperature sensor.
### Objectives
1. The main screen should contain a list of devices connected to the system.
2. When you click on an item on the list, a window visualizing the state of the device should open.
3. The status of devices should be updated (simulated) on a regular basis.

## Used technology:
<li>React</li>
<li>Redux</li>
<li>Scss</li>
<li>MUI</li>

## Setup
To run this project, clone repo and install it locally using npm:

```
$ npm install
```

Then turn On JSON Server on first terminal:
```
$ json-server db.json --routes routes.json
```
Next on second terminal start npm:
```
$ npm start
```