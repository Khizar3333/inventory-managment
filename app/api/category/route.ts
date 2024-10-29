import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

// add category in database
export const POST = async (req: NextRequest) => {

    try {
        const body = await req.json();

        const { name } = body;

        if (!name) {
            return NextResponse.json({ error: 'Missing required fields' });
        }

        const category = await db.category.create({
            data: {
                name
            }
        });

        return NextResponse.json({ category });
    } catch (error) {
        console.error('Error creating category:', error);
        return NextResponse.json({ error: 'Internal server error' });
    }
}


// get all category
export const GET = async () => {
    try {
        const categories = await db.category.findMany();
        return NextResponse.json({ categories });
    } catch (error) {
        console.error('Error fetching categories:', error);
        return NextResponse.json({ error: 'Internal server error' });
    }
}
