/**
 * ServicesModule
 */
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ToyService } from './toys/toys.service'
import { BasketService } from './basket.service'

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        ToyService,
        BasketService
    ]
})
export class ServicesModule {}