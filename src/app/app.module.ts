import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// font-awesome
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

//toastr
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { IconComponent } from "./components/icon/icon.component";

@NgModule({
  declarations: [AppComponent, IconComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
