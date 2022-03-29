export default {
  base: "home/",
  publicPath: "./",
  singular: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true
      },
    ],
  ],
  routes: [
    {
      path: '/',
      component: './index',
    }
  ],
};
