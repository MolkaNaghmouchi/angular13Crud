import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from 'src/app/models/theme.model';
import { Tutorial } from 'src/app/models/tutorial.model';
import { ThemeService } from 'src/app/services/theme.service';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {
  selectedCities : any

  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  theme: Theme[] = [];
  id_theme: any;

  constructor(private tutorialService: TutorialService, private themeService: ThemeService, private router: Router) {}

  ngOnInit(): void {
    this.getTheme();
  }

  saveTutorial(): void {
    var items = []
    for(let i=0 ;i< this.selectedCities.length ; i++){
      items.push(this.selectedCities[i])
    }
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
      themeIds:items
    }
    this.tutorialService.create(data).subscribe({
      next: (res) => {
        console.log(this.selectedCities);
        console.log(res);
        this.submitted = true;
        this.router.navigate(['/tutorials']);
       // this.router.navigate(['/list-theme']);
      },
      error: (e) => console.error(e)
    });
}
   

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }

  getTheme(): void {
    this.themeService.getAll().subscribe(
      (res) => {
        this.theme = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
