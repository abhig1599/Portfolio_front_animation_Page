import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { uidesigns} from '@/data'
import { Button } from './ui/MovingBorders'

const UiDesigns = () => {
    return (
        <div className="py-12" id='achievements'>
            <h1 className="heading mb-10">
                My{" "}
                <span className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-400 bg-clip-text text-transparent font-pacific">UI Designs</span>

            </h1>
            <div className="flex flex-col  items-center ">
                <div className='h-80 md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>

                <InfiniteMovingCards
                items={uidesigns} direction='right' speed='normal'/>
            <Button className='p-2'><a href='https://abhig1599.framer.website/' target='_abhig1599'>View more Designs</a></Button>
                </div>
            </div>
            
        </div>

    )
}

export default UiDesigns