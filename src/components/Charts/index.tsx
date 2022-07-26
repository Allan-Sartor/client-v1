import { Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Props } from 'react-apexcharts';
import { theme } from '../../styles/theme';

interface ChartsProps extends Props {
  title: string;
}

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false, // server side rendering is disabled
}) // load component dynamic 

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    theme: "dark"
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    },
  },
};

const series = [
  {
    name: 'Entradas', 
    data: [10, 120, 55, 66, 80, 133, 140]
  },
  {
    name: 'Saidas', 
    data: [5, 200, 30, 96, 55, 100, 160]
  }
];

export function Charts({ title, ...rest}: ChartsProps) {
  return(
    <>
      <Text fontSize="lg" mb="4">{title}</Text>
      {/* <Chart options={options} series={series} type="area" height={160} {...rest} /> */}
    </>
  );
}