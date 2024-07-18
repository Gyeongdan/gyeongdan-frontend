const insightsDataList = [
  {
    id: 1,
    date: '2023-07-01',
    title: '요즘 한국에서 빵 많이 먹는다고?!',
    content: `한국인의 빵 소비가 늘고 있는 것도 통계로 확인 가능함. 📊 통계청과 질병관리청 자료에 따르면, 1인당 연간 쌀 소비량은 2012년 69.8kg에서 2020년 57.7kg으로 줄어든 반면, ~~~~

하루 빵 섭취량은 2012년 18.2g에서 2020년 19.4g으로 늘었음. 이렇게 한국에서도 빵 소비가 늘면서 건강한 빵을 찾는 트렌드가 강해지고 있음. 대학생 여러분도 건강한 빵으로 맛있게 건강 챙겨보세요! 🍞🥖🥯`,
    chart: {
      data: [
        {
          x: [1, 2, 3, 4],
          y: [10, 15, 13, 17],
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
        },
        {
          type: 'bar',
          x: [1, 2, 3, 4],
          y: [12, 18, 9, 14],
        },
      ],
      layout: {
        title: 'A Fancy Plot',
      },
    },
  },
  {
    id: 2,
    date: '2023-07-02',
    title: '기후 변화와 우리의 대응',
    content: `기후 변화로 인해 전 세계적으로 극단적인 기후 현상이 증가하고 있음. 🌍 예를 들어, 폭염, 홍수, 가뭄 등이 점점 더 빈번해지고 있음.

이러한 변화는 농업 생산성에도 큰 영향을 미쳐서 식량 안보에도 위협이 되고 있음. 우리 모두 기후 변화에 관심을 가지고 지속 가능한 생활 방식을 채택해야 해요! 🍃🌱`,
    chart: {
      data: [
        {
          x: ['2010', '2011', '2012', '2013'],
          y: [30, 35, 40, 45],
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'blue' },
        },
        {
          type: 'bar',
          x: ['2010', '2011', '2012', '2013'],
          y: [20, 25, 30, 35],
        },
      ],
      layout: {
        title: 'Climate Change Impact',
      },
    },
  },
  {
    id: 3,
    date: '2023-07-03',
    title: 'AI 기술의 발전',
    content: `AI 기술은 지난 몇 년간 급속도로 발전해 왔음. 🤖 이제는 자율 주행차, 의료 진단, 고객 서비스 등 다양한 분야에서 AI가 사용되고 있음.

특히, 딥러닝과 머신러닝 기술은 많은 데이터를 분석하고 예측하는 데 큰 도움을 주고 있음. 앞으로도 AI 기술의 발전이 우리의 삶을 크게 변화시킬 것으로 기대됨. 💡🚗🏥`,
    chart: {
      data: [
        {
          x: ['2018', '2019', '2020', '2021'],
          y: [5, 10, 15, 20],
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'green' },
        },
        {
          type: 'bar',
          x: ['2018', '2019', '2020', '2021'],
          y: [7, 14, 21, 28],
        },
      ],
      layout: {
        title: 'AI Technology Growth',
      },
    },
  },
];

export default insightsDataList;
