/**
 * AppModule
 */
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ContainersModule } from './containers/containers.module'
import { RouterModule } from '@angular/router';
import { ServicesModule } from './services/services.module'
import { HttpClientModule } from '@angular/common/http'
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import appRoutes from './app.routes'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    ContainersModule,
    ServicesModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
