import React from 'react'
import suvIcon from '@/public/icons/suvs-icon.svg'
import Image from 'next/image'
import { BigShouldersDisplayFont } from '../layout'
import { CarsData } from '../mock-data/mock-data'
import PreviewCardComponent from '../components/preview-card-component'

const PreviewCardContainer = () => {
    return (
        <div className='flex flex-col lg:flex-row py-4 '>

            {CarsData && CarsData?.map((car, index) => {

                const firstIndex = index;
                console.log('firstIndex:', firstIndex)

                return (


                    <PreviewCardComponent
                        className={`${index === 0 && 'rounded-tl-lg rounded-bl-lg'} ${index === 2 && 'rounded-tr-lg rounded-br-lg'}`}
                        key={car.id}
                        title={car.title}
                        description={car.description}
                        icon={car.icon}
                        bgColor={car.bgColor}
                    />
                )
            }
            )}

        </div>
    )
}

export default PreviewCardContainer