import { Component, OnInit } from '@angular/core';
import { data } from '../data';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  public dataArray = <data[]>[];
  public errorMsg: any;
  
  public page = 1;
  public pageSize = 5;

  constructor(private _getDataService : GetDataService) {  }
  ngOnInit(): void {
    this._getDataService.getData()
        .subscribe(data => this.dataArray = data,
                   error => this.errorMsg = error);
  }
}
