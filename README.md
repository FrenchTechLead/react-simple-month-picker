#   Simple Month-Picker For React
This is a very light component that makes it possible to select a year and a month and automatically sets the day to the first day of the month then it returns the correspondent Javascript Date Object;
### Installation
```shell
npm install react-simple-month-picker --save
```
### Example :
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import MonthPicker from 'react-simple-month-picker';

ReactDOM.render(<MonthPicker onChane={(date)=>{console.log(date);}} />,
  document.getElementById('root')
);
```
When the user selects a month the value can be retreived by the props function [onChange].

### Licence :
MIT
