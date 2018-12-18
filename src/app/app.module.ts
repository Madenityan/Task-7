import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { CircleChartComponent } from './components/circle-chart/circle-chart.component';
import { TablePageComponent } from './table-page/table-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListPageComponent } from './list-page/list-page.component';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogComponent } from './components/mat-dialog/mat-dialog.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DashboardPageComponent,
    PieChartComponent,
    LineChartComponent,
    CircleChartComponent,
    TablePageComponent,
    ListPageComponent,
    MatDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    NgxPaginationModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MatDialogComponent]
})
export class AppModule { }
