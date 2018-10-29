/**
 * ContainersModule
 */
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ComponentsModule } from '../components/components.module'

import { HeaderComponent } from './header/header.component'
import { ToysComponent } from './toys/toys.component'

const components = [
  HeaderComponent,
  ToysComponent
]

@NgModule({
  imports: [ CommonModule, ComponentsModule ],
  declarations: [ ...components ],
  exports: [ ...components ]
})
export class ContainersModule {}
