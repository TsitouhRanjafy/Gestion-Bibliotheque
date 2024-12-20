import { Component } from '@angular/core';
import { MenuComponent } from '../../component/home/menu/menu.component';
import { CardProfilComponent } from "../../component/home/card-profil/card-profil.component";
import { HeaderComponent } from "../../component/home/header/header.component";
import { LastReadingComponent } from "../../component/home/last-reading/last-reading.component";
import { ListComponent } from "../../component/home/list/list.component";
import { FamousAuthorComponent } from "../../component/home/famous-author/famous-author.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuComponent,
    CardProfilComponent,
    HeaderComponent,
    LastReadingComponent,
    ListComponent,
    FamousAuthorComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
