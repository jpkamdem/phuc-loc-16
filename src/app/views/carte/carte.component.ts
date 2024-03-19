import { Component, OnInit } from '@angular/core';
import { BoxesService } from '../../services/boxes.service';

@Component({
  selector: 'carte',
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css'
})
export class CarteComponent implements OnInit{
  
  boxes: any;

  constructor(private boxesService: BoxesService) {
  }

  ngOnInit(): void {
      this.getBoxes()
  }

  getBoxes(): void {
    this.boxesService.getBoxes().subscribe(data => {
      this.boxes = data
      console.log(this.boxes)
    })
  }
}
