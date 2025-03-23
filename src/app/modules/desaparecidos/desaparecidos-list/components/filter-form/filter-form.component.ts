import { Component, inject, input, OnInit, output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { IApiFilters } from '../../desaparecidos.types';

@Component({
  selector: 'filter-form',
  templateUrl: './filter-form.component.html',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule
  ]
})
export class FilterFormComponent implements OnInit {
  // Dependency Injection
  private _fb = inject(FormBuilder);

  initValues = input<IApiFilters>();
  onChangeFilters = output<IApiFilters>();
  filterForm!: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.filterForm = this._fb.group({
      nome: [this.initValues()?.nome || ''],
      faixaIdadeInicial: [this.initValues()?.faixaIdadeInicial || 0],
      faixaIdadeFinal: [this.initValues()?.faixaIdadeFinal || 0],
      sexo: [this.initValues()?.sexo || ''],
      status: [this.initValues()?.status || 'DESAPARECIDO']
    });
  }

  handleCleanFilters() {
    this.onChangeFilters.emit({
      nome: '',
      faixaIdadeInicial: 0,
      faixaIdadeFinal: 0,
      sexo: '',
      status: 'DESAPARECIDO'
    });
  }

  handleFilter() {
    this.onChangeFilters.emit(this.filterForm.value);
  }
}
