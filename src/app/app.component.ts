import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { InvoiceStatusComponent } from './invoice-status/invoice-status.component';
import { MatIconModule } from '@angular/material/icon';
import { TransactionTypeComponent } from './transaction-type/transaction-type.component'

import { MatCardModule } from '@angular/material/card';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

import { MatLabel } from '@angular/material/form-field';


import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    MatSlideToggleModule,
    MatTableModule,
    MatButtonModule,
    MatDividerModule,
    InvoiceStatusComponent,
    MatIconModule,
    MatCardModule,
    TransactionTypeComponent,
    MatGridListModule,
    MatFormFieldModule,
    MatLabel,
    MatInputModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_material_test';
  possibleStatus = ['submitted', 'draft', 'paid'];
  dataSource = [
    {
      invoice_date: '02/28/2024',
      invoice_number: 'ABC223904',
      supplier_name : 'Alexandar Smith',
      amount: 1.0079,
      status: 'submitted',
      transaction_type : 'ar'
    },
    {
      invoice_date: '03/28/2024',
      invoice_number: 'ABC223905',
      supplier_name : 'Alexandar Smith',
      amount: 4.0026,
      status: 'draft',
      transaction_type : 'ar'
    },
    {
      invoice_date: '04/28/2024',
      invoice_number: 'ABC223906',
      supplier_name : 'Alexandar Smith',
      amount: 6.941,
      status: 'paid',
      transaction_type : 'ar'
    },
    {
      invoice_date: '05/28/2024',
      invoice_number: 'ABC223907',
      supplier_name : 'Alexandar Smith',
      amount: 9.0122,
      status: 'draft',
      transaction_type : 'ar'
    },
    {
      invoice_date: '06/28/2024',
      invoice_number: 'ABC223908',
      supplier_name : 'Alexandar Smith',
      amount: 10.811,
      status: 'submitted',
      transaction_type : 'ap'
    },
    {
      invoice_date: '07/28/2024',
      invoice_number: 'ABC223909',
      supplier_name : 'Alexandar Smith',
      amount: 12.0107,
      status: 'paid',
      transaction_type : 'ap'
    },
    {
      invoice_date: '08/28/2024',
      invoice_number: 'ABC223910',
      supplier_name : 'Alexandar Smith',
      amount: 14.0067,
      status: 'draft',
      transaction_type : 'ap'
    },
    {
      invoice_date: '09/28/2024',
      invoice_number: 'ABC223911',
      supplier_name : 'Alexandar Smith',
      amount: 15.9994,
      status: 'paid',
      transaction_type : 'ap'
    },
  ];
  displayedColumns: string[] = [
    'invoice_date',
    'invoice_number',
    'supplier_name',
    'amount',
    'transaction_type',
    'status',
    'actions',
  ];
}
