export default {
  widgets: [
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
                  buildHookId: '621cd9733c8d5aa8d69fcb86',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cwtgawz3',
                  apiId: 'ce77f0cd-8dc6-449a-a1e5-3d8f14ca8d18'
                },
                {
                  buildHookId: '621cd97355eda7369c128020',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-4sb4s5ph',
                  apiId: 'd0804f3c-fbe0-4a21-82cb-81da3fc734ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/EsraaNasr92/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-4sb4s5ph.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
