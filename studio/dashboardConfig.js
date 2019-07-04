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
                  buildHookId: '5d1df9bebd3dbf0193354dd4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-v627qhis',
                  apiId: 'cdeccd68-33a1-49cc-9f7a-3decceb624ac'
                },
                {
                  buildHookId: '5d1df9be6455af017ef6ffb9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5bdtw2kc',
                  apiId: '1dad2310-8755-4476-840a-f2f9d3ffef53'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/developer-binus/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5bdtw2kc.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
