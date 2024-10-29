import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";
import { isContext } from "vm";





export const PUT= async function (req: NextRequest,  { params }: { params: { id: string } }) {
//   const { id } = req.query; // Get ID from URL params
const id = params.id

if (!id) {
    return NextResponse.json({ error: 'Missing id parameter' });
}

    try {
    //   const updateData = req.body; 
    
      const body = await req.json();
      const { name, email,contact  } = body;
      // Validate update data here (optional)

      const updatedSupplier = await db.supplier.update({
        where: { id: String(id) }, // Cast ID to string for type safety
        data: {
          name,
          email,
          contact
        },
      });

    return NextResponse.json(updatedSupplier);
    } catch (error) {
      console.error(error);
    return NextResponse.json({ message: 'Error updating supplier' });
    }
  } 

//   get supplier by id

  export const GET = async (req:NextRequest,{ params }: { params: { id: string } }) => {
    try {
      const id = params.id

      if (!id) {
        return NextResponse.json({ error: 'Missing id parameter' });
      }

      const supplier = await db.supplier.findUnique({ where: { id } });
      return NextResponse.json({ supplier });
    } catch (error) {
      console.error('Error fetching supplier:', error);
      return NextResponse.json({ error: 'Internal server error' });
    }   

  }