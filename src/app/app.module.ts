import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToDoItemsComponent } from './to-do-items/to-do-items.component';
import { PipesTestComponent } from './pipes-test/pipes-test.component';

import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { OrderInformationComponent } from './order-information/order-information.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoItemsComponent,
    PipesTestComponent,
    AboutComponent,
    GalleryComponent,
    PortfolioComponent,
    NotFoundComponent,
    ReviewsComponent,
    NavComponent,
    FooterComponent,
    ContactComponent,
    OrderComponent,
    OrderInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    PipesTestComponent]
})
export class AppModule { }
