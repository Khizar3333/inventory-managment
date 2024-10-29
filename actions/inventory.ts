import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
interface Product {
    id: number;
    name: string;
    description: String
  category :  String
  brand  :    String
  costPrice : number
  
  stock  :    number
    // other properties
}
// export default async function getProducts(): Promise<Product[]> {
//   try {
//     const products = await prisma.product.findMany();
//     return products;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     throw new Error('Failed to fetch products');
//   }
// }
