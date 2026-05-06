'use client'

import { ReactNode, createContext, useContext } from 'react'
import { Config } from './types'

export const ConfigContext = createContext<Config>({
  LOCALE: 'en',
  BEG_THRESHOLD: 0.2,
  CITY_NAME: 'default',
  MAP_CONFIG: {
    container: 'map',
    style: 'mapbox://styles/atreyut/cmos8tgh0003c01rye6nh8b6a',
    bounds: [
      [-4.184549, 40.156349],
      [-3.19578, 40.62702],
    ],
    maxBounds: [
      [-5.184549, 39.156349],
      [-2.19578, 41.62702],
    ],
    minZoom: 6,
    fadeDuration: 50,
  },
  STRIPE_LINK: '',
  METADATA: {
    title: 'BRT Memory',
    description: 'How many of the BRT stops can you name from memory?',
    openGraph: {
      title: 'BRT Memory',
      description:
        'How many of the BRT stops can you name from memory? Try this game to find out.',
      type: 'website',
      locale: 'en',
      url: 'https://github.com/atreyut/brt-memory/',
    },
  },
  LINES: {},
})

export const useConfig = () => useContext(ConfigContext)
export const Provider = ({
  children,
  value,
}: {
  children: ReactNode
  value: Config
}) => {
  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  )
}

export default Provider
