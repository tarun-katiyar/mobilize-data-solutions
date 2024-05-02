import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-catalouge',
  templateUrl: './catalouge.component.html',
  styleUrl: './catalouge.component.css'
})
export class CatalougeComponent implements OnInit {

  isCatalougePage: boolean = false;
  constructor(private _sharedService: SharedService) {

  }

  ngOnInit() {
    let url = this._sharedService.getCurrentRoute();
    if (url.includes('catalouge')) {
      this.isCatalougePage = true;
    }

  }

}
