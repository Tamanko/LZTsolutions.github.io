/* globals Docute */

new Docute({
   target: '#docute',
   sourcePath: './docs/',
   nav:[
      {
         title: 'Home',
         link: '/'
      },
      {
         title: 'About',
         link: '/about'
      }
   ],
   sidebar:[
      {
         title: 'Guide',
         'links':[
            {
               title: 'Introduction',
               link: '/introduction'
            },
            {
               title: 'Installation',
               link: '/installation'
            },
            {
               title: 'TestMe',
               link: '/testme'
            }
         ]
      },
      {
         title: 'Resources',
         'links':[
            {
               title: 'applications-asciinema',
               link: '/applications-asciinema'
            },
            {
               title: 'applications-bookstack',
               link: '/applications-bookstack'
            },
            {
               title: 'applications-kutt',
               link: '/applications-kutt'
            },
            {
               title: 'applications-listmonk',
               link: '/applications-listmonk'
            },
            {
               title: 'aws-cloudformation-templates-aws-cognito',
               link: '/aws-cloudformation-templates-aws-cognito'
            },
            {
               title: 'docute-sample',
               link: '/docute-sample'
            },
            {
               title: 'networking-applications',
               link: '/networking-applications'
            },
            {
               title: 'networking-aws-enable-firewall',
               link: '/networking-aws-enable-firewall'
            },
            {
               title: 'postinstall',
               link: '/postinstall'
            },
            {
               title: 'server-setups-master-repo',
               link: '/server-setups-master-repo'
            },
            {
               title: 'servers-centos-first-install',
               link: '/servers-centos-first-install'
            },
            {
               title: 'servers-dependencies',
               link: '/servers-dependencies'
            },
            {
               title: 'servers-host-provisioning',
               link: '/servers-host-provisioning'
            },
            {
               title: 'servers-networking-digitalocean-firewall',
               link: '/servers-networking-digitalocean-firewall'
            },
            {
               title: 'servers-security',
               link: '/servers-security'
            },
            {
               title: 'servers-ubuntu-first-install',
               link: '/servers-ubuntu-first-install'
            }
         ]
      }
   ]
})
