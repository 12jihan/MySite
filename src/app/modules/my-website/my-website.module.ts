import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MyContentComponent } from './components/my-content/my-content.component';
import { FrostOSComponent } from './components/frost-os/frost-os.component';
import { SpecificationsComponent } from './components/specifications/specifications.component';
import { ContactComponent } from './components/contact/contact.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutComponent,
    ProjectsComponent,
    MyContentComponent,
    FrostOSComponent,
    SpecificationsComponent,
    ContactComponent,
    SocialMediaComponent,
    FooterComponent,
    HeaderComponent,
    
  ],
  imports: [
    CommonModule
  ]
})
export class MyWebsiteModule { }
