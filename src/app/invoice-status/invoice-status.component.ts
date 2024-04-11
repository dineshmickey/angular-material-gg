import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-invoice-status',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './invoice-status.component.html',
  styleUrl: './invoice-status.component.css'
})
export class InvoiceStatusComponent{
  @Input() state : string| undefined = undefined;

}
