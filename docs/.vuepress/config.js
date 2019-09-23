module.exports = {
  theme: '@vuepress/blog',
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Post',
        link: '/post/'
      },
      {
        text: 'Archive',
        link: '/archive/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
  },
  footer: {
    contact: [
      {
        type: 'github',
        link: 'https://github.com/vuejs/vuepress',
      },
      {
        type: 'twitter',
        link: 'https://github.com/vuejs/vuepress',
      },
    ],
    copyright: [
      {
        text: 'Privacy Policy',
        link: 'https://policies.google.com/privacy?hl=en-US',
      },
      {
        text: 'MIT Licensed | Copyright © 2018-present Vue.js',
        link: '',
      },
    ],
  },
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            // Unique ID of current classification
            id: 'post',
            // Target directory
            dirname: '_posts',
            // Path of the `entry page` (or `list page`)
            path: '/post/',
            itemPermalink: '/post/:year/:month/:day/:slug',
          },
        ],
        frontmatters: [
          {
            // Unique ID of current classification
            id: 'tag',
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ['tag'],
            // Path of the `entry page` (or `list page`)
            path: '/tag/',
            // Layout of the `entry page`
            layout: 'Tag',
          },
        ],
      },
    ],
  ],
}
