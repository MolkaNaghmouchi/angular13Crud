import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { Theme } from '../models/theme.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-theme',
  templateUrl: './list-theme.component.html',
  styleUrls: ['./list-theme.component.css']
})
export class ListThemeComponent implements OnInit {


  themes?: Theme[];
 currentTheme: Theme = {
    nom: '',
    id: 0
  };


  currentIndex = -1;

  nom = '';

  constructor(private themeService: ThemeService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.gettheme();
 //  this.deleteTheme(this.route.snapshot.params["id"]);
  }


  gettheme() {
    this.themeService.getAll().subscribe(
      (res) => {
        this.themes = res;
        console.log(res);

      },
      (err) => {
        console.log(err);


      }
    )
  }
  refreshList(): void {
    this.gettheme();
    this.currentTheme = {
      id: 0,
      nom: '',

    };
    this.currentIndex = -1;
  }

  /*searchTitle(): void {
    this. theme; 
    this.currentIndex = -1;

    this.tutorialService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}*/


  setActiveTheme(theme: Theme, index: number): void {
    this.currentTheme = theme;
    this.currentIndex = index;
  }

  deleteTheme(id: number): void {
    this.themeService.delete(id).subscribe(
      () => {
        console.log('Theme deleted successfully');
        if (this.themes) {
          this.themes = this.themes.filter((theme) => theme?.id !== id);
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }



searchTitle(): void {
    this.currentTheme = { id: 0,
      nom: '',
      };
    this.currentIndex = -1;

    this.themeService.findByNom(this.nom)
      .subscribe({
        next: (data) => {
          this.themes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}  