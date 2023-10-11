import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  showReviews: boolean = false;
  constructor(private route: ActivatedRoute){
    const routeData: { showReviews?: boolean } = this.route.snapshot.data;
    if(routeData && routeData.showReviews){
      this.showReviews = true;
    }
  }
}
