import { Component } from '@angular/core';
import { Field } from './components/dynamic-form/dynamic-fields/models/field.model';
import { BehaviorSubject, map } from 'rxjs';
import { JsonReaderService } from './services/json-reader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dynamic-form';

  fieldset: Field[] = [];

  private fieldsetSubject = new BehaviorSubject<Field[]>([]);
  fieldset$ = this.fieldsetSubject.asObservable();

  constructor(private jsonReaderService: JsonReaderService) {}

  ngOnInit(): void {
    this.jsonReaderService
      .read('/assets/form.json')
      .pipe(
        map((response) => {
          return response.fields.map((fieldResponse: any) => {
            return {
              controlName: fieldResponse.label,
              label: fieldResponse.label,
              type: fieldResponse.type,
              options: fieldResponse.options,
              disabled: false,
            };
          });
        })
      )
      .subscribe((response) => {
        this.fieldsetSubject.next(response);
      });
  }
}
