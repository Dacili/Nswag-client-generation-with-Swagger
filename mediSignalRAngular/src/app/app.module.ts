import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SignalRService } from '../services/signal-r.service';

import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { GroupFeedComponent } from './group-feed/group-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    
    FeedComponent,
    GroupFeedComponent
    
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule
  ],
  providers: [SignalRService],
  bootstrap: [AppComponent]
})
export class AppModule { }
