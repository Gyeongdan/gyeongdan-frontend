'use client';

import React from 'react';
import Plot from 'react-plotly.js';

import { Layout, Data } from 'plotly.js';

interface PlotDataProps {
  data: Data[];
  layout: Partial<Layout>;
}

const ChartRenderer = ({ data, layout }: PlotDataProps) => {
  if (!data || !layout) {
    return <div>차트가 없어요</div>;
  }

  return <Plot data={data} layout={layout} />;
};

export default ChartRenderer;
