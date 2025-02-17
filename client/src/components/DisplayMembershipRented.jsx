import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import {FundCardMembership} from '../components';

import { loader } from '../assets';

const DisplayMembershipRented = ({title , isLoading , campaigns}) => {
    const navigate = useNavigate();
    const handleNavigate = (campaign) => {
        navigate(`/Membership-details/${campaign.title}`
        ,{state:campaign})

    }

  
    return (
    <div className='mt-[27px]'>
        <h1 className='font-epilogue font-semibold
        text-[18px] text-white text left'>{title} 
        ({campaigns.length})</h1>

        <div className='flex flex-wrap mt-[20px] gap-[26px]'>
            {isLoading && (
                <img src = {loader} alt='loader' className='
                w-[100px] h-[100px] object-contain'/>
            )}

            {!isLoading && campaigns.length == 0 && (
                <p className='font-epilogue font-semibold
                text-[14px] leading-[30px] text-[#818183]'>
                    You have not rented any membership currently!!!
                </p>
            )}

            {!isLoading && campaigns.length > 0 && campaigns.map 
            ((campaign) => <FundCardMembership
                key={campaign.id}
                {...campaign}
                handleClick={() => handleNavigate(campaign)}
            />
            )}
        </div>
    </div>
  )
}

export default DisplayMembershipRented