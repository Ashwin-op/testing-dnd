import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragulaModule } from 'ng2-dragula';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragulaDndComponent } from './components/dragula-dnd/dragula-dnd.component';
import { GridstackDndComponent } from './components/gridstack-dnd/gridstack-dnd.component';

@NgModule({
  declarations: [AppComponent, DragulaDndComponent, GridstackDndComponent],
  imports: [BrowserModule, AppRoutingModule, DragulaModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
