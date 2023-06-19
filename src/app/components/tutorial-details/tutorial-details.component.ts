
import { Component, Input, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial.model';
import { ThemeService } from 'src/app/services/theme.service';
import { Theme } from 'src/app/models/theme.model';
@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent {
  selectedCities : any

  theme?: Theme[];
  id_theme!:any;
  
  @Input() viewMode = false;

  @Input() currentTutorial: Tutorial = {
    title: '',
    description: '',
    published: false,
    id: 0 , 
    
  };
  
  message = '';

  constructor(
    private tutorialService: TutorialService,
    private themeService :ThemeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["id"]);
    }
  
  
  this.gettheme()
  
  } 
  //quand il ya array pour mapper les objets : on faire mapp 

  getTutorial(id: string): void {
    this.tutorialService.get(id)
      .subscribe({
        next: (data: Tutorial) => {
          this.currentTutorial = data;
          //quand on retourne array pour recuperer avec map 
          this.selectedCities = data.themes?.map(o=>o.id);
          console.log(data);
        },
        error: (e: any) => console.error(e)
      });
  }

 /* updatePublished(status: boolean): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status
    };

    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentTutorial.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }*/

  updateTutorial(): void {
   // console.log(this.id_theme)
    this.message = '';


    this.tutorialService.update(this.currentTutorial.id , 8 ,  this.currentTutorial  )
      .subscribe({
        
        next: (res) => {
         // console.log(this.id_theme)
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }



  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tutorials']);
        },
        error: (e) => console.error(e)
      });
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
