import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

const IMGS: string[] = [
  'https://ki.ill.in.ua/m/670x450/24325386.jpg',
  'http://xaxa-net.ru/uploads/posts/2018-03/1522233561_perfekcionizm_xaxa-net.ru-10.jpg',
  'https://www.derimot.no/wp-content/uploads/2017/10/1dfa5942925eddf29f10de4be412ad5f-sea-photography-surrealism-photography.jpg'
]

@Component({
  selector: 'app-apis-container',
  templateUrl: './apis-container.component.html',
  styleUrls: ['./apis-container.component.css']
})

export class ApisContainerComponent implements OnInit {

  imageUrlArray = IMGS
  now = moment().format('LLLL');

  constructor() { }

  ngOnInit() {
  }

}
