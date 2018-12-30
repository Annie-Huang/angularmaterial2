import { NgModule } from '@angular/core';

import {MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ]
})
export class MaterialModule { }
