import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JournalService } from './journal.service';
import { JournalEntryComponent } from './journal-entry/journal-entry.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, JournalEntryComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [JournalService]
})
export class AppModule {}
