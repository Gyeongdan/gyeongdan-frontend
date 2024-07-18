'use client';

import React from 'react';
import Plot from 'react-plotly.js';

import { Data, Layout } from 'plotly.js';

interface PlotDataProps {
  data: Data[];
  layout: Partial<Layout>;
  width: number;
  height: number;
}

const ChartRenderer = ({ data, layout, width, height }: PlotDataProps) => {
  if (!data || !layout) {
    return <div>차트가 없어요</div>;
  }

  return <Plot data={data} layout={layout} style={{ width, height }} />;
};

export default ChartRenderer;
