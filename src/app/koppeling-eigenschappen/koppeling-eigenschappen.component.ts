import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExterneKoppeling } from '../data/externeKoppeling';
import { KetenzorgType } from '../data/ketenzorgType';
import { PermissieGroep } from '../data/permissieGroep';

@Component({
  selector: 'koppeling-eigenschappen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './koppeling-eigenschappen.component.html',
  styleUrl: './koppeling-eigenschappen.component.css'
})
export class KoppelingEigenschappenComponent {
  @Input() koppeling! : ExterneKoppeling;

  public ketenzorgTypen = Object.values(KetenzorgType);
  public permissies = Object.values(PermissieGroep);

  getLinkColorAsHexString(k : ExterneKoppeling) : string {
    if (k.kleur)
      return "0x" + k.kleur?.toString(16);
    else return "";
  }

  getBackgroundStyle (color: number | undefined) : string {
    if (color)
      return "background-color: #" + color.toString(16)+';';
    return "";
  }
}
