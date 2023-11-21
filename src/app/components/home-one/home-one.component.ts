import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'owl.carousel';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {
  isVideoModalOpen = false;
  videoUrl = 'https://www.facebook.com/watch/?v=743031664326871';

  openVideoModal() {
    this.isVideoModalOpen = true;
  }

  closeVideoModal() {
    this.isVideoModalOpen = false;
  }

  constructor() { }

  ngOnInit(): void {

    
  }

}
