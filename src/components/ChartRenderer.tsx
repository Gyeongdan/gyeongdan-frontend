'use client';

import React from 'react';
import Plot from 'react-plotly.js';

interface PlotData {
  data: any[];
  layout: any;
}

const ChartRenderer: React.FC<PlotData> = ({ data, layout }) => {
  if (!data || !layout) {
    return <div>차트가 없어요</div>;
  }

  return <Plot data={data} layout={layout} />;
};

export default ChartRenderer;
