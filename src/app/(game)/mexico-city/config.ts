import { Metadata } from 'next'
import { MapboxOptions } from 'mapbox-gl'
import { Line } from '@/lib/types'

export const BEG_THRESHOLD = 1.5

export const LINES: { [name: string]: Line } = {
  MB1: { name: 'Línea 1', color: '#A4343A', backgroundColor: '#5C1D21', textColor: '#FFFFFF', order: 0 },
  MB2: { name: 'Línea 2', color: '#87189D', backgroundColor: '#4D0E5A', textColor: '#FFFFFF', order: 1 },
  MB3: { name: 'Línea 3', color: '#7A9A01', backgroundColor: '#455701', textColor: '#FFFFFF', order: 2 },
  MB4: { name: 'Línea 4', color: '#FE5000', backgroundColor: '#902D00', textColor: '#FFFFFF', order: 3 },
  MB5: { name: 'Línea 5', color: '#001E60', backgroundColor: '#001136', textColor: '#FFFFFF', order: 4 },
  MB6: { name: 'Línea 6', color: '#E10098', backgroundColor: '#800057', textColor: '#FFFFFF', order: 5 },
  MB7: { name: 'Línea 7', color: '#046A38', backgroundColor: '#023C20', textColor: '#FFFFFF', order: 6 },
}

export const METADATA: Metadata = {
  title: 'Mexico City BRT Memory',
  description:
    '¿Cuántas estaciones del Metrobús de la CDMX puedes nombrar de memoria?',
  openGraph: {
    title: 'Mexico City BRT Memory',
    description:
      '¿Cuántas estaciones del Metrobús de la CDMX puedes nombrar de memoria? Prueba este juego para averiguarlo.',
    type: 'website',
    locale: 'es_MX',
    url: 'https://github.com/atreyut/brt-memory/',
  },
}

export const MAP_CONFIG: MapboxOptions = {
  container: 'map',
  style: 'mapbox://styles/atreyut/cmos8tgh0003c01rye6nh8b6a',
  bounds: [
    [-99.3267822265625, 19.0797428654523],
    [-98.9117431640625, 19.6146091915543],
  ],
  maxBounds: [
    [-100.3267822265625, 18.0797428654523],
    [-97.9117431640625, 20.6146091915543],
  ],
  minZoom: 6,
  fadeDuration: 50,
}

export const STRIPE_LINK = ''

export const CITY_NAME = 'mexico-city'

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