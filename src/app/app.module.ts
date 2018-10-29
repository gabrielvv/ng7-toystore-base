/**
 * AppModule
 */
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ContainersModule } from './containers/containers.module'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    ContainersModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
