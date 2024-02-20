import { Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';

const routeConfig: Routes = [
    {
      path: '/search',
      component: SearchPageComponent,
      title: 'Search Laws'
    },
    {
      path: '/contact-us',
      component: ContactUsPageComponent,
      title: 'Contact Us'
    }
  ];
  
  export default routeConfig;