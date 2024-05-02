import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-minisidebar',
  templateUrl: './minisidebar.component.html',
  styleUrl: './minisidebar.component.css'
})
export class MinisidebarComponent {
 
  @Input() activeTab: any;
  constructor(){

  }

  ngOnInit(){
  }


}
