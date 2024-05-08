import path from 'path';
import { fileURLToPath} from 'url';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction =  'production';

const config = {
  entry: './src/employees.jsx',
  output: {
    filename: 'employees.bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    // Automatically load React and ReactDOM when they are referenced
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

export default function() {
  if (isProduction) {
    config.mode = 'production'
  } else {
    config.mode = 'development'
  }
  return config
}
