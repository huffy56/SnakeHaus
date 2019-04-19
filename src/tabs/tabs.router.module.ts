import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'reptiles',
        children: [
          {
            path: '',
            loadChildren: '../reptile-list/reptile-list.module#ReptileListPageModule'
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: '../authentication/authentication.module#AuthenticationPageModule'
          }
        ]
      },
      {
        path: 'settings2',
        children: [
          {
            path: '',
            loadChildren: '../settings/settings.module#SettingsPageModule'
          }
        ]
      },
      {
        path: 'details/:id',
        children: [{
          path: '',
          loadChildren: '../reptile-details/reptile-details.module#ReptileDetailsPageModule'
        }]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/reptiles',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
