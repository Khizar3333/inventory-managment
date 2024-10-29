
import { db } from '@/db';
import { NextRequest, NextResponse } from 'next/server';


export  async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    try {
      const body = await req.json();
      const { productId, quantity } = body;
      if (!productId || !quantity) {
        return NextResponse.json({ message: 'Missing required fields' });
      }
      const product = await db.product.findUnique({
        where: { id: productId },
        select: { name: true },
      });

      if (!product) {
        return NextResponse.json({ message: 'Product not found' });
      }

      const newInventory = await db.inventory.create({
        data: {
          productId,
          quantity,
          productName: product.name
        },
      });
      return NextResponse.json(newInventory);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error creating inventory' });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed' });
  }
}



// get all inventory
export const GET = async () => {
  try {
    const inventory = await db.inventory.findMany();
    return NextResponse.json({ inventory });
  } catch (error) {
    console.error('Error fetching inventory:', error);
    return NextResponse.json({ error: 'Internal server error' });
  }
}