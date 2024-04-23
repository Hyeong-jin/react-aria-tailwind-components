import React from 'react'

import * as echarts from 'echarts'
import ECharts, { EChartsInstance } from 'echarts-for-react'

export interface IChartProps {
  title?: string
  options?: echarts.EChartsOption
  data?: any
}

export const Chart = (props: IChartProps) => {
  const [options, setOptions] = React.useState<echarts.EChartsOption>(
    props.options || {},
  )

  const echartsRef = React.useRef<EChartsInstance | null>(null)

  React.useEffect(() => {
    setOptions(props.options || {})
    /** if (echartsRef.current) {
      const echarts = echartsRef.current
      echarts.on('updateAxisPointer', function (event: any) {
        const xAxisInfo = event.axesInfo[0]
        if (xAxisInfo) {
          const dimension = xAxisInfo.value + 1
          echarts.setOption({
            series: {
              id: 'pie',
              label: {
                formatter: '{b}: {@[' + dimension + ']} ({d}%)',
              },
              encode: {
                value: dimension,
                tooltip: dimension,
              },
            },
          })
        }
      })
    } **/
  }, [props.options])

  // update data
  React.useEffect(() => {
    if (echartsRef.current) {
      echartsRef.current.setOption({
        series: {
          id: 'pie',
          data: props.data,
        },
      })
    }
  }, [props.data])

  return (
    <div className="chart m-1 p-1">
      <div className="chart-title text-center text-xl font-bold">
        {props.title}
      </div>
      <ECharts
        onChartReady={(chart: EChartsInstance) => {
          echartsRef.current = chart
          chart.hideLoading()
        }}
        option={options}
        theme="myTheme" // 적용할 테마 이름
        opts={{ renderer: 'canvas', width: 'auto', height: 320, locale: 'ko' }}
      />
    </div>
  )
}

Chart.displayName = 'Chart_Component_View'
