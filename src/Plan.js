import PlanItem from './PlanItem.js';

const Plan = ({ data }) => {
  const k = 'root';

  return(
    <>
      { data.map((val, idx) => {
        return (
          <PlanItem data={ val['Plan'] } parent={ null } uniqueKey={ k + '_' + idx } key={ k + '_' + idx } className="planItem" />
        );
      })}
    </>
  );
};

export default Plan;
