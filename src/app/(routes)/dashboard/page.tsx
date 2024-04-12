import AnalyticsCard from '@/app/_components/cards/analyticsCard';
import DoughnutChart from '@/app/_components/charts/doughnut';
import React from 'react'
import { TbInfoCircle, TbStarFilled } from 'react-icons/tb'

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const DashboardHome = () => {
  return (
    <div className='w-full'>
        <div className='h-auto bg-white p-4 shadow-sm rounded-md'>
          <p className='font-semibold text-neutral-800'>Tips</p>

          <div className='w-auto rounded-md py-4 px-3 bg-blue-50 text-blue-400 mt-3 flex gap-2 items-center'>
            <TbStarFilled className="text-blue-400" />
            <p>You can always resend a mail that failed initially</p>
          </div>
        </div>

        <div className='flex gap-5 mt-4'>
          <div className='w-3/12 h-auto'>
              <AnalyticsCard id='website-analytics' title='Website' description='Here are the websites you have connected to the platform'>
                hello world
              </AnalyticsCard>
          </div>
          <div className='w-5/12 h-auto bg-white p-4 shadow-sm rounded-md'>
              <div className='flex items-start justify-between'>
                  <div className='flex-1'>
                      <p className='font-semibold text-neutral-800'>Usage</p>
                      <p className='w-11/12 text-sm text-neutral-400'>You see the timeseries of the incoming data and the mails forwarded</p>
                  </div>
                  <TbInfoCircle className='text-neutral-300 cursor-pointer'fontSize={16} />
              </div>
          </div>
          <div className='w-4/12 h-auto bg-white p-4 shadow-sm rounded-md'>
              <div className='flex items-start justify-between'>
                  <div className='flex-1'>
                      <p className='font-semibold text-neutral-800'>Pages</p>
                      <p className='w-11/12 text-sm text-neutral-400'>You see the time series of the incoming data and the mails forwarded</p>
                  </div>
                  <TbInfoCircle className='text-neutral-300 cursor-pointer' fontSize={16}/>
              </div>
          </div>
      </div>
    </div>
  )
}

export default DashboardHome