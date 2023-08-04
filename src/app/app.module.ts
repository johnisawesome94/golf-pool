import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TierListComponent } from './tier-list/tier-list.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TierListComponent,
    ToolbarComponent,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
