export default {
    test: {
      include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
      environment: 'jsdom',
      globals: true,
      setupFiles: './setupTests.js', // This points to the file for setting up tests
    },
  };
