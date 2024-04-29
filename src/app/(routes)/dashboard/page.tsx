'use client'

import AnalyticsCard from '@/app/_components/cards/analyticsCard';
import PageAnalytics from '@/app/_components/cards/pageAnalytics';
import { TrafficAnalytics } from '@/app/_components/cards/trafficAnalytics';
import WebsiteAnalyticsCard from '@/app/_components/cards/websiteAnalytics';
import DoughnutChart from '@/app/_components/charts/doughnut';
import { linkedSites } from '@/app/_mock/websiteData';
import { doughnutChartData, doughnutChartOptions } from '@/app/_utils/constants';
import React, { useState } from 'react'
import { TbChartLine, TbStarFilled } from 'react-icons/tb'



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
          <AnalyticsCard  id={'insight-analytics'} 
            title={active !== undefined ? 'Usage for completefarmer.org' : 'Website usage'} 
            description={active !== undefined ? 'You will see here, the time series of the incoming data and the mails forwarded' : "Select a website on the pages sections to see its traffic"}>
            <div className='h-60'>
              {
                active !== undefined ? <TrafficAnalytics active={active as number}/> : 
                <div className='w-full'>
                  <div className='text-gray-400 text-sm'>Select a website on the pages sections to see its traffic</div>

                  <div className='mt-20 text-gray-500 flex flex-col  text-sm justify-center items-center text-center'>
                    <TbChartLine fontSize={48} />
                    <p>Nothing to show here</p>
                  </div>
                </div>
              }
            </div>
          </AnalyticsCard>
        </div>

        <div className='w-3/12'>
          <AnalyticsCard  id={'pages-analytics'} title='Page Segmentation' description='You will see here, the time series of the incoming data and the mails forwarded'>
            <div className='h-60'>
              {
                active !== undefined ? <PageAnalytics active={active as number}/> : 
                <div className='w-full'>
                  <div className='text-gray-400 text-sm'>Select a website on the pages sections to see its traffic</div>

                  <div className='mt-20 text-gray-500 flex flex-col  text-sm justify-center items-center text-center'>
                    <TbChartLine fontSize={48} />
                    <p>Nothing to show here</p>
                  </div>
                </div>
              }
            </div>
          </AnalyticsCard>
        </div>
      </div>

      <div className='flex gap-5 mt-5 mb-8'>
        <div className='w-8/12'>
            <AnalyticsCard id='live-feed' title='Live Data' description=''>
              <table className='table-auto w-full mt-4'>
                <thead className='text-left'>
                  <tr>
                    <th className='py-2'>Website</th>
                    <th>Page</th>
                    <th>Summary</th>
                    <th>Forwarded</th>
                    <th>Time since</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='bg-amber-50'>
                    <td className='py-2'>G.W.Arthur</td>
                    <td>contact</td>
                    <td>Thank you for all th ...</td>
                    <td>
                      <div className='w-12 h-4 rounded-sm bg-red-400'></div>
                    </td>
                    <td className='text-gray-700 text-sm'>2hrs ago</td>
                  </tr>
                  <tr className='bg-white'>
                    <td className='py-2'>Kuantu </td>
                    <td>contact</td>
                    <td>I want refund</td>
                    <td>
                      <div className='w-12 h-4 rounded-sm bg-green-400'></div>
                    </td>
                    <td className='text-gray-700 text-sm'>2hrs ago</td>
                  </tr>
                  <tr className='bg-amber-50'>
                    <td className='py-2'>Kuantu </td>
                    <td>booking</td>
                    <td>I&lsquo;m interested in the trip</td>
                    <td>
                      <div className='w-12 h-4 rounded-sm bg-gray-400'></div>
                    </td>
                    <td className='text-gray-700 text-sm'>2hrs ago</td>
                  </tr>
                  <tr className='bg-white'>
                    <td className='py-2'>Completefarmer </td>
                    <td>contact</td>
                    <td className='text-sm'>I want refund</td>
                    <td>
                      <div className='w-12 h-4 rounded-sm bg-green-400'></div>
                    </td>
                    <td className='text-gray-700 text-sm'>2hrs ago</td>
                  </tr>
                </tbody>
              </table>
            </AnalyticsCard>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome