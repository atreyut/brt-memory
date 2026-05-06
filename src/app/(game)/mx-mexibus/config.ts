import { Metadata } from 'next'
import { MapboxOptions } from 'mapbox-gl'
import { Line } from '@/lib/types'

export const BEG_THRESHOLD = 1.5

export const LINES: { [name: string]: Line } = {
  MX1:  { name: 'Mexibús L1',  color: '#00b075', backgroundColor: '#006644', textColor: '#FFFFFF', order: 0 },
  MX1A: { name: 'Mexibús L1A', color: '#3b7f56', backgroundColor: '#254d35', textColor: '#FFFFFF', order: 1 },
  MX2:  { name: 'Mexibús L2',  color: '#e54360', backgroundColor: '#8b293a', textColor: '#FFFFFF', order: 2 },
  MX2A: { name: 'Mexibús L2A', color: '#aa3629', backgroundColor: '#662018', textColor: '#FFFFFF', order: 3 },
  MX3:  { name: 'Mexibús L3',  color: '#6da7cc', backgroundColor: '#42657b', textColor: '#FFFFFF', order: 4 },
  MX3A: { name: 'Mexibús L3A', color: '#4a798b', backgroundColor: '#2d4954', textColor: '#FFFFFF', order: 5 },
  MX4:  { name: 'Mexibús L4',  color: '#e9ad17', backgroundColor: '#8c680e', textColor: '#FFFFFF', order: 6 },
}

export const METADATA: Metadata = {
  title: 'Estado de México BRT Memory',
  description:
    '¿Cuántas estaciones del Mexibús puedes nombrar de memoria?',
  openGraph: {
    title: 'Estado de México BRT Memory',
    description:
      '¿Cuántas estaciones del Mexibús del Edomex puedes nombrar de memoria? Prueba este juego para averiguarlo.',
    type: 'website',
    locale: 'es_MX',
    url: 'https://github.com/atreyut/brt-memory/',
  },
}

export const MAP_CONFIG: MapboxOptions = {
  container: 'map',
  style: 'mapbox://styles/atreyut/cmos8tgh0003c01rye6nh8b6a',
  center: [-99.056841, 19.580035],
  zoom: 10.5,
  bounds: [
    [-99.527711, 19.267951],
    [-98.615406, 19.997528],
  ],
  maxBounds: [
    [-100.027711, 18.767951],
    [-98.115406, 20.497528],
  ],
  minZoom: 9,
  fadeDuration: 50,
}

export const STRIPE_LINK = ''

export const CITY_NAME = 'mx-mexibus'

export const LOCALE = 'es'

export const MAP_FROM_DATA = true

const config = {
  LOCALE,
  STRIPE_LINK,
  CITY_NAME,
  MAP_CONFIG,
  METADATA,
  LINES,
  BEG_THRESHOLD,
  MAP_FROM_DATA,
}

export default config