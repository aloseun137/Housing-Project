import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertycard',
  templateUrl: './propertycard.component.html',
  styleUrls: ['./propertycard.component.scss']
})
export class PropertycardComponent implements OnInit {
  property: any = {name: 'Park View', type: 'duplex', price: 2000};

  constructor() { }

  ngOnInit(): void {
  }

}
