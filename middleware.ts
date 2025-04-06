import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
    matcher: ["/((?!api|_next|static|favicon.ico).*)"],
};

export function middleware(request: NextRequest) {
    const city = (request as any).geo?.city;
    const country = (request as any).geo?.country;
    console.log('Geo Info:', { city, country });

    if (city && city !== "Sydney") {
        console.log('Geo Info:', { city, country });
        return NextResponse.redirect(new URL('/blocked', request.url));
    }

    return NextResponse.next();
}
