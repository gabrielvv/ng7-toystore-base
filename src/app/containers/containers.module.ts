/**
 * ContainersModule
 */
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ComponentsModule } from '../components/components.module'

import { HeaderComponent } from './header/header.component'
import { ToysComponent } from './toys/toys.component'
import { BasketComponent } from './basket/basket.component'

const components = [
  HeaderComponent,
  ToysComponent,
  BasketComponent,
]

@NgModule({
  imports: [ CommonModule, ComponentsModule, RouterModule ],
  declarations: [ ...components ],
  exports: [ ...components ]
})
export class ContainersModule {}
