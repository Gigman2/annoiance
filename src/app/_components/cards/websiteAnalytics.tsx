import React, { Dispatch, SetStateAction } from 'react'
import { TbArrowBadgeRight, TbArrowBadgeRightFilled } from 'react-icons/tb'

const WebsiteAnalyticsCard = ({data, active, setActive}: {data: {name: string, link: string}[], active?: number, setActive: Dispatch<SetStateAction<typeof active>>}) => {
    const getStatusIcon = {
        CONNECTED:  <TbArrowBadgeRightFilled fontSize={20} />,
        PENDING: <TbArrowBadgeRight fontSize={20} />
    }
  return (
    <div className={'h-60 relative'}>
        {data.map((item, idx) => (
            <div key={item.name}
                onClick={() => setActive(idx)}
                className={`${idx === active ? 'text-amber-500' : 'text-yellow-dark'} my-3 flex justify-between items-center`} >
                <div className='flex items-center cursor-pointer'>
                    {getStatusIcon[idx === active ? 'CONNECTED' : "PENDING"]}
                    <p className='flex-1'>{item.name}</p>
                </div>

                <p className={`text-xs font-semibold ${idx === active ? 'text-inherit' : 'text-gray-400'} capitalize`}>{(idx === active ? 'CONNECTED' : "PENDING").toLowerCase()}</p>
            </div>)
        )}
        <div className='absolute bottom-1 w-full'>
        <div className='border-0 border-t border-t-gray-100 pt-1 text-sm text-gray-500 text-right cursor-pointer'>See more</div>
        </div>
    </div>
  )
}

export default WebsiteAnalyticsCard