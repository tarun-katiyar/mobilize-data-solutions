import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  activeTab: string = 'private'

  getToggle(name: string) {
    this.activeTab = name;
    
  }

}
