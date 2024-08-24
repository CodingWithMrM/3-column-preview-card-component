'use client'

import React from 'react'
import { CarsData } from '../mock-data/mock-data'
import PreviewCardComponent from '../components/preview-card-component'

import { motion } from 'framer-motion'

const PreviewCardContainer = () => {
    return (
        <div className='flex flex-col lg:flex-row py-4 '>

            {CarsData && CarsData?.map((car, index) =>
            (
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: index * 0.5 }}
                >

                    <PreviewCardComponent
                        className={`${index === 0 && 'rounded-tl-lg lg:rounded-bl-lg rounded-tr-lg lg:rounded-tr-none'} ${index === 2 && 'lg:rounded-tr-lg rounded-br-lg rounded-bl-lg lg:rounded-bl-none'}`}
                        title={car.title}
                        description={car.description}
                        icon={car.icon}
                        bgColor={car.bgColor}
                        textColor={car.textColor}
                    />
                </motion.div>

            )

            )}

        </div>
    )
}

export default PreviewCardContainer