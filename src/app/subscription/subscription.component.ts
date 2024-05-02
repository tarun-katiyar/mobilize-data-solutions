import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent implements OnInit {

  isSubscription: boolean = false;
  constructor(private _sharedService: SharedService) {

  }

  ngOnInit() {
    let url = this._sharedService.getCurrentRoute();
    if (url.includes('subscription')) {
      this.isSubscription = true;
    }

  }
}
