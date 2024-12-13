import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-academics',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './academics.component.html',
  styleUrl: './academics.component.css'
})
export class AcademicsComponent {

  academicType:string | null = null;

  constructor(private route:ActivatedRoute){
  }

  ngOnInit(){
      // Access the route parameter 'academicType'
      this.route.paramMap.subscribe(params => {
        this.academicType = params.get('academicType');
      });
  }
}
