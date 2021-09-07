import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { BackgroundColorComponent } from './components/background-color/background-color.component';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { CvComponent } from './cv/cv/cv.component';
import { ItemComponent } from './cv/item/item.component';
import { ListComponent } from './cv/list/list.component';
import { CardComponent } from './cv/card/card.component';
import { WordComponent } from './directives/word/word.component';
import { RainbowDirective } from './directives/rainbow/rainbow.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    BackgroundColorComponent,
    RotatingCardComponent,
    CvComponent,
    ItemComponent,
    ListComponent,
    CardComponent,
    WordComponent,
    RainbowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
