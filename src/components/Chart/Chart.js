import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const chartValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...chartValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
