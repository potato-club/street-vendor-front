//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
    // Todo mock 서버 도메인은 나중에 지워야함! (search.pstatic.net)
    domains: [
      'search.pstatic.net',
      'street-vendor-s3.s3.ap-northeast-2.amazonaws.com',
    ],
  },
};

module.exports = withNx(nextConfig);
