const withSass = require('@zeit/next-sass');

// const isProd = process.env.NODE_ENV === 'production';

module.exports = withSass();


// module.exports = {
//     assetPrefix: isProd ? 'https://static.bjx.com.cn' : '',
//     withSass:withSass
// };
