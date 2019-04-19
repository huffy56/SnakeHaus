import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'reptile-list', loadChildren: './reptile-list/reptile-list.module#ReptileListPageModule' },
  { path: 'reptile-details', loadChildren: './reptile-details/reptile-details.module#ReptileDetailsPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'add-reptile-modal', loadChildren: './add-reptile-modal/add-reptile-modal.module#AddReptileModalPageModule' },
  { path: 'update-reptile-modal', loadChildren: './update-reptile-modal/update-reptile-modal.module#UpdateReptileModalPageModule' },
  { path: 'authentication', loadChildren: './authentication/authentication.module#AuthenticationPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
