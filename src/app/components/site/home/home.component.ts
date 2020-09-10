import { Component, OnInit } from '@angular/core';
import {ScriptService} from '../../../services/scriptservice.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private scriptService: ScriptService) {
    this.scriptService.load();
   }

  ngOnInit(): void {
  }

}
