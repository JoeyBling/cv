module.exports = {
  presets: [
    ['@babel/env', {
	  // "amd" | "umd" | "systemjs" | "commonjs" | "cjs" | false, defaults to "commonjs"
      modules: false
    }]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3
      }
    ]
  ]
};