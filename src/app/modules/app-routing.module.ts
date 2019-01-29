import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//~~~~~~~~~~ This is where I import the components I will be using ~~~~~~~~~~//
import { HomePageComponent } from './my-website/components/home-page/home-page.component';
import { MyContentComponent } from './my-website/components/my-content/my-content.component'; 
import { AboutComponent } from './my-website/components/about/about.component';
import { SpecificationsComponent } from './my-website/components/specifications/specifications.component';
import { ContactComponent } from './my-website/components/contact/contact.component';
import { ProjectsComponent } from './my-website/components/projects/projects.component';
import { PageNotFoundComponent } from './my-website/components/page-not-found/page-not-found.component';
import { FrostOSComponent } from './my-website/components/frost-os/frost-os.component';


//~~~~~~~~~~ Define the routes you created ~~~~~~~~~~//
const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'specs', component: SpecificationsComponent },
  { path: 'content', component: MyContentComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'frostos', component: FrostOSComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only //will print it's data   to the console.log()
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
