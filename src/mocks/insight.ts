import { Data } from 'plotly.js';

const insightData = {
  id: 4,
  comment: `오늘의 인사이트에 대해 알려줄게!
오늘은 기후 변화와 그로 인한 해수면 상승에 대해 알아볼 거야! 🌊`,
  title: '해수면 상승, 우리의 미래는?',
  content: `최근 기후 변화로 인해 전 세계적으로 해수면이 상승하고 있습니다. 🌏
특히, 해수면 상승은 해안 도시와 섬 지역에 큰 위협이 되고 있으며, 홍수와 해안 침식을 초래하고 있습니다.
예를 들어, 2010년부터 2020년까지의 데이터를 보면 해수면이 연평균 약 3.3mm 상승한 것으로 나타났습니다.
이러한 현상은 해양 생태계와 인간 거주지에 큰 영향을 미치므로, 우리는 탄소 배출을 줄이고, 
지속 가능한 에너지로의 전환을 통해 기후 변화에 대응해야 합니다. 🌿`,
  chart: {
    data: [
      {
        x: ['2010', '2012', '2014', '2016', '2018', '2020'],
        y: [2.8, 2.9, 3.1, 3.2, 3.3, 3.3],
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'blue' },
      } as Data,
      {
        type: 'bar',
        x: ['2010', '2012', '2014', '2016', '2018', '2020'],
        y: [2.8, 2.9, 3.1, 3.2, 3.3, 3.3],
        name: 'Sea Level Rise (mm)',
        marker: { color: 'lightblue' },
      } as Data,
    ],
    layout: {
      title: '연도별 해수면 상승 추이',
      xaxis: {
        title: '년도',
      },
      yaxis: {
        title: '해수면 상승 (mm)',
      },
    },
  },
};

export default insightData;
