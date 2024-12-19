import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { PainelComponent } from './painel/painel.component';
import { ProgressComponent } from './progress/progress.component';
import { AttemptsComponent } from './attempts/attempts.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    PainelComponent,
    ProgressComponent,
    AttemptsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
