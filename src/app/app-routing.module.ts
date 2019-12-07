import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TilesBoardComponent } from './tiles-board/tiles-board.component';
import { FeedComponent } from '@app/feed/feed.component';

const routes: Routes = [
    { path: '', component: TilesBoardComponent },
    { path: 'feed', component: FeedComponent},
    // Fallback when no prior route is matched
    { path: '**', redirectTo: 'tabs/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}
