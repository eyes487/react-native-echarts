import echarts from './echarts.min';
import toString from '../../util/toString';
var myChart = null;
export default function renderChart(props,isFirst) {
  const height = props.height || 400;
    if (isFirst){
      return `
    document.getElementById('main').style.height = "${height}px";
    myChart = echarts.init(document.getElementById('main'));
    myChart.clear();
    myChart.setOption(${toString(props.option)});
  `
    }else{
      return `
    document.getElementById('main').style.height = "${height}px";
    myChart.clear();
    myChart.setOption(${toString(props.option)},true);
  `
    }
}