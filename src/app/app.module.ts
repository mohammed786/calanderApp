import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalanderComponent } from './calander/calander.component';
import { ConstantService } from './common/constant.service';
import { DateUtilService } from './common/dateUtil.service';

@NgModule({
  declarations: [
    AppComponent,
    CalanderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ConstantService,
    DateUtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
