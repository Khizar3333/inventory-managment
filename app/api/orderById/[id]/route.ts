// dynamic api route to get order by id

import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest,
    { params }: { params: { id: string } }
) => {
    const id = params.id
   

    if (!id) {
        return NextResponse.json({ error: "Missing id parameter" });
    }

    const order = await db.order.findUnique({ where: { id } });

    return NextResponse.json({ order });
}

