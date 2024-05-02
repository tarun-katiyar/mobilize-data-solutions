import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  isMinibar: boolean = false;
  constructor(private _sharedService: SharedService, private router: Router) {

  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('information') || event.url.includes('support')) {
          this.isMinibar = false;
        }
        else
          this.isMinibar = true;
      }
    });
  }

}
