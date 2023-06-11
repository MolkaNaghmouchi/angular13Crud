import { Component } from '@angular/core';
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


  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService , private themeService:ThemeService) { }

  theme?: Theme[];
   id_theme!:any;

  ngOnInit(): void {



    this.gettheme();
  }

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    this.tutorialService.create(data ,this.id_theme)

      .subscribe({
        
        next: (res) => {
          console.log(this.id_theme)
          console.log(res);
          this.submitted = true;
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


  gettheme(){
    this.themeService.getAll().subscribe(
      (res)=>{
        this.theme=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);


      }
    )
  }




}



