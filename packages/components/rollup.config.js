import pkJson from './package.json'
import swc from 'rollup-plugin-swc'
import swcConfig from '../../.swcrc.json'
import typescript from '@rollup/plugin-typescript'
export default {
  input: './index.ts',
  output: {
    format: 'esm',
    file: pkJson.module
  },
  plugins: [swc({ ...swcConfig }), typescript()]
}
