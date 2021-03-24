import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  note : any[] = [];
  value ="";
  constructor(
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.hostoryItem();

  }

  hostoryItem(){//抓取localstorage中的歷史資訊
    this.note=JSON.parse(localStorage.getItem('note')|| '{}');
  }

  result_back(value:any){//傳值回去note 
    this.router.navigate(['/'], {
      queryParams: {
        value: value.value
      }
    });
    console.log(value);
  }

}
