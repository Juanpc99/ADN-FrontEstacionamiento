import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../modelo/menu-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
  }

}
