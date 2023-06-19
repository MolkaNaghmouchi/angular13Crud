import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theme } from 'src/app/models/theme.model';

import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-details-theme',
  templateUrl: './details-theme.component.html',
  styleUrls: ['./details-theme.component.css']
})
export class DetailsThemeComponent {
  theme?: Theme[];
  @Input() viewMode = false;

  @Input() currentTheme: Theme = {
    nom: '',
    id: 0,

  };


  message = '';

  constructor(
    private themeService: ThemeService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      // this.getTutorial(this.route.snapshot.params["id"]);
    
      this.getThemeBy(this.route.snapshot.params["id"]);
    }


    this.gettheme()
  }



  getThemeBy(id: string): void {
    this.themeService.get(id)
      .subscribe({
        next: (data: Theme) => {
          this.currentTheme = data;


          console.log(data);
        },
        error: (e: any) => console.error(e)
      });
  }


  updateTheme(): void {
    // console.log(this.id_theme)
    this.message = '';


    this.themeService.update(this.currentTheme.id, this.currentTheme)
      .subscribe({

        next: (res) => {
          // console.log(this.id_theme)
          console.log(res);
          this.message = res.message ? res.message : 'This theme was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }





  gettheme() {
    this.themeService.getAll().subscribe(
      (res) => {
        this.theme = res;
        console.log(res);

      },
      (err) => {
        console.log(err);


      }
    )
  }





}