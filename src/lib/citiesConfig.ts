import mexicoCity from '@/app/(game)/mexico-city/opengraph-image.jpg'
import mexibus from '@/app/(game)/mx-mexibus/opengraph-image.jpg'

import { StaticImageData } from 'next/image'

export interface ICity {
  name: string
  image: StaticImageData
  link: string
  disabled?: boolean
  hideInStats?: boolean
}

export const cities: ICity[] = [
  {
    name: 'Mexico City',
    image: mexicoCity,
    link: '/mexico-city',
  },
  {
    name: 'State of Mexico',
    image: mexibus,
    link: '/mx-mexibus',
  },
  // {
  //   name: 'Vancouver',
  //   image: vancouver,
  //   link: '/vancouver',
  // },
]
