/**
 * ComponentsModule
 */
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ToyComponent } from './toy/toy.component'

const components = [ ToyComponent ]

@NgModule({
  imports: [ CommonModule ],
  declarations: [ ...components ],
  exports: [ ...components ]
})
export class ComponentsModule {}
