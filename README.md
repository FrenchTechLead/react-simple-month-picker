#   Simple Month-Picker For React
This is a very light component that makes it possible to select a year and a month and automatically sets the day to the first day of the month then it returns the correspondent Javascript Date Object;
###Presentation
The component's width is responsive, it takes the width of the parent element.
![Image of the month picker](https://cloud.githubusercontent.com/assets/10856604/25960110/4b5c63d2-3676-11e7-89d6-4a926547e7ec.png)


### Installation
```shell
npm install react-simple-month-picker --save
```
### Example :
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import MonthPicker from 'react-simple-month-picker';

ReactDOM.render(<MonthPicker onChange={(date)=>{console.log(date);}} />,
  document.getElementById('root')
);
```
When the user selects a month the value can be retreived by the props function [onChange].

### Issues :
For any suggestion you can [open in issue here](https://github.com/Meshredded/react-simple-month-picker/issues).

### Licence :
MIT
