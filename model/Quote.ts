import { Category } from "./Category";

export class Quote{
    private id:number;
    private quote:string;
    private author:string;
    private category:Category;

constructor(id:number,quote:string,author:string,category:Category){
    this.id=id;
    this.quote=quote;
    this.author=author;
    this.category=category
}

}