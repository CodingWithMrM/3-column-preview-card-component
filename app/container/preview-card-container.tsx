import React from 'react'
import { CarsData } from '../mock-data/mock-data'
import PreviewCardComponent from '../components/preview-card-component'

const PreviewCardContainer = () => {
    return (
        <div className='flex flex-col lg:flex-row py-4 '>

            {CarsData && CarsData?.map((car, index) =>
            (
                <PreviewCardComponent
                    className={`${index === 0 && 'rounded-tl-lg lg:rounded-bl-lg rounded-tr-lg lg:rounded-tr-none'} ${index === 2 && 'lg:rounded-tr-lg rounded-br-lg rounded-bl-lg lg:rounded-bl-none'}`}
                    key={car.id}
                    title={car.title}
                    description={car.description}
                    icon={car.icon}
                    bgColor={car.bgColor}
                />
            )

            )}

        </div>
    )
}

export default PreviewCardContainer