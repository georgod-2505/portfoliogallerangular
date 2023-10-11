import { Component, OnInit } from '@angular/core';
import { Images } from './gallery-data/mock-gallery';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent {
  arts = Images;
  id: number | undefined;
  selectedImage: any;
  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
    .subscribe(data => this.id = +data)
  }
  
  selectImage(image: any) {
    if (this.selectedImage === image) {
      this.selectedImage = null;
    } else {
      this.selectedImage = image;
    }
  }
}
