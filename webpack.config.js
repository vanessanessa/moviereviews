module.exports = {
    devtool: 'source-map',
    entry: './code.ts',     //importera allt från code.js och även de filer som den refererar till
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
          // all files with a `.ts` extension will be handled by `ts-loader`
          { test: /\.ts$/, loader: 'ts-loader' }
        ]
      },
    output: {
        filename: 'distribution/bundle.js'   //skicka och packetera allt till en bundle.js, som nu innehåller all javascript kod!
    }
}