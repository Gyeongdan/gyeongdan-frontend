import { Data } from 'plotly.js';

const insightsDataList = [
  {
    id: 1,
    date: '2023-07-01',
    title: '한국의 빵 소비 트렌드',
    comment: `지난 인사이트에 대해 알려줄게!
    한국에서 빵 소비가 증가하는 추세야! 맛있고 건강한 빵으로 생활을 즐겨봐! 🍞🥖🥯`,
    content: `최근 한국에서 빵 소비가 증가하고 있다는 사실이 통계로 입증되고 있습니다. 📊 통계청과 질병관리청의 자료에 따르면, 한국인의 연간 쌀 소비량은 2012년 69.8kg에서 2020년 57.7kg으로 감소한 반면, 빵의 일일 섭취량은 2012년 18.2g에서 2020년 19.4g으로 증가했습니다.
이와 같은 변화는 건강한 빵을 찾는 트렌드와 맞물려 있으며, 대학생 여러분도 건강한 빵을 통해 맛있고 건강한 생활을 즐길 수 있습니다. 🍞🥖🥯`,
    chart: {
      data: [
        {
          x: ['2012', '2014', '2016', '2018', '2020'],
          y: [18.2, 18.5, 18.8, 19.0, 19.4],
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'orange' },
        } as Data,
        {
          type: 'bar',
          x: ['2012', '2014', '2016', '2018', '2020'],
          y: [18.2, 18.5, 18.8, 19.0, 19.4],
          name: 'Daily Bread Consumption (g)',
          marker: { color: 'lightblue' },
        } as Data,
      ],
      layout: {
        title: '한국의 연도별 빵 소비량',
        xaxis: {
          title: '년도',
        },
        yaxis: {
          title: '일일 빵 소비량 (g)',
        },
      },
    },
  },
  {
    id: 2,
    date: '2023-07-02',
    title: '건강한 식습관의 중요성',
    comment: `지난 인사이트에 대해 알려줄게!
    건강한 식습관은 우리의 삶을 개선하고 질병 예방에 큰 역할을 해! 🥗🍎🥦`,
    content: `최근 연구에 따르면 건강한 식습관이 만성 질병 예방에 중요한 역할을 하고 있습니다. 🥗 올바른 식습관을 유지하면 심혈관 질환, 당뇨병, 비만 등의 만성 질환 발생 위험을 줄일 수 있습니다.
채소, 과일, 견과류, 통곡물 등 영양가 있는 음식을 적절히 섭취하는 것이 중요합니다. 🍎🥦`,
    chart: {
      data: [
        {
          x: ['2000', '2005', '2010', '2015', '2020'],
          y: [20, 25, 30, 35, 40],
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
        } as Data,
        {
          type: 'bar',
          x: ['2000', '2005', '2010', '2015', '2020'],
          y: [20, 25, 30, 35, 40],
          name: 'Healthy Diet Adherence',
          marker: { color: 'yellow' },
        } as Data,
      ],
      layout: {
        title: '연도별 건강한 식습관 준수율',
        xaxis: {
          title: '년도',
        },
        yaxis: {
          title: '준수율 (%)',
        },
      },
    },
  },
  {
    id: 3,
    date: '2023-07-03',
    title: 'AI 기술의 급격한 발전',
    comment: `지난 인사이트에 대해 알려줄게!
    AI 기술의 발전은 자율 주행, 의료 진단, 고객 서비스 등 다양한 분야에서 우리의 삶을 혁신하고 있어! 🤖💡🚗🏥`,
    content: `최근 몇 년간 AI 기술이 급속도로 발전하면서 다양한 분야에서 활용되고 있습니다. 🤖 자율 주행차, 의료 진단, 고객 서비스 등에서 AI의 사용이 증가하고 있으며, 특히 딥러닝과 머신러닝 기술은 대규모 데이터 분석과 예측에 큰 도움이 되고 있습니다.
앞으로도 AI 기술이 우리의 삶에 큰 변화를 가져올 것으로 기대됩니다. 💡🚗🏥`,
    chart: {
      data: [
        {
          x: ['2016', '2017', '2018', '2019', '2020', '2021'],
          y: [5, 10, 15, 20, 25, 30],
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'green' },
        } as Data,
        {
          type: 'bar',
          x: ['2016', '2017', '2018', '2019', '2020', '2021'],
          y: [7, 14, 21, 28, 35, 42],
          name: 'AI Adoption in Industries',
          marker: { color: 'purple' },
        } as Data,
      ],
      layout: {
        title: '산업별 AI 기술 채택 증가',
        xaxis: {
          title: '년도',
        },
        yaxis: {
          title: 'AI 기술 채택 비율 (%)',
        },
      },
    },
  },
];

export default insightsDataList;
