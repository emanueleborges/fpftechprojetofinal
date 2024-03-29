import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCard, MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';

import { HomeComponent } from './views/home/home.component';

import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component'
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';


import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientUpdateComponent } from './components/client-update/client-update.component';
import { ClientDeleteComponent } from './components/client-delete/client-delete.component'
import { ClientReadComponent } from './components/client/client-read/client-read.component';
import { ClientRead2Component } from './components/client/client-read2/client-read2.component';


import { SaleCrudComponent } from './views/sale-crud/sale-crud.component';
import { SaleCreateComponent } from './components/sale/sale-create/sale-create.component';
import { SaleUpdateComponent } from './components/sale-update/sale-update.component';
import { SaleDeleteComponent } from './components/sale-delete/sale-delete.component'
import { SaleReadComponent } from './components/sale/sale-read/sale-read.component';
import { SaleRead2Component } from './components/sale/sale-read2/sale-read2.component';

registerLocaleData(localePt); 

@NgModule({
  declarations: [
    AppComponent,
   
    RedDirective,
    ForDirective,

    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,

    ProductCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
    ProductUpdateComponent,
    ProductDeleteComponent,

    ClientCrudComponent,
    ClientCreateComponent,
    ClientReadComponent,
    ClientRead2Component,
    ClientUpdateComponent,
    ClientDeleteComponent, 

    SaleCrudComponent,
    SaleCreateComponent,
    SaleReadComponent,
    SaleRead2Component,
    SaleUpdateComponent,
    SaleDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
