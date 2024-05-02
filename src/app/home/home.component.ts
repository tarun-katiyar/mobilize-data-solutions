import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isHomePage: boolean = false;
  constructor(private _sharedService: SharedService) {

  }

  ngOnInit() {
    let url = this._sharedService.getCurrentRoute();
    if (url.includes('/')) {
      this.isHomePage = true;
    }

  }
}
