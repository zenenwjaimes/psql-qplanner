import './PlanItem.css';

const PlanItem = ({ data, uniqueKey, className, depth = 0, parent = null, item = 'Plans' }) => {
  if (data === null || !Array.isArray(data)) {
    return null;
  }

  let subPlan = false;
  if (data.hasOwnProperty(item)) {
    subPlan = true;
  }

  depth++;
  const color = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

  const colorIdx = (depth % color.length);
  const borderStyle = {
    border: "1px solid " + color[colorIdx]
  };

  return (
    <div className={ className } depth={ depth } style={ borderStyle }>
      <div className={ className + "__queryPlan" }>
        <div className={ className + "__title" }>Plan Depth {depth}</div>
      { 
        Object
          .entries(data)
          .filter(entry => !(entry[1] instanceof Object) )
          .map((entry, idx) => {
            const cKey = uniqueKey + '_list_' + idx + '_' + 0;
            const className = 'kv';

            return (
              <ul className={ className } key={ cKey }>
                <li key="key" className={ className + '__key'}>{ entry[0] }</li>
                <li key="val" className={ className + '__val'}>{ String(entry[1]) }</li>
              </ul>
            ); 
      })}
      </div>
      { subPlan === true &&
          data[item].map((val, idx) => {
            const idKey = uniqueKey + '_' + idx;
            return (<PlanItem data={val} parent={data} uniqueKey={idKey} key={idKey} className={ "planItem" } depth={ depth } />);
          })
      }
    </div>
  );
};

export default PlanItem;
