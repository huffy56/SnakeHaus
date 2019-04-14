import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReptileData {
    data: any = null;

    load()
    {
        if(this.data)
        {
            return Promise.resolve(this.data);
        }
        return new Promise(resolve => {
            this.http.get('http://bonsai.lcsc.edu/dbjones2518/reptiles/api.php/records/snake?order=SnakeName')
            .map(res => res.json())
            .subscribe(data => {
                this.data = data.records;
                //I should add an alphabatizer here...
                resolve(this.data);
            });
        });
    } 
    

    
    getReptiles()
    {
        return this.load().then(data => {
            return data;
        });
    }

    getReptile(name: string)
    {
        for(var i = 0; i < this.data.length; i++)
        {
            if(this.data[i].SnakeName == name)
            {
                return this.data[i];
            }
        }
        return "Not found!";
        
    }

    getFilteredReptiles(queryString)
    {
        return this.load().then(Reptiles => {
            let theFilteredSnakes: any = [];

            for (let snake of Reptiles)
            {
                if(snake.SnakeName.toLowerCase().indexOf(queryString.toLowerCase())> -1)
                {
                    theFilteredSnakes.push(snake);
                }
            }
            return theFilteredSnakes;
        });
    }

    constructor(public http: Http){}
}