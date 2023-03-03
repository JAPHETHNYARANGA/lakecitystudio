import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'pricing', component:PricingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
