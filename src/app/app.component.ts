import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { KoppelingRegelComponent } from './koppeling-regel/koppeling-regel.component';
import { KetenzorgType } from './data/ketenzorgType';
import { ExterneKoppeling } from './data/externeKoppeling';
import { PermissieGroep } from './data/permissieGroep';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, KoppelingRegelComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alleKoppelingenKey : string = "alleKoppelingen";

  alleKoppelingen : ExterneKoppeling[] = [
    { id: 0, naam: "Netflix", url: "http://www.netflix.com", agb: "53530001", ketenzorgType: KetenzorgType.Dm, kleur: 0xeb4316, logoPad: "content/images/evie/evie_logo.svg", volgorde: 3, permissie: PermissieGroep.SamenwerkenPatient, opActiePagina: false },
    { id: 1, naam: "nieuw2", url: "www.ditiseennieuwekoppeling.nl", ketenzorgType: KetenzorgType.Bbr, kleur: 0x4e5e2a, fontAwesome: "fa-rotate-left", volgorde: 2, permissie: PermissieGroep.SamenwerkenPatient, opActiePagina: false },
    { id: 2, naam: "Bordspellen", url: "https://www.semicoop.com", agb: "55448878", ketenzorgType: KetenzorgType.CopdAstma, kleur: 0xe836e9, fontAwesome: "fa-rotate-left", logoPad: "content/images/evie/evie_logo.svg", volgorde: 5, permissie: PermissieGroep.SamenwerkenPatient, opActiePagina: true },
    { id: 3, naam: "Minddistrict", url: "/#/samenwerken-sso/{patientid}", agb: "53532104", kleur: 0xa435a2, logoPad: "content/images/custom-icon.svg", volgorde: 1, permissie: PermissieGroep.SamenwerkenEHealth, opActiePagina: true },
    { id: 4, naam: "Therapieland", url: "https://api.test.viplive.dev/a", agb: "24009121", kleur: 0xebe8be, logoPad: "content/images/custom-icon.svg", volgorde: 2, permissie: PermissieGroep.SamenwerkenEHealth, opActiePagina: true },
    { id: 5, naam: "Minddistrict", url: "https://api.test.viplive.dev/a", agb: "53530001", kleur: 0xa435a2, logoPad: "content/images/custom-icon.svg", volgorde: 2, permissie: PermissieGroep.SamenwerkenEHealth, opActiePagina: true },
    { id: 6, naam: "Diagnostiek voor U", url: "https://www.olst-wijhe.nl/", agb: "55448878", kleur: 0xfbc202, volgorde: 7, permissie: PermissieGroep.SamenwerkenPatient, opActiePagina: true },
    { id: 7, naam: "Minddistrict", url: "/#/samenwerken-sso/{patientid}", agb: "41411023", kleur: 0x1dd818, logoPad: "content/images/custom-icon.svg", volgorde: 8, permissie: PermissieGroep.SamenwerkenEHealth, opActiePagina: true },
    { id: 8, naam: "Therapieland", url: "https://api.test.viplive.dev/a", agb: "41411023", kleur: 0xdc0c0c, logoPad: "content/images/custom-icon.svg", volgorde: 9, permissie: PermissieGroep.SamenwerkenEHealth, opActiePagina: true },
    { id: 9, naam: "Certe - Labaanvraag", url: "/#/samenwerken-sso/{patientid}", agb: "53530003", kleur: 0x5d9dd7, fontAwesome: "fa-flask", volgorde: 10, permissie: PermissieGroep.SamenwerkenLabaanvragen, opActiePagina: true },
    { id: 10, naam: "Certe - Inzien labaanvragen", url: "/#/samenwerken-sso/{patientid}", agb: "53530003", kleur: 0x5d9dd7, fontAwesome: "fa-flask", volgorde: 10, permissie: PermissieGroep.SamenwerkenLabaanvragen, opActiePagina: true },
    { id: 11, naam: "Certe - Inzien labresultaten", url: "/#/samenwerken-sso/{patientid}", agb: "53530003", kleur: 0x5d9dd7, fontAwesome: "fa-flask", volgorde: 10, permissie: PermissieGroep.SamenwerkenLabaanvragen, opActiePagina: true },
    { id: 12, naam: "Diagnostiek - Labaanvragen", url: "/#/samenwerken-sso/{patientid}", agb: "53530003", logoPad: "content/images/custom-icon.svg", volgorde: 11, permissie: PermissieGroep.SamenwerkenLabaanvragen, opActiePagina: true },
  ];

  constructor() {
    this.revertToDefaultKoppelingen(true);
  }

  upsertKoppeling(koppeling : ExterneKoppeling)
  {
    var updatedKoppelingen = this.localKoppelingen;
    
    if (updatedKoppelingen)
    {
      var index = updatedKoppelingen.findIndex(k => k.id == koppeling.id);
      if (index > -1)
        updatedKoppelingen.splice(index, 1);
    }
    else
      updatedKoppelingen = [];

    updatedKoppelingen.push(koppeling);
    this.saveKoppelingen(updatedKoppelingen);
  }
  
  revertToDefaultKoppelingen(force: boolean) : void
  {
    if (force == false && !localStorage.getItem(this.alleKoppelingenKey))
      return;

    this.saveKoppelingen(this.alleKoppelingen);
  }

  saveKoppelingen(koppelingen: ExterneKoppeling[]) : void
  {
    localStorage.setItem(this.alleKoppelingenKey, JSON.stringify(koppelingen));
  }

  get localKoppelingen() : ExterneKoppeling[] | undefined {
    var koppelingen = localStorage.getItem(this.alleKoppelingenKey);
    if (!koppelingen)
      return undefined;
    return JSON.parse(koppelingen);
  }

  title = 'Externe koppelingen';
}
