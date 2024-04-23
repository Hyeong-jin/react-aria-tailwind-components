import { StoryObj, Meta } from '@storybook/react'
import { Chart } from '../src/Chart'
import * as echarts from 'echarts'

/**
 *
 *  Chart 컴포넌트는 ECharts의 Chart 컴포넌트이로 작성되어 있습니다.
 *
 */
const meta = {
  title: 'Data Visualization/Chart',
  component: Chart,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Chart>

export default meta

type Story = StoryObj<typeof meta>

/**
 *
 * ```tsx
 * import { Chart, ChartProps } from 'gss-ui';
 *
 * export default function MyChart() {
 *   const props:ChartProps = {
 *     title: 'Chart Component View Title',
 *   };
 *   return <Chart {...props}/>;
 * }
 * ```
 */
export const LineChart: Story = {
  args: {
    title: 'Chart Component View Title',
    options: {
      title: {
        text: 'Line Chart Title',
        left: 'center',
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        },
      ],
    },
  },
}
