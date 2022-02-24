import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragulaDndComponent } from './components/dragula-dnd/dragula-dnd.component';
import { GridstackDndComponent } from './components/gridstack-dnd/gridstack-dnd.component';

const routes: Routes = [
  {
    path: 'dragula-dnd',
    component: DragulaDndComponent,
  },
  {
    path: 'gridstack-dnd',
    component: GridstackDndComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
