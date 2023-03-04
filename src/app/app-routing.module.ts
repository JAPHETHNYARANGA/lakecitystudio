import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PricingComponent } from './pricing/pricing.component';
import { RecordingStudiosComponent } from './recording-studios/recording-studios.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'pricing', component:PricingComponent},
  {path:'recording', component:RecordingStudiosComponent},
  {path:'about-us', component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
