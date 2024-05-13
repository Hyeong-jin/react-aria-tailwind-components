import { default as React } from '../node_modules/react';

import * as echarts from 'echarts';
export interface IChartProps {
    title?: string;
    options?: echarts.EChartsOption;
    data?: any;
}
export declare const Chart: {
    (props: IChartProps): React.JSX.Element;
    displayName: string;
};
