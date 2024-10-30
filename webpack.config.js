const path = require('path');

module.exports = {
     mode: 'development',
  entry: './src/index.js', // Altere para o caminho correto do seu arquivo de entrada
  output: {
    filename: 'bundle.js', // Nome do arquivo de saída
    path: path.resolve(__dirname, 'dist'), // Caminho do diretório de saída
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Para arquivos .js
        exclude: /node_modules/, // Exclui a pasta node_modules
        use: {
          loader: 'babel-loader', // Usando Babel para transpilar JS
        },
      },
    ],
  },
};
