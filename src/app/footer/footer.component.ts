import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  isMinibar: boolean = false;
  constructor(private _sharedService: SharedService) {

  }

  ngOnInit() {
    let url = this._sharedService.getCurrentRoute();
    if (url.includes('/')) {
      this.isMinibar = true;
    }

  }

}
