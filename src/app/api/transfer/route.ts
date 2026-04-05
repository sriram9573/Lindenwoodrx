import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { fullName, pharmacyPhone } = body;

        console.log(`[API] Transfer request received from: ${fullName}, Old Pharmacy: ${pharmacyPhone}`);

        // Simulate processing
        await new Promise(resolve => setTimeout(resolve, 1500));

        return NextResponse.json({
            success: true,
            message: `Thank you ${fullName}. We have received your transfer request and will contact your current pharmacy shortly.`,
            requestId: 'TRF-' + Math.floor(Math.random() * 10000).toString()
        }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Invalid request data' }, { status: 400 });
    }
}
