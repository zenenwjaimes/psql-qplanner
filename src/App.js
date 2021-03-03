import './App.css';
import PlanItem from './PlanItem.js';
import QueryForm from './QueryForm.js';
import './QueryForm.css';
import React, { useState } from 'react';

function App() {
  const [queryPlan, setQueryPlan] = useState(null);
  const getQueryPlan = (data) => {
    let j = null;

    try {
      j = JSON.parse(data);
    } catch (e) {
      j = null;
    }

    if (!Array.isArray(j) || typeof(j[0]) === null || !j[0].hasOwnProperty('Plan')) {
      setQueryPlan(j);
      return;
    }

    setQueryPlan(j[0]['Plan']);
  };
  const k = 'root';

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
        <PlanItem data={ queryPlan } parent={ null } uniqueKey={ k } key={ k } className="planItem" />
      </header>
    </div>
  );
}

export default App;
