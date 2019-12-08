import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { HttpService } from './http/http.service';
import { NsServiceToken } from '../../services/interfaces/INsService';
import { NsService } from '../../services/ns.service';

@NgModule({
    imports: [CommonModule, HttpClientModule, TranslateModule, RouterModule],
    providers: [
        {
            provide: HttpClient,
            useClass: HttpService
        },
        {
            provide: NsServiceToken,
            useClass: NsService
        }
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        // Import guard
        if (parentModule) {
            throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
        }
    }
}
