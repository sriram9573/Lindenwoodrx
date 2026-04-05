import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { rxNumber, drugName } = body;

        console.log(`[API] Refill request received for RX: ${rxNumber}, Drug: ${drugName}`);

        // Simulate database/pharmacy system processing
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({
            success: true,
            message: `Refill request for ${drugName} (RX: ${rxNumber}) has been submitted to the pharmacist.`,
            orderId: Math.floor(Math.random() * 1000000).toString()
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Invalid request data' }, { status: 400 });
    }
}
