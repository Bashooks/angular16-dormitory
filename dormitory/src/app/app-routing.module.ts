import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home1Component } from './home1/home1.component';
import { SearchComponent } from './search/search.component';
import { DormitoryComponent } from './dormitory/dormitory.component';

const routes: Routes = [{ path: '', component: Home1Component },
                        { path: 'search', component: SearchComponent },
                        { path: 'dormitory', component: DormitoryComponent }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
