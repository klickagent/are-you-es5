import path from 'path'
import IDependencyWithPathAndOutput from '../types/dependency-with-path-and-output'

export const directDependencies = [
  '@babel/core',
  'acorn',
  'commander',
  'css-loader',
  'is-even',
  'react',
  'uid',
  'whatwg-fetch'
]

export const directDependenciesWithoutBabelAndWebpack = [
  'acorn',
  'commander',
  'is-even',
  'react',
  'uid',
  'whatwg-fetch'
]

export const subpackageDependencies = ['acorn', 'underscore']

export const allDependencies = [
  '@babel/code-frame',
  '@babel/core',
  '@babel/generator',
  '@babel/helper-function-name',
  '@babel/helper-get-function-arity',
  '@babel/helper-split-export-declaration',
  '@babel/helpers',
  '@babel/highlight',
  '@babel/parser',
  '@babel/template',
  '@babel/traverse',
  '@babel/types',
  'acorn',
  'ajv',
  'ajv-keywords',
  'ansi-styles',
  'big.js',
  'camelcase',
  'chalk',
  'color-convert',
  'color-name',
  'commander',
  'convert-source-map',
  'css-loader',
  'cssesc',
  'debug',
  'emojis-list',
  'escape-string-regexp',
  'esutils',
  'fast-deep-equal',
  'fast-json-stable-stringify',
  'globals',
  'has-flag',
  'icss-utils',
  'indexes-of',
  'is-buffer',
  'is-even',
  'is-number',
  'is-odd',
  'js-tokens',
  'jsesc',
  'json-schema-traverse',
  'json5',
  'kind-of',
  'loader-utils',
  'lodash',
  'loose-envify',
  'minimist',
  'ms',
  'normalize-path',
  'object-assign',
  'path-parse',
  'postcss',
  'postcss-modules-extract-imports',
  'postcss-modules-local-by-default',
  'postcss-modules-scope',
  'postcss-modules-values',
  'postcss-selector-parser',
  'postcss-value-parser',
  'prop-types',
  'punycode',
  'react',
  'react-is',
  'resolve',
  'safe-buffer',
  'scheduler',
  'schema-utils',
  'semver',
  'source-map',
  'supports-color',
  'to-fast-properties',
  'trim-right',
  'uid',
  'uniq',
  'uri-js',
  'whatwg-fetch'
]

export const allDependenciesWithoutBabelAndWebpack = [
  'acorn',
  'ajv',
  'ajv-keywords',
  'ansi-styles',
  'big.js',
  'camelcase',
  'chalk',
  'color-convert',
  'color-name',
  'commander',
  'convert-source-map',
  'cssesc',
  'debug',
  'emojis-list',
  'escape-string-regexp',
  'esutils',
  'fast-deep-equal',
  'fast-json-stable-stringify',
  'globals',
  'has-flag',
  'icss-utils',
  'indexes-of',
  'is-buffer',
  'is-even',
  'is-number',
  'is-odd',
  'js-tokens',
  'jsesc',
  'json-schema-traverse',
  'json5',
  'kind-of',
  'loader-utils',
  'lodash',
  'loose-envify',
  'minimist',
  'ms',
  'normalize-path',
  'object-assign',
  'path-parse',
  'postcss',
  'postcss-modules-extract-imports',
  'postcss-modules-local-by-default',
  'postcss-modules-scope',
  'postcss-modules-values',
  'postcss-selector-parser',
  'postcss-value-parser',
  'prop-types',
  'punycode',
  'react',
  'react-is',
  'resolve',
  'safe-buffer',
  'scheduler',
  'schema-utils',
  'semver',
  'source-map',
  'supports-color',
  'to-fast-properties',
  'trim-right',
  'uid',
  'uniq',
  'uri-js',
  'whatwg-fetch'
]

export const allDependenciesWithEntryPaths: IDependencyWithPathAndOutput[] = [
  {
    expectedOutput: '✅ acorn is ES5',
    name: 'acorn',
    path: path.join(
      __dirname,
      '../fixtures/root/node_modules/acorn/dist/acorn.js'
    )
  },
  {
    expectedOutput: '✅ commander is ES5',
    name: 'commander',
    path: path.join(
      __dirname,
      '../fixtures/root/node_modules/commander/index.js'
    )
  },
  {
    expectedOutput: '✅ is-buffer is ES5',
    name: 'is-buffer',
    path: path.join(
      __dirname,
      '../fixtures/root/node_modules/is-buffer/index.js'
    )
  },
  {
    expectedOutput: '✅ is-even is ES5',
    name: 'is-even',
    path: path.join(__dirname, '../fixtures/root/node_modules/is-even/index.js')
  },
  {
    expectedOutput: '✅ is-number is ES5',
    name: 'is-number',
    path: path.join(
      __dirname,
      '../fixtures/root/node_modules/is-number/index.js'
    )
  },
  {
    expectedOutput: '✅ is-odd is ES5',
    name: 'is-odd',
    path: path.join(__dirname, '../fixtures/root/node_modules/is-odd/index.js')
  },
  {
    expectedOutput: '✅ js-tokens is ES5',
    name: 'js-tokens',
    path: path.join(
      __dirname,
      '../fixtures/root/node_modules/js-tokens/index.js'
    )
  },
  {
    expectedOutput: '✅ kind-of is ES5',
    name: 'kind-of',
    path: path.join(__dirname, '../fixtures/root/node_modules/kind-of/index.js')
  },
  {
    expectedOutput: '✅ loose-envify is ES5',
    name: 'loose-envify',
    path: path.join(
      __dirname,
      '../fixtures/root/node_modules/loose-envify/index.js'
    )
  },
  {
    expectedOutput: '✅ object-assign is ES5',
    name: 'object-assign',
    path: path.join(
      __dirname,
      '../fixtures/root/node_modules/object-assign/index.js'
    )
  },
  {
    expectedOutput: '✅ prop-types is ES5',
    name: 'prop-types',
    path: path.join(
      __dirname,
      '../fixtures/root/node_modules/prop-types/index.js'
    )
  },
  {
    expectedOutput: '✅ react is ES5',
    name: 'react',
    path: path.join(__dirname, '../fixtures/root/node_modules/react/index.js')
  },
  {
    expectedOutput: '✅ react-is is ES5',
    name: 'react-is',
    path: path.join(
      __dirname,
      '../fixtures/root/node_modules/react-is/index.js'
    )
  },
  {
    expectedOutput: '✅ scheduler is ES5',
    name: 'scheduler',
    path: path.join(
      __dirname,
      '../fixtures/root/node_modules/scheduler/index.js'
    )
  },
  {
    expectedOutput: '✅ uid is ES5',
    name: 'uid',
    path: path.join(__dirname, '../fixtures/root/node_modules/uid/index.js')
  },
  {
    expectedOutput: '✅ whatwg-fetch is ES5',
    name: 'whatwg-fetch',
    path: path.join(
      __dirname,
      '../fixtures/root/node_modules/whatwg-fetch/dist/fetch.umd.js'
    )
  }
]
