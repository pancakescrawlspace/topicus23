import { KetenzorgType } from "./ketenzorgType";
import { PermissieGroep } from "./permissieGroep";

export class ExterneKoppeling {
    id! : number;
    naam! : string;
    url! : string;
    agb? : string;
    ketenzorgType? : KetenzorgType;
    kleur?: number;
    fontAwesome? : string;
    logoPad? : string;
    volgorde! : number;
    permissie! : PermissieGroep;
    opActiePagina! : boolean;
}
