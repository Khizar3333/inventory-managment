import { db } from '@/db';
import { NextRequest, NextResponse } from 'next/server';
import toast from 'react-hot-toast';

// const prisma = new PrismaClient();

export  async function POST(req:Request, res:Response) {
  if (req.method === 'POST') {
    try {
      const body = await req.json();
      const { name, price, quantity,type, supplierId } = body;
      console.log('Received data:', { name, price, quantity,type, supplierId });



      // const objectIdRegex = /^[0-9a-fA-F]{24}$/;
      // if (!objectIdRegex.test(categoryId) || !objectIdRegex.test(supplierId)) {
      //   return Response.json({ error: 'Invalid categoryId or supplierId format' });
      // }


      if (!name || !price || !quantity  || !type || !supplierId) {
        return Response.json({ error: 'Missing required fields' });
      }

      const product = await db.product.create({
        data: {
          name,
          price,
          quantity,
          type,
          supplierId 
        },
      });
      
  return Response.json({ product });
} catch (error) {
      console.error('Error adding product:', error);
      return Response.json({ error: 'Internal server error' });
    }
  } else {
    return Response.json({ error: 'Method not allowed' });
  }
}


export const GET = async (req:NextRequest) => {
  try {
    const products = await db.product.findMany();
    return NextResponse.json({ products }); 
  } catch (error) {
    console.error('Error fetching products:', error);
    return Response.json({ error: 'Internal server error' });
  }
}

// get product by id

// export const GET = async (req:NextRequest) => {
//   try {
//     const { searchParams } = new URL(req.url)
//     const id = searchParams.get('id')

//     if (!id) {
//       return NextResponse.json({ error: 'Missing id parameter' });
//     }

//     const product = await db.product.findUnique({ where: { id } });
//     return NextResponse.json({ product });
//   } catch (error) {
//     console.error('Error fetching product:', error);
//     return NextResponse.json({ error: 'Internal server error' });
//   }

// }