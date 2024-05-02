import { Component, Input } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-minisidebar',
  templateUrl: './minisidebar.component.html',
  styleUrl: './minisidebar.component.css'
})
export class MinisidebarComponent {

  @Input() activeTab: any;
  activeTabMini: string = '';
  constructor(private _sharedService: SharedService) {

  }

  ngOnInit() {
  }

  goToRoute(location: string) {
    this._sharedService.goToRoute(location);
    this.activeTabMini=location;
  }


}
