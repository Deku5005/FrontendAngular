import { NewContribution } from './features/coponents-contributeurs/new-contribution/new-contribution';
import { Routes } from '@angular/router';

//import {IdeesDeProjets} from './features/components-administrateur/idees-de-projets/idees-de-projets';
import {DasboardAdmin} from './features/components-administrateur/dasboard-admin/dasboard-admin';
import {DashboardSection} from './features/components-administrateur/dashboard-section/dashboard-section';
import {Domaines} from './features/components-administrateur/domaines/domaines';
import {ParametrerLesBadges} from './features/components-administrateur/parametrer-les-badges/parametrer-les-badges';
import {Projets} from './features/components-administrateur/projets/projets';
import {ParametrerNotifications} from './features/components-administrateur/parametrer-notifications/parametrer-notifications';
import {IdeeDeProjet} from './features/components-administrateur/idee-de-projet/idee-de-projet';
import { Sidebar } from './features/coponents-contributeurs/sidebar/sidebar';
import { DashboardContributeur } from './features/coponents-contributeurs/dashboard-contributeur/dashboard-contributeur';
import { DasboardContributeurSection } from './features/coponents-contributeurs/dasboard-contributeur-section/dasboard-contributeur-section';
import { ListProjects } from './features/coponents-contributeurs/list-projects/list-projects';
import { Reconpenses } from './features/coponents-contributeurs/reconpenses/reconpenses';

import { PopupEye } from './features/coponents-contributeurs/list-projects/popup-eye/popup-eye';
import {
  IdeeDeProjetContributeurs
} from './features/coponents-contributeurs/idee-de-projet-contributeurs/idee-de-projet-contributeurs';
import {
  MesProjetContributeurs
} from './features/coponents-contributeurs/mes-projet-contributeurs/mes-projet-contributeurs';
import {
  MesContributionsContributeurs
} from './features/coponents-contributeurs/mes-contributions-contributeurs/mes-contributions-contributeurs';
import {ConnexionComponent} from './features/login/connexion-component/connexion-component';
import {InscriptionComponent} from './features/login/inscription-component/inscription-component';
import { ContributionDetails } from './features/coponents-contributeurs/contribution-details/contribution-details';

export const routes: Routes = [

   { path: 'new-contribution', component: NewContribution },

  {
    path: "ideeProjet",
    component: IdeeDeProjet
  },

  {
    path: "Domaines",
    component: DasboardAdmin,
    children:[
      {
        path: "",
        component: Domaines
      }
    ]
  },

  {
    path: "ParametrerBadge", component: DasboardAdmin, children: [

      {path: "", component: ParametrerLesBadges},
    ]
  },
  {
    path: "Projet",
    component: DasboardAdmin,
    children:[
      {
        path: "",
        component: Projets
      }
    ]
  },
  {
    path: "ParemtrerNotication",
    component: DasboardAdmin,
    children:[
      {
        path: "",
        component: ParametrerNotifications
      }
    ]
  },
  {
    path: "AdminDashboard",
    component: DasboardAdmin,
    children: [
      {
        path: "",
        component: DashboardSection
      }
    ]
  },
  {
  path: "dashboardContributeur",
  component: DashboardContributeur,
  children: [
    {
      path: "",
      component: DasboardContributeurSection // affiché par défaut quand on navigue vers /dashboardContributeur
    }
  ]
},
{
    path: "TableauContributeur", component: DashboardContributeur,
     children: [
    {
      path: "",
      component: DasboardContributeurSection // affiché par défaut quand on navigue vers /dashboardContributeur
    }
  ]
},

{
    path: "ideeProjetContributeur", component: DashboardContributeur,
    children: [
      {
        path: "",
        component: IdeeDeProjetContributeurs // affiché par défaut quand on navigue vers /ideeProjetContributeur
      }
    ]
},
{
  path:"ProjetsContributeurs",
  component: DashboardContributeur,
  children:[
    {
      path:'',
      component: MesProjetContributeurs // affiché par défaut quand on navigue vers /ProjetsContributeurs
    }
  ]
},
{
  path:"MesContributionsContributeurs",
  component: DashboardContributeur,
  children:[
    {

     path: '',
     component: MesContributionsContributeurs // affiché par défaut quand on navigue vers /ContriContri
    }
  ]
},

{ path: 'mes-contributions-contributeurs', component: MesContributionsContributeurs },
  { path: 'contribution-details', component: ContributionDetails },

{
  path:"Recompenses",
  component: DashboardContributeur,
  children:[
    {
      path:'',
      component: Reconpenses, // affiché par défaut quand on navigue vers /Recompenses
    }
  ]
},
{
    path: "projects",
    component: ListProjects
},
{
    path:"Connexion",
    component: ConnexionComponent
},

{
    path:"Inscription",
    component: InscriptionComponent
},
  { path: '', redirectTo: 'Connexion', pathMatch: 'full' },


];
