// uno.config.ts
import {
  defineConfig,
  presetWind,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [presetWind(), presetRemToPx(), presetAttributify()],
  transformers: [transformerVariantGroup(), transformerDirectives()]
})
