import AnalyticsCard from '@/app/_components/cards/analyticsCard';
import DoughnutChart from '@/app/_components/charts/doughnut';
import { LineChart } from '@/app/_components/charts/line';
import React from 'react'
import { TbArrowBadgeRight, TbArrowBadgeRightFilled, TbInfoCircle, TbStarFilled } from 'react-icons/tb'

const DashboardHome = () => {
  return (
    <div className='w-full'>
        <div className='h-auto bg-white p-4 shadow-sm rounded-md'>
          <p className='font-semibold text-yellow-dark'>Discover the tool&rsquo;s full potential</p>

          <div className='w-auto rounded-md text-yellow-dark mt-3 flex gap-2 items-center text-sm'>
            <TbStarFilled className="text-yellow-dark" />
            <p className=''>You can always resend a mail that failed initially</p>
          </div>
        </div>

        <div className='flex gap-5 mt-4'>
          <div className='w-3/12 h-auto'>
              <AnalyticsCard id='website-analytics' title='Website' description='Here are the websites you have connected to the platform'>
              <div className='text-yellow-dark mt-5'>
                {/* Typical website summary item */}

                <div className='my-3 flex justify-between items-center'>
                  <div className='flex items-center cursor-pointer'>
                    <TbArrowBadgeRight fontSize={20} />
                    <p className='flex-1'>gwarthur.org</p>
                  </div>

                  <p className='text-xs text-gray-400 font-semibold'>Pending</p>
                </div>

                <div className='my-3 flex justify-between items-center'>
                  <div className='flex flex-1 items-center text-yellow-dark cursor-pointer'>
                      <TbArrowBadgeRight fontSize={20} />
                    <p className='flex-1'>kuantu.org</p>
                  </div>

                  <p className='text-xs text-amber-400 font-semibold'>Connected</p>
                </div>

                <div className='my-3 flex justify-between items-center'>
                  <div className='flex flex-1 items-center text-amber-500 cursor-pointer'>
                    <TbArrowBadgeRightFilled fontSize={20} />
                    <p className='flex-1'>completefarmer.com</p>
                  </div>

                  <p className='text-xs text-amber-400 font-semibold'>Connected</p>
                </div>

                <div className='border-0 border-t border-t-gray-100 pt-1 text-sm text-gray-500 text-right cursor-pointer'>See more</div>
              </div>
              </AnalyticsCard>
          </div>


          <div className='w-6/12 h-50 bg-white rounded-md'>
            <AnalyticsCard  id={'pages-analytics'} title='Usage for completefarmer.org' description='You will see here, the time series of the incoming data and the mails forwarded'>
              <div className='h-full'>
                <LineChart />
              </div>
            </AnalyticsCard>
          </div>
          {/* <div className='w-4/12 h-auto bg-white p-4 shadow-sm rounded-md'>
              <div className='flex items-start justify-between'>
                  <div className='flex-1'>
                      <p className='font-semibold text-neutral-800'>Pages</p>
                      <p className='w-11/12 text-sm text-neutral-400'>You see the time series of the incoming data and the mails forwarded</p>
                  </div>
                  <TbInfoCircle className='text-neutral-300 cursor-pointer' fontSize={16}/>
              </div>
          </div> */}
      </div>
    </div>
  )
}

export default DashboardHome