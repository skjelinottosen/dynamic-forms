import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFieldsComponent } from './components/dynamic-form/dynamic-fields/dynamic-fields.component';
import { DynamicFieldTextComponent } from './components/dynamic-form/dynamic-fields/templates/dynamic-field-text/dynamic-field-text.component';
import { DynamicFieldCheckboxComponent } from './components/dynamic-form/dynamic-fields/templates/dynamic-field-checkbox/dynamic-field-checkbox.component';
import { DynamicFieldSelectComponent } from './components/dynamic-form/dynamic-fields/templates/dynamic-field-select/dynamic-field-select.component';
import { DynamicFieldRadioComponent } from './components/dynamic-form/dynamic-fields/templates/dynamic-field-radio/dynamic-field-radio.component';
import { DynamicFieldDatepickerComponent } from './components/dynamic-form/dynamic-fields/templates/dynamic-field-datepicker/dynamic-field-datepicker.component';
import { DynamicFieldNumberComponent } from './components/dynamic-form/dynamic-fields/templates/dynamic-field-number/dynamic-field-number.component';
import { MaterialModule } from './shared/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DynamicFormComponent,
    DynamicFieldsComponent,
    DynamicFieldTextComponent,
    DynamicFieldCheckboxComponent,
    DynamicFieldSelectComponent,
    DynamicFieldRadioComponent,
    DynamicFieldDatepickerComponent,
    DynamicFieldNumberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
