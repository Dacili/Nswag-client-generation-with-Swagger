import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  //private hubConnection: any;

  //public startConnection() {
  //  return new Promise((resolve, reject) => {
  //   // this.hubConnection = new signalR.HubConnectionBuilder()
  //    this.hubConnection = new HubConnectionBuilder()
  //     // .withUrl("https://localhost:7163/feed").build();
  //      .withUrl("https://localhost:7163/MediFeed").build();

  //    this.hubConnection.start()
  //      .then(() => {
  //        console.log("SignalR - connection established");
  //        return resolve(true);
  //      })
  //      .catch((err: any) => {
  //        console.log("SignalR - error occured" + err);
  //        reject(err);
  //      });
  //  });
  //}

  //constructor() { }

  //private $allFeed: Subject<any> = new Subject<any>();

  //public get AllFeedObservable(): Observable<any> {
  //  return this.$allFeed.asObservable();
  //}

  //public listenToAllFeeds() {
  //  (<HubConnection>this.hubConnection).on("GetFeed", (data: any) => {
  //    console.log('all feeds')
  //    console.log(data)
  //    this.$allFeed.next(data);
  //  });
  //}


  //$groupFeed: Subject<any> = new Subject<any>();

  //public get GroupFeedObservable(): Observable<any> {
  //  return this.$groupFeed.asObservable();
  //}

  //public listenToGroupFeed() {
  //  (<HubConnection>this.hubConnection).on("GetGroupFeed", (data: any) => {
  //    console.log(data);
  //    this.$groupFeed.next(data);
  //  });
  //}

  //public joinGroupFeed(groupName: string) {
  //  return new Promise((resolve, reject) => {
  //    (<HubConnection>this.hubConnection)
  //      .invoke("RegisterForFeed", groupName)
  //      .then(() => {
  //        console.log("added to feed " + groupName);
  //        return resolve(true);
  //      }, (err: any) => {
  //        console.log(err);
  //        return reject(err);
  //      });
  //  })
  //}

}


