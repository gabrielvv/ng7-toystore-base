/**
 * ContainersModule
 */
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ComponentsModule } from '../components/components.module'
import { FormsModule }   from '@angular/forms';

import { HeaderComponent } from './header/header.component'
import { ToysComponent } from './toys/toys.component'
import { BasketComponent } from './basket/basket.component'
import { AuthComponent } from './auth/auth.component';

const components = [
  HeaderComponent,
  ToysComponent,
  BasketComponent,
  AuthComponent
]

@NgModule({
  imports: [ CommonModule, ComponentsModule, RouterModule, FormsModule ],
  declarations: [ ...components ],
  exports: [ ...components ]
})
export class ContainersModule {}
