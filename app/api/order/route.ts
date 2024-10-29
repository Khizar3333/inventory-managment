
import { db } from '@/db';
import { NextRequest, NextResponse } from 'next/server';


export const GET = async () => {
    try {
        const orders = await db.order.findMany(
            {
                include: {
                   
                        items: true,
                        user: true,
                }
            }
        );
        return NextResponse.json({ orders });
    } catch (error) {
        console.error('Error fetching orders:', error);
        return NextResponse.json({ error: 'Internal server error' });
    }
}


// create new order

export const POST = async (req: NextRequest, ) => {

    if (req.method === 'POST') {
      const body = await req.json();

        
        const { userId, items  } = body;

    try {
      const order = await db.order.create({
        data: {
          userId,
          items: {
            create: items.map((item: any) => ({
              productId: item.productId,
              productname: item.productname,
              category: item.category,
              quantity: item.quantity,
              price: item.price,
            })),
          },
          totalAmount: items.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0),
        },
    });
    return NextResponse.json(order);
}
        
        
        catch (error) {
        //   res.status(500).json({ error: 'Failed to fetch order' });
        return NextResponse.json({ error: 'Failed to fetch order' });
        }
      } 

}
