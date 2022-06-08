'use strict'

class MyTimer{
    constructor(date){
       this.dateNow=new Date();
       this.allTimeSec=(date-this.dateNow)/1000;
       this.divMessage=document.querySelector('.message');
       this.divDays=document.querySelector('.days');
       this.divHour=document.querySelector('.hours');
       this.divMinuts=document.querySelector('.minutes');
       this.divSeconds=document.querySelector('.seconds');

    }
    timerGO(){
        if(this.allTimeSec>0){
        this.allTimeSec=Number(this.allTimeSec-1);
       //console.log(date);
       // console.log(this.dateNow);
        this.timer=setTimeout(()=>{
        this.timerGO();
        this.showTimer();},1000);
        }
        else{
            this.divMessage.innerText="Uncorrect date";
        }
            

    }
    timerStop(){
       clearTimeout(this.timer);
    }
    showTimer(){
        let days=0;
        let hour=0;
        let min=0;
        let cek=0;
        let cekond=Math.floor(this.allTimeSec%60);
        days=(this.allTimeSec-this.allTimeSec%(24*60*60))/(24*60*60);
        cek=this.allTimeSec-days*(24*60*60);
        if(cek<3600){
            hour=0;
           }else{
            hour=(((cek-cek%60)/60)-((cek-cek%60)/60)%60)/60;
           }
        
            min=(cek-cek%60)/60-hour*60;

            if(days<=0 && hour<=0 && min<=0 && cekond<=0)
            {
                this.divMessage.innerText='Time is OVER';
                this.divDays.innerText="00";
                this.divHour.innerText="00";
                this.divMinuts.innerText="00";
                 this.divSeconds.innerText="00";
                this.timerStop();
                return;
               
            }
            this.divDays.innerText=days;
            this.divHour.innerText=hour;
            this.divMinuts.innerText=min;
            this.divSeconds.innerText=cekond;
          
             
    }
    init(){
      
        this.timerGO();
    }

}
let date=new Date(2022,6,8,16,6,0);
let timer=new MyTimer(date);
timer.init();