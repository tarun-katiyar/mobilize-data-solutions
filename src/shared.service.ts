import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private _router:Router) { }

  getCurrentRoute(): string {
    return this._router.url;
  }
  goToRoute(location: string) {
    this._router.navigate([location]);
  }
}
