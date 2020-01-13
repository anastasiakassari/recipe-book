export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string; //e.g. URL

    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}