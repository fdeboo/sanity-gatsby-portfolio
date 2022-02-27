export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '621b823eaa679a8d2474169b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bj1vrmxu',
                  apiId: '603f97c2-eab9-4560-8677-834197b72c98'
                },
                {
                  buildHookId: '621b823ed3eec8974bc8484c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-c6ya8q9x',
                  apiId: 'ab6ef4d5-3556-4080-b604-1a502191d8e8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fdeboo/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-c6ya8q9x.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
