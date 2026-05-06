# BRT Memory

Did you ever wish your favourite metro or **BRT (Bus Rapid Transit)** map was now blank and you had to type all the stations from memory? Wish no more! This is what BRT Memory is for!

This project is a fork of the original [benjamintd/metro-memory.com](https://github.com/benjamintd/metro-memory.com), adapted to support and celebrate BRT systems around the world.

## Stack 

BRT Memory is a web application built using **Next.js**, **TypeScript**, and **TailwindCSS**.

## Project Structure

- **src/**: Contains all the source files.
  - **app/**: Next.js application logic.
  - **components/**: Reusable React components.
  - **hooks/**: Custom React hooks.
  - **images/**: Map image assets.
  - **lib/**: Utility functions and helper libraries.
  - **scripts/**: Build and deployment scripts.
  - **styles/**: Tailwind and custom CSS styles.
  - **types/**: TypeScript type declarations.


Inside `src/app/(game)` you will find the city-specific logic and data. 


## Installation

1. **Clone the repository:**
   ```sh
   git clone <repository_url>
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```

## Development

```sh
npm run dev
```

## Adding a new city (or BRT system)

You can duplicate an existing city to see how the the data is structured. 
`mexico-city` is a good starting point to duplicate.


### Data 

A city needs the following: 
- `data/features.json` -> a GeoJSON FeatureCollection of Points, e.g. 
```json
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-99.155905, 19.432394]
  },
  "properties": {
    "id": 1,
    "name": "París",
    "alternate_names": ["Paseo de la Reforma"],
    "line": "MB7",
    "order": 0
  },
  "id": 1
}
```
They reference the line ids. Alternate names are optional but helpful for fuzzy type matching. 

- `data/lines.json` -> a map of lineId to line data. 
- `data/routes.json` -> a GeoJSON FeatureCollection of LineStrings or MultiLineStrings, referencing the lineIds. 

The files are typically generated from a source file, with a `preprocess.ts` or Python script. 
This script is sometimes also responsible for giving ids to stations. 

*Warning: station ids must be stable so that existing players don't lose their locally-saved state. If you want to update some city's data, please ensure the existing ones are kept.*

### Configuration

Edit `config.ts` - The constant names should be self-explanatory. 

### Adding to the game

Add your city to `lib/citiesConfig.ts` and the relevant images.

## Production Build

To build the project for production:

```sh
npm run build
```

Then, to start the production server:

```sh
npm run start
```

## License

This project is licensed as per the terms described in [LICENSE.md](LICENSE.md).

## Contributing

Please make all contributions through a Pull Request. You might need a Mapbox token to get started developing. Some of the styles used are marked as public, so you should be able to use those for development.