module.exports = {
  title: 'ACGN',
  theme: require.resolve('../../theme/'),
  themeConfig: {
    nav: [
      {
        link: '/',
        text: '主页'
      },
      {
        link: '/archive',
        text: '档案'
      },
      {
        link: '/tag',
        text: '标签'
      },
      {
        link: '/about',
        text: '关于'
      }
    ],
    footer: {
      copyright: 'MIT Licensed | Copyright © 2019 KannadukiAme'
    }
  }
}
