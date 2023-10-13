import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  title = '';
  originalTitle = '';

  constructor(r: ActivatedRoute, private router: Router, private titleService: Title) {
  }


  ngOnInit() {
    this.originalTitle = this.titleService.getTitle();
    if (this.title) {
      this.titleService.setTitle(this.title);
    }
  }

  ngOnDestroy() {
    this.titleService.setTitle(this.originalTitle);
  }

}
