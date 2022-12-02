import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SignalRService } from '../../services/signal-r.service';

@Component({
  selector: 'app-group-feed',
  templateUrl: './group-feed.component.html',
  styleUrls: ['./group-feed.component.css']
})
export class GroupFeedComponent implements OnInit, OnDestroy {

  //$groupFeed: Observable<any>;
  groupFeed: any[] = [];
  $groupFeedSubject: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private signalrService: SignalRService) {
    //this.$groupFeed = this.signalrService.GroupFeedObservable;
  }

  ngOnInit(): void {
    //this.route.paramMap.subscribe((map) => {
    //  let groupName: any = map.get('id');
    //  groupName = "Science";
    //  if (groupName) {
    //    this.signalrService.startConnection().then(() => {
    //      this.signalrService.joinGroupFeed(groupName).then(() => {
    //        this.signalrService.listenToGroupFeed();
    //        //this.$groupFeedSubject = this.$groupFeed.subscribe((d: any) => {
    //        this.$groupFeedSubject = this.$groupFeed.subscribe((d: any) => {
    //          console.log('group added ')
    //          console.log(d);
    //          this.groupFeed.push(d);
              
    //        });
            
    //      }, (err) => {
    //        console.log(err);
    //      })
    //    })
    //  }
    //});
  }

  ngOnDestroy(): void {
    //this.$groupFeedSubject?.unsubscribe();
  }
}
