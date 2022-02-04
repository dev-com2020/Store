import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import localePL from '@angular/common/locales/pl'; 
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cartDetail.component';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { CheckoutComponent } from './store/checkout.component';
import { StoreFirstGuard } from './storeFirst.guard';
import { environment } from '../environments/environment';

registerLocaleData(localePL);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, StoreModule, RouterModule.forRoot([
    {path: "store", component: StoreComponent,canActivate:[StoreFirstGuard]},
    {path: "cart", component: CartDetailComponent,canActivate:[StoreFirstGuard]},
    {path: "checkout", component: CheckoutComponent,canActivate:[StoreFirstGuard]},
    {path: "**", redirectTo: "/store"}
  ])],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
// ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
//      providers: [StoreFirstGuard],
//     declarations: [AppComponent],
//     bootstrap: [AppComponent],
// })


export class AppModule { }
