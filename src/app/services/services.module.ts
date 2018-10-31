/**
 * ServicesModule
 */
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ToyService } from './toys/toys.service'
import { BasketService } from './basket.service'
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { ToyDataResolver } from './toys/toys.resolver';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        AuthGuard,
        AuthService,
        ToyService,
        ToyDataResolver,
        BasketService
    ]
})
export class ServicesModule {}