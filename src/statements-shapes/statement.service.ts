import { Injectable,Output,EventEmitter } from '@angular/core';

import { BehaviorSubject,Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StatementService {
  l1_score=0;
  l2_score=0;
  l3_score=0;
  l4_score=0;
  question=0;
  timersec=5;
  totanswers=[];
  score=this.l1_score + this.l2_score + this.l3_score + this.l4_score;
  compoShowValue='Start';
    private compoShow: BehaviorSubject<string> = new BehaviorSubject<string>(this.compoShowValue);

    compoShow$: Observable<string> = this.compoShow.asObservable();
  constructor() { }

  Stage1Que =[
    {question:"It's not a purple circle",shape:'circle',color:'purple',answer:'FALSE'},
    {question:"It's not a red circle",shape:'circle',color:'purple',answer:'TRUE'},
    {question:"It's a blue circle",shape:'circle',color:'black',answer:'FALSE'},
    {question:"It's not a black circle",shape:'circle',color:'black',answer:'FALSE'},
    {question:"It's not an orange circle",shape:'circle',color:'orange',answer:'FALSE'},
    {question:"It's a brown square",shape:'circle',color:'brown',answer:'FALSE'},
    {question:"It's not a purple square",shape:'circle',color:'black',answer:'TRUE'},
    {question:"It's a purple square",shape:'square',color:'purple',answer:'TRUE'},
    {question:"It's a black square",shape:'square',color:'black',answer:'TRUE'},
    {question:"It's not a red circle",shape:'circle',color:'blue',answer:'FALSE'},
    {question:"It's an orange circle",shape:'circle',color:'orange',answer:'TRUE'},
    {question:"It's not a black circle",shape:'square',color:'black',answer:'TRUE'},
    {question:"It's not a blue circle",shape:'circle',color:'blue',answer:'FALSE'},
    {question:"It's a green circle",shape:'circle',color:'green',answer:'TRUE'},
    {question:"It's not a blue circle",shape:'square',color:'blue',answer:'TRUE'},
    {question:"It's not a red circle",shape:'square',color:'red',answer:'TRUE'},
    {question:"It's not a red circle",shape:'square',color:'blue',answer:'TRUE'},
    {question:"It's not a red circle",shape:'square',color:'purple',answer:'TRUE'},
    {question:"It's not a purple circle",shape:'square',color:'purple',answer:'TRUE'},
    {question:"It's not an orange circle",shape:'square',color:'orange',answer:'TRUE'},
    {question:"It's not a black square",shape:'square',color:'pink',answer:'TRUE'},
    {question:"It's not a black square",shape:'square',color:'black',answer:'FALSE'},
    {question:"It's not a yellow circle",shape:'square',color:'blue',answer:'TRUE'},
    {question:"It's not a yellow circle",shape:'circle',color:'red',answer:'TRUE'},
    {question:"It's not a green square",shape:'square',color:'red',answer:'TRUE'},
    {question:"It's a red circle",shape:'circle',color:'red',answer:'TRUE'},
    {question:"It's not a black square",shape:'square',color:'blue',answer:'TRUE'},
    {question:"It's a green square",shape:'square',color:'black',answer:'FALSE'},
    {question:"It's a blue circle",shape:'square',color:'blue',answer:'FALSE'},
    {question:"It's not a black square",shape:'circle',color:'black',answer:'TRUE'},
  ];

  Stage2Que =[
    {question:"It's a red circle or a purple circle",shape:'circle',color:'green',answer:'FALSE'},
    {question:"It's a green circle or an orange circle",shape:'circle',color:'black',answer:'FALSE'},
    {question:"It's not a brown square neither a black circle",shape:'square',color:'black',answer:'TRUE'},
    {question:"It's not a brown square neither a black square",shape:'circle',color:'orange',answer:'TRUE'},
    {question:"It's not a green circle neither a black square",shape:'square',color:'green',answer:'TRUE'},
    {question:"It's not a brown circle neither a Blue square",shape:'circle',color:'blue',answer:'TRUE'},
    {question:"It's not a purple square",shape:'circle',color:'black',answer:'FALSE'},
    {question:"It's not a blue circle neither an orange circle",shape:'circle',color:'orange',answer:'FALSE'},
    {question:"It's a red circle or a purple circle",shape:'circle',color:'purple',answer:'TRUE'},
    {question:"It's not a purple square neither an orange circle",shape:'circle',color:'orange',answer:'FALSE'},
    {question:"It's a red square or a green circle",shape:'circle',color:'red',answer:'FALSE'},
    {question:"It's a purple square or a red circle",shape:'square',color:'purple',answer:'TRUE'}, 
    {question:"It's not a red square neither a blue square",shape:'square',color:'blue',answer:'FALSE'}, 
    {question:"It's not a green square neither a red circle",shape:'square',color:'red',answer:'FALSE'}, 
    {question:"It's a green circle or a red circle",shape:'square',color:'red',answer:'FALSE'}, 
    {question:"It's not a red circle niether a red blue square",shape:'circle',color:'red',answer:'FALSE'}, 
    {question:"It's a black square or a blue square",shape:'square',color:'black',answer:'TRUE'}, 
    {question:"Its not a black circle neither a blue square",shape:'square',color:'black',answer:'TRUE'}, 
    {question:"It's a green circle or a black square",shape:'circle',color:'green',answer:'TRUE'}, 
    {question:"It's not a red square neither a black circle",shape:'square',color:'green',answer:'TRUE'}, 
    {question:"It's a red circle or a green square",shape:'square',color:'red',answer:'FALSE'}, 
    {question:"It's a purple circle or a green circle",shape:'square',color:'green',answer:'FALSE'}, 
    {question:"It's a black square or a green square",shape:'circle',color:'red',answer:'FALSE'}, 
    {question:"It's a brown circle or a green square",shape:'square',color:'brown',answer:'FALSE'}, 
    {question:"It's a brown circle or a green square",shape:'circle',color:'brown',answer:'TRUE'}, 
    {question:"It's a black circle or a brown circle",shape:'circle',color:'brown',answer:'TRUE'}, 
    {question:"It's not a blue square neither a  blue circle",shape:"square",color:"blue",answer:"FALSE"},
    {question:"It's a green square or a black circle",shape:"circle",color:"black",answer:"TRUE"},
    {question:"It's an orange circle or a green square",shape:"square",color:"brown",answer:"FALSE"},
    {question:"It's a black circle or a green square",shape:"square",color:"green",answer:"TRUE"},
  ];

  Stage3Que =[
    {question:"There is neither a black circle nor a green square",shape1:'square',shape2:'circle',color1:'black',color2:'green',answer:'TRUE'},
    {question:"There is either a brown square or a black square",shape1:'circle',shape2:'circle',color1:'brown',color2:'purple',answer:'FALSE'},
    {question:"There is atleast one black square",shape1:'circle',shape2:'square',color1:'black',color2:'blue',answer:'FALSE'},
    {question:"There is neither a brown square nor an orange circle",shape1:'circle',shape2:'square',color1:'brown',color2:'orange',answer:'TRUE'},
    {question:"There is either a green circle or a green square",shape1:'circle',shape2:'square',color1:'brown',color2:'black',answer:'FALSE'},
    {question:"There is a blue square but not a brown circle",shape1:'square',shape2:'circle',color1:'blue',color2:'brown',answer:'FALSE'},
    {question:"There is a purple circle but not a purple square",shape1:'square',shape2:'square',color1:'black',color2:'purple',answer:'FALSE'},
    {question:"There is a yellow circle and a red square",shape1:'square',shape2:'circle',color1:'yello',color2:'red',answer:'FALSE'},
    {question:"There is either a yellow square or a yellow circle",shape1:'square',shape2:'circle',color1:'yellow',color2:'yellow',answer:'FALSE'},
    {question:"There is a yellow circle but not a red square",shape1:'square',shape2:'square',color1:'yellow',color2:'red',answer:'FALSE'},
    {question:"There is neither a brown square nor a purple circle",shape1:'circle',shape2:'square',color1:'brown',color2:'purple',answer:'TRUE'},
    {question:"There is either a green square or a red square",shape1:'circle',shape2:'square',color1:'green',color2:'red',answer:'TRUE'},
    {question:"There is a black square but not a green circle",shape1:'square',shape2:'square',color1:'black',color2:'green',answer:'TRUE'},
    {question:"There is no green circle",shape1:'circle',shape2:'square',color1:'brown',color2:'green',answer:'TRUE'},
    {question:"There is atmost one black circle",shape1:'square',shape2:'circle',color1:'black',color2:'black',answer:'TRUE'},
    {question:"There is atleast one green square",shape1:'square',shape2:'square',color1:'green',color2:'green',answer:'TRUE'},
    {question:"There is either a black circle or a green circle",shape1:'square',shape2:'square',color1:'green',color2:'black',answer:'FALSE'},
    {question:"There is neither a black square nor a black circle",shape1:'square',shape2:'circle',color1:'black',color2:'black',answer:'FALSE'},
    {question:"There is a red circle but not a green square",shape1:'circle',shape2:'square',color1:'red',color2:'green',answer:'FALSE'},
    {question:"There is atmost one brown square",shape1:'square',shape2:'circle',color1:'yellow',color2:'brown',answer:'TRUE'},
    {question:"There are atleast two blue circle",shape1:'circle',shape2:'square',color1:'blue',color2:'blue',answer:'FALSE'},
    {question:"There is neither a black circle nor a black square",shape1:'circle',shape2:'square',color1:'blue',color2:'green',answer:'TRUE'},
    {question:"There is either a grey circle or a red square",shape1:'circle',shape2:'square',color1:'grey',color2:'red',answer:'FALSE'},
    {question:"There is neither a blue square nor a yellow square",shape1:'circle',shape2:'circle',color1:'blue',color2:'yellow',answer:'TRUE'},
    {question:"There is atleast one black circle",shape1:'square',shape2:'circle',color1:'black',color2:'grey',answer:'FALSE'},
    {question:"There are atmost two green circle",shape1:'square',shape2:'circle',color1:'green',color2:'green',answer:'TRUE'},
    {question:"There is a grey square but not a grey circle",shape1:'square',shape2:'circle',color1:'grey',color2:'grey',answer:'FALSE'},
    {question:"There is no black square",shape1:'circle',shape2:'square',color1:'black',color2:'green',answer:'TRUE'},
    {question:"There are atleast two green square",shape1:'square',shape2:'circle',color1:'green',color2:'green',answer:'FALSE'},
    {question:"There is a grey circle but not a black circle",shape1:'circle',shape2:'square',color1:'grey',color2:'black',answer:'TRUE'},
  ];
  showAlert(message: any){
    alert(message);
  }
  customConsole(consoleData: any, title: any= 'Data'){
    console.log(title, consoleData);
  }
  changeCompo(comp:string){
    this.compoShowValue=comp;
    this.compoShow.next(this.compoShowValue);
  }
}
