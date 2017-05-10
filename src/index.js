import React from 'react';
import ReactDOM from 'react-dom';
import MonthPicker from './component/month-picker';

ReactDOM.render(
  <MonthPicker  onChange={(date)=>console.log(date)}/>,
  document.getElementById('root')
);
