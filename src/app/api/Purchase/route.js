// app/api/purchase/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, traineeId, trainingId, paymentMethod, price } = body;

        // Validate the input
        if (!name || !traineeId || !trainingId || !paymentMethod || !price) {
            return NextResponse.json(
                { error: 'All fields are required.' },
                { status: 400 }
            );
        }

        // Simulate purchase processing (e.g., database operations)
        const purchaseData = {
            name,
            traineeId,
            trainingId,
            paymentMethod,
            price,
            purchasedAt: new Date().toISOString(),
        };

        console.log('Purchase data:', purchaseData);

        // Simulate success response
        return NextResponse.json(
            { message: 'Purchase successful', purchase: purchaseData },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing purchase:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
