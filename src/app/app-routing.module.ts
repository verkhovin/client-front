import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TilesBoardComponent } from './tiles-board/tiles-board.component';

const routes: Routes = [
    { path: '', component: TilesBoardComponent },
    // Fallback when no prior route is matched
    { path: '**', redirectTo: 'tabs/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}
