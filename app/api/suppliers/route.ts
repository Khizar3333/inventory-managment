import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export const POST= async (req: NextRequest) => {
    const body = await req.json();

    const { name,email,contact } = body;

    if (!name || !email || !contact) {
        return NextResponse.json({ error: 'Missing required fields' });
    }
    try {
        const supplier = await db.supplier.create({
            data: {
                name,
                email,
                contact
            }

        })
        return NextResponse.json(supplier);
    } catch (error) {
        console.error('Error creating supplier:', error);
        return NextResponse.json({ error: 'Internal server error' });
        
    }

}

// route to get all suppliers

export const GET = async () => {
    try {
        const suppliers = await db.supplier.findMany();
        return NextResponse.json({ suppliers });
    } catch (error) {
        console.error('Error fetching suppliers:', error);
        return NextResponse.json({ error: 'Internal server error' });
    }
}




