import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { JournalModule } from './journal/journal.module';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ErrorComponent, AboutComponent, AuthenticateComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    JournalModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
