import { NextRequest, NextResponse } from "next/server";
import {
  BookingSubmissionPayload,
  sendBookingToTelegram,
} from "@/lib/telegram";

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as BookingSubmissionPayload;

    if (!payload.guestName || !payload.guestContact || !payload.chosenFormatName) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const result = await sendBookingToTelegram(payload);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (caughtError) {
    const errorMessage =
      caughtError instanceof Error ? caughtError.message : "Internal Server Error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
