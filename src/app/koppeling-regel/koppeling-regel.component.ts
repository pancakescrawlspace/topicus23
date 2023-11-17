import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExterneKoppeling } from '../data/externeKoppeling';
import { KoppelingEigenschappenComponent } from '../koppeling-eigenschappen/koppeling-eigenschappen.component';
import { KetenzorgType } from '../data/ketenzorgType';
import { PermissieGroep } from '../data/permissieGroep';

@Component({
  selector: 'koppeling-regel',
  standalone: true,
  imports: [CommonModule, KoppelingEigenschappenComponent],
  templateUrl: './koppeling-regel.component.html',
  styleUrl: './koppeling-regel.component.css'
})
export class KoppelingRegelComponent {
  @Input() koppeling! : ExterneKoppeling;  
}
