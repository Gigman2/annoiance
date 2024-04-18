'use client'

import AnalyticsCard from '@/app/_components/cards/analyticsCard';
import { TrafficAnalytics } from '@/app/_components/cards/trafficAnalytics';
import WebsiteAnalyticsCard from '@/app/_components/cards/websiteAnalytics';
import DoughnutChart from '@/app/_components/charts/doughnut';
import { linkedSites } from '@/app/_mock/websiteData';
import { doughnutChartData, doughnutChartOptions } from '@/app/_utils/constants';
import React, { useState } from 'react'
import { TbStarFilled } from 'react-icons/tb'



const DashboardHome = () => {
  const [active, setActive] = useState<number | undefined>()

  return (
    <div className='w-full'>
        <div className='h-auto bg-white p-4 shadow-sm rounded-md'>
          <p className='font-semibold text-yellow-dark'>Discover the tool&rsquo;s full potential</p>

          <div className='w-auto rounded-md text-yellow-dark mt-3 flex gap-2 items-center text-sm'>
            <TbStarFilled className="text-yellow-dark" />
            <p className=''>You can always resend a mail that failed initially</p>
          </div>
        </div>

        <div className='flex gap-5 mt-5'>
          <div className='w-3/12'>
              <AnalyticsCard id='website-analytics' title='Website' description='Here are the websites you have connected to the platform'>
                <WebsiteAnalyticsCard data={linkedSites} active={active} setActive={setActive}  />
              </AnalyticsCard>
          </div>


          <div className='w-6/12'>
            <AnalyticsCard  id={'insight-analytics'} title='Usage for completefarmer.org' description='You will see here, the time series of the incoming data and the mails forwarded'>
              <div className='h-60'>
                <TrafficAnalytics active={active as number}/>
              </div>
            </AnalyticsCard>
          </div>

          <div className='w-3/12'>
            <AnalyticsCard  id={'pages-analytics'} title='Page Segmentation' description='You will see here, the time series of the incoming data and the mails forwarded'>
              <div className='h-60'>
                <DoughnutChart data={doughnutChartData} options={doughnutChartOptions} />
              </div>
            </AnalyticsCard>
          </div>
      </div>
    </div>
  )
}

export default DashboardHome