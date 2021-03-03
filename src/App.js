import './App.css';
import PlanItem from './PlanItem.js';
import PlanItem from './.js';

function App() {
	const res = null;
	const k = 'root';

  return (
    <div className="App">
      <header className="App-header">
				<PlanItem data={ res } parent={ null } uniqueKey={ k } key={ k } className="planItem" />
      </header>
    </div>
  );
}

export default App;
