// import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemaTypes'

// export default defineConfig({
//   name: 'default',
//   title: 'portfolio',

//   projectId: 'vn0fsu8d',
//   dataset: 'production',

//   plugins: [structureTool(), visionTool()],

//   schema: {
//     types: schemaTypes,
//   },
// })


// sanity.config.js
import { defineConfig } from "sanity";
import schema from './schemaTypes/schema'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
export default defineConfig({
  title: "Portfolio",
  projectId: "vn0fsu8d",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schema,
  },
});