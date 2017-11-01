export class Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;

  constructor(id: number, image: string, title: string, description: string, price: number) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.description = description;
    this.price = price;
  }
}
