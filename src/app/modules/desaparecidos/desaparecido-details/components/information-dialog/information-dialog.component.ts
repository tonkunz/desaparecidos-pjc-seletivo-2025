import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { IDesaparecidoDetails } from '../../desaparecido-details.types';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DesaparecidoDetailsAPIService } from '../../api/desaparecido-details.service';
import { FileUploadComponent } from '../../../../../shared/components/file-upload/file-upload.component';

@Component({
  selector: 'app-information-dialog',
  templateUrl: './information-dialog.component.html',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatDatepickerModule,
    FileUploadComponent
  ]
})
export class InformationDialogComponent implements OnInit {
  readonly data = inject<IDesaparecidoDetails>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<InformationDialogComponent>);
  private _api = inject(DesaparecidoDetailsAPIService);
  private _fb = inject(FormBuilder);

  form!: FormGroup;
  isLoading = false;
  files: File[] = [];

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this._fb.group({
      informacao: ['', [Validators.required]],
      descricao: [''], // Descrição da foto
      data: ['', [Validators.required]],
      ocoId: [this.data.ultimaOcorrencia.ocoId]
    });
  }

  handleFiles(files: File[]) {
    this.files = files;
  }

  sendInformation() {
    if (this.form.invalid) {
      return;
    }

    const handledForm = {
      ...this.form.value,
      data: new Date(this.form.value.data).toISOString().split('T')[0],
    };

    this.isLoading = true;
    this._api.sendInformation(this.files, handledForm).subscribe({
      next: () => {
        this.isLoading = false;
        this.dialogRef.close();
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
}
