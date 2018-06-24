import {Routes} from '@angular/router';
import { StartComponent } from '../start/start.component';
import { WyszukiwarkaComponent } from '../wyszukiwarka/wyszukiwarka.component';
import { UlubioneComponent } from '../ulubione/ulubione.component';
import { InfoComponent } from '../info/info.component';
import { OdcinkiComponent } from '../odcinki/odcinki.component';
import { KalendarzComponent } from '../kalendarz/kalendarz.component';


const appRouting: Routes = [
    {path: '', component: StartComponent},
    {path: 'wyszukiwarka', component: WyszukiwarkaComponent},
    {path: 'ulubione', component: UlubioneComponent},
    {path: 'info', component: InfoComponent},
    {path: 'odcinki/:id', component: OdcinkiComponent},
    {path: 'kalendarz', component: KalendarzComponent}
];

export default appRouting;
