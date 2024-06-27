import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscussionComponent } from './components/discussion/discussion.component';
import { DiscussionSidebarComponent } from './components/discussion-sidebar/discussion-sidebar.component';
import { ConferenceScreenComponent } from './components/conference-screen/conference-screen.component';
import { UserScreenComponent } from './components/user-screen/user-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscussionComponent,
    DiscussionSidebarComponent,
    ConferenceScreenComponent,
    UserScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
