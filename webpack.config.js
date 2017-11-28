module.exports = {
    devtool: 'source-map',
    entry: './code.js',     //importera allt från code.js och även de filer som den refererar till
    output: {
        filename: 'distribution/bundle.js'   //skicka och packetera allt till en bundle.js, som nu innehåller all javascript kod!
    }
}