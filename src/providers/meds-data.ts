import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MedsData {
    data: any = null;

    load()
    {
        if(this.data)
        {
            return Promise.resolve(this.data);
        }
        return new Promise(resolve => {
            this.http.get('http://bonsai.lcsc.edu/dbjones2518/reptiles/api.php/records/meds')
            .map(res => res.json())
            .subscribe(data => {
                this.data = data.records;
                resolve(this.data);
            });
        });
    } 
    

    
    getAllMeds()
    {
        return this.load().then(data => {
            return data;
        });
    }

    getMeds(snakeName: string)
    {
        var medication: Object = null;
        for(var i = 0; i < this.data.length; i++)
        {
            if(this.data[i].SnakeName == snakeName)
            {
                return this.data[i];
            }
        }
        return "Not found!";
    }

    constructor(public http: Http){}
}