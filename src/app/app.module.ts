import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { IonicModule } from '@ionic/angular';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TilesBoardModule } from './tiles-board/tiles-board.module';

@NgModule({
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
        FormsModule,
        HttpClientModule,
        IonicModule.forRoot(),
        CoreModule,
        SharedModule,
        TilesBoardModule,
        AppRoutingModule // must be imported as the last module as it contains the fallback route
    ],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
