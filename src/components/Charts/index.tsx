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
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '01-07-2022',
      '02-07-2022',
      '03-07-2022',
      '04-07-2022',
      '05-07-2022',
      '06-07-2022',
      '07-07-2022',
      '08-07-2022',
      '09-07-2022',
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
    data: [10, 120, 55, 66, 1000, 133, 140, 500, 700]
  },
  {
    name: 'Saidas', 
    data: [5, 200, 30, 96, 55, 100, 160, 350, 800]
  }
];

export function Charts({ title, ...rest}: ChartsProps) {
  return(
    <>
      <Text fontSize="lg" mb="4">{title}</Text>
      <Chart options={options} series={series} type="area" height={200} {...rest} />
    </>
  );
}
