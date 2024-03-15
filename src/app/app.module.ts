import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JournalEntryComponent } from './journal-entry/journal-entry.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { JournalListComponent } from './journal-list/journal-list.component';
import { NoEntriesComponent } from './no-entries/no-entries.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, JournalEntryComponent, JournalListComponent, NoEntriesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CoreModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
