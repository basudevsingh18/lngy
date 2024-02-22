import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroHeaderComponent } from './hero-header/hero-header.component';
import { BenefitsCardsComponent } from './benefits-cards/benefits-cards.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroHeaderComponent,
    BenefitsCardsComponent,
    SearchPageComponent,
    ContactUsPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
