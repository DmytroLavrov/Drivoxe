const config = {
	mode: 'production',
	entry: {
		index: './src/js/index.js',
		aboutUs: './src/js/aboutUs.js',
		cars: './src/js/cars.js',
		carPage: './src/js/carPage.js',
		faq: './src/js/faq.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = config;
