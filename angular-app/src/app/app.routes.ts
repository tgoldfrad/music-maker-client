import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { UserComponent } from '../components/user/user.component';
import { RegistrationStatsComponent } from '../components/registration-stats/registration-stats.component';
import { authGuard } from '../guards/auth.guard';
import { UnAuthComponent } from '../components/un-auth/un-auth.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user', component: UserComponent,canActivate:[authGuard]},
    { path: 'stats', component: RegistrationStatsComponent,canActivate:[authGuard]},
    { path: 'unauth', component: UnAuthComponent},

];
//,canActivate:[authGuard] 
