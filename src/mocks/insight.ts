const insightData = {
  id: 1,
  comment: `오늘의 인사이트에 대해 알려줄게!
오늘은 한국인의 빵 소비가 늘어나는 이유에 대해 알아볼 거야!`,
  title: '요즘 한국에서 빵 많이 먹는다고?! 헐 대박!',
  content: `진주시의 월별 코로나 확진자수 추이를 살펴보면, 3월부터 6월까지 확진자수가 변동하는 모습을 볼 수 있습니다. 
3월에는 1626명의 확진자가 발생했으며, 4월에는 1736명으로 소폭 증가했습니다. 
5월에는 3895명으로 급증했으나, 6월에는 다시 3142명으로 감소하는 경향을 보였습니다. 
이러한 데이터는 진주시의 코로나 확산 상황을 이해하는 데 중요한 자료가 될 것입니다. 
시민들은 방역 수칙을 철저히 준수하여 추가 확산을 막기 위해 노력해야 할 것입니다. 
또한, 시 당국은 지속적인 모니터링과 신속한 대응을 통해 시민들의 안전을 지켜야 할 것입니다.`,
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
};

export default insightData;
