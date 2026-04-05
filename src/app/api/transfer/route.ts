import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzl1SRKI-b4kNGf1TNavklTG0JEuxXC-Ck30WQUdnuQSH82qCSMEc8etsDpEhKVxXFlbA/exec';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Forward the request to Google Apps Script from the server (bypasses CORS)
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        return NextResponse.json({
            success: true,
            message: 'Transfer request successfully sent to Lindenwood Rx.',
            googleResponse: data
        });
    } catch (error) {
        console.error('[API Proxy Error]', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to process transfer request.'
        }, { status: 500 });
    }
}
