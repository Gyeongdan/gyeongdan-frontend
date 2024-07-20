const hiddenGems = [
  {
    id: 1,
    title: '정선 아우라지마을',
    content:
      '정선 아우라지마을은 예쁜 계곡과 맑은 물로 유명한 곳이에요. ⛲\n이곳은 과거부터 민속촌 같은 분위기로 많은 이들이 찾아오는 명소였어요. 맑은 물과 푸른 자연 속에서 즐기는 여유로운 시간은 정말 특별해요. 특히, 여름에는 계곡에서 물놀이를 즐기기 좋고, 가을에는 단풍이 아름다워 산책하기 좋은 곳이에요. 🍁\n하지만 최근 몇 년 동안 관광객이 줄어들면서 마을 경제가 많이 어려워졌어요. 마을 주민들은 생계를 위해 힘든 시간을 보내고 있으며, 전통 문화를 유지하는데 어려움을 겪고 있어요. 😢\n우리가 이 아름다운 마을을 지키기 위해 더 많은 관심을 가져야 해요. 주말에 친구들과 함께 정선 아우라지마을을 방문해보세요. 맑은 공기와 아름다운 자연 속에서 힐링할 수 있을 거예요. 🌿',
    imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MjhfMjk0%2FMDAxNTk4NTg0NjU1NTQ2.Qu9sBGDkKOZ2KB7zm-cjwpKvA38o_ESEQ_Mnr-vyorsg.FMa1HkUp8kWxipC36WXSC6OlQpDF1YdKFp7B9jW3LfAg.PNG.lightboxlab%2FThumbnail.png&type=sc960_832',
    x: 37.3793,
    y: 128.6616,
  },
  {
    id: 2,
    title: '청송 주왕산마을',
    content:
      '청송 주왕산마을은 주왕산 국립공원 근처에 위치해 있어 멋진 자연 경관을 자랑해요. 🌄\n이곳은 사계절 내내 아름다운 풍경을 자랑하며, 특히 가을에는 단풍이 절경을 이루어 많은 사람들이 찾았던 곳이에요. 🍂\n그러나 최근 몇 년 동안 관광객이 급감하면서 마을 상권이 침체되어 많은 가게들이 문을 닫았어요. 주왕산의 아름다움을 즐기고 마을 주민들을 도와주기 위해 많은 이들이 방문해주었으면 해요. 😔\n주왕산마을에서 하이킹을 즐기고, 맑은 공기를 마시며 자연 속에서 힐링하는 시간을 가져보세요. 그리고 마을에서 운영하는 작은 상점과 카페들을 방문해 지역 경제에도 도움을 주었으면 좋겠어요. 🍃',
    imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130124_272%2Fsung1735_1359006236881C5jrX_JPEG%2FKSS_8232.jpg&type=sc960_832',
    x: 36.3446,
    y: 129.0571,
  },
  {
    id: 3,
    title: '양구 두타연마을',
    content:
      '양구 두타연마을은 아름다운 계곡과 울창한 숲으로 유명한 곳이에요. 🌳\n이곳은 자연의 아름다움을 그대로 간직하고 있어, 도시의 번잡함을 벗어나고 싶은 사람들에게 안성맞춤인 곳이에요. 🌲\n그러나 관광객 감소와 함께 농산물 판매가 줄어들어 마을 주민들의 생계가 어려워졌어요. 과거에는 많은 사람들이 찾았던 관광 명소였지만, 이제는 관심이 줄어들어 위기에 처해있답니다. 😢\n두타연마을에서 자연과 하나 되는 시간을 보내보세요. 계곡에서 피크닉을 즐기고, 숲 속을 산책하며 힐링하는 시간을 가질 수 있어요. 그리고 마을 주민들이 정성껏 키운 농산물도 구매해서 맛보세요. 우리의 작은 관심이 마을을 지키는 큰 힘이 된답니다. 🍃',
    imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MTZfMjA5%2FMDAxNjkyMTk2OTYxNjIy.vtgqtLu7296AUHuvKEEB6iAvkm-DTX8AOhNjqSYsqZwg.VM6kA-GRj4mljMW_V33BTkkI_yiicJYztqoglt5D9owg.JPEG.dewdoll%2F20221001_143251.jpg&type=sc960_832',
    x: 38.1016,
    y: 127.9897,
  },
  {
    id: 4,
    title: '강진 청자골마을',
    content:
      '강진 청자골마을은 전통 청자 도자기로 유명한 곳이에요. 🏺\n이곳에서는 아름다운 청자 도자기를 직접 만들어보는 체험을 할 수 있어요. 도자기를 빚으며 느끼는 마음의 평온함은 정말 특별해요. 🎨\n하지만 최근 도자기 시장의 침체와 함께 관광객이 줄어들면서 마을 경제가 어려워졌어요. 😔\n청자골마을의 전통을 지키기 위해 많은 사람들이 방문해주어야 해요. 도자기 체험도 하고, 아름다운 자연도 즐길 수 있어요. 우리의 관심과 방문이 마을에 큰 도움이 될 거예요. 🌿',
    imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MTJfMTYx%2FMDAxNjk0NTAyMjUzMjA1.V6PItlGjqs-AdEjmwpDcUCQ9tc-ywWW9tLoJVvrS7y8g.mv2g_5bk7XkvgASzAV9ceDwOKkTCziQord1AiC-UBIwg.JPEG.fsohx10%2FIMG_4409.jpg&type=sc960_832',
    x: 34.6421,
    y: 126.7658,
  },
  {
    id: 5,
    title: '함평 나비마을',
    content:
      '함평 나비마을은 나비 축제로 유명한 곳이에요. 🦋\n봄이 되면 나비와 꽃이 가득한 이곳에서 아름다운 풍경을 감상할 수 있어요. 🌷\n하지만 축제 시즌 외에는 관광객이 거의 없어 마을 경제가 어려움을 겪고 있어요. 😢\n나비마을의 아름다움을 유지하고 마을 주민들을 돕기 위해서는 더 많은 관심과 방문이 필요해요. 나비와 꽃이 가득한 이곳에서 아름다운 추억을 만들어보세요. 🌼',
    imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MzBfMTIz%2FMDAxNzE0NDc0Mjc4NTc4.943crSOmERlWxQ-6cJRuqZubCIeG6e8ASLWPpSjEpi0g.b-N_ymLKV74Y8bAWWJCbNyjrkbcdLmsRgJbtpxeYvaUg.JPEG%2F_NZ74880.jpg-0.jpg&type=sc960_832',
    x: 35.0633,
    y: 126.5167,
  },
];

export default hiddenGems;
