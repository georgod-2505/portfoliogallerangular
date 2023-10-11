import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { OrderInformationComponent } from './order-information/order-information.component';

const routes: Routes = [
    { path: '', component: PortfolioComponent},
    { path: 'about', component: AboutComponent, data:{showReviews:true}},
    { path: 'gallery', component: GalleryComponent},
    { path: 'gallery/:id', component: GalleryComponent},
    { path: 'reviews', component: ReviewsComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'order', component: OrderComponent},
    { path: '**', component: NotFoundComponent},
    { path: 'order-information', component: OrderInformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
