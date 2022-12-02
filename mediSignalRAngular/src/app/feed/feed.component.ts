import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SignalRService } from '../../services/signal-r.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnDestroy {

  feed: any[] = [];
  allFeedSubscription: any;

  constructor(private signalrService: SignalRService) { }

  ngOnInit(): void {
    //// 1 - start a connection
    //this.signalrService.startConnection().then(() => {
    //  console.log("signalR connected");

    //  // 2 - register for ALL relay
    //  this.signalrService.listenToAllFeeds();

    //  // 3 - subscribe to messages received
    //  this.allFeedSubscription = this.signalrService.AllFeedObservable
    //    .subscribe((res: any) => {
    //      this.feed.push(res);
    //    });
    //});
  }

  ngOnDestroy(): void {
    //(<Subscription>this.allFeedSubscription).unsubscribe();
  }
}
