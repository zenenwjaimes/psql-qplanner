import './App.css';
import Plan from './Plan.js';
import QueryForm from './QueryForm.js';
import './QueryForm.css';
import React, { useState } from 'react';

function App() {
  const [queryPlan, setQueryPlan] = useState([]);
  const getQueryPlan = (data) => {
    let j = null;

    try {
      j = JSON.parse(data);
    } catch (e) {
      j = [];
    }

		setQueryPlan(j);
  };

  return (
    <div className="App">
      <header className="App-header">
        <QueryForm handler={ getQueryPlan } placeholder="Valid JSON ONLY! Must be the entire JSON from the EXPLAIN (ANALYZE, FORMAT JSON) ..." />
        <code>
          Tips on how to read the old query plan, carries over to this json format somewhat.<br />
          Total Cost = cost = (XXXX.XX .. YYYY.YY) = (YYYY.YY - XXXX.XX)<br />
          Total Milliseconds = ("actual time" (2nd value - 1st value I assume) * loops)<br />
          Time (ms) per unit = (Total Milliseconds) / (Total Cost)<br />
          Memory used = (rows * width)/1000<br />
        </code>
        <Plan data={ queryPlan } />
      </header>
    </div>
  );
}

export default App;
