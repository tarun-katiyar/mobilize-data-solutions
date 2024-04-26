import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  activeTab: string = '';
  constructor(private _router: Router) { }

  ngOninit() {

  }

  goToRoute(location: string) {
    this._router.navigate([location]);
    this.activeTab = location;

  }

}
