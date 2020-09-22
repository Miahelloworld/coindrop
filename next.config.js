module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/coming-soon', // Matched parameters can be used in the destination
          permanent: false,
        },
      ];
    },
};
