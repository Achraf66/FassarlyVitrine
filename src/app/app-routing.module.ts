import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/home-one/home-one.component';

const routes: Routes = [
    {path: '', component: HomeOneComponent,pathMatch:'full'},
    // {path: 'home-two', component: HomeTwoComponent},
    // {path: 'home-three', component: HomeThreeComponent},
    // {path: 'home-four', component: HomeFourComponent},
    // {path: 'home-five', component: HomeFiveComponent},
    // {path: 'home-six', component: HomeSixComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }