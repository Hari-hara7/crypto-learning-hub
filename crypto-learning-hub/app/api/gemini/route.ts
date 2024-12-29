import { NextResponse } from "next/server";
import { fetchCryptoPrices } from "@/utils/geminiAPI";

export async function GET() {
  try {
    const data = await fetchCryptoPrices();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Failed to fetch prices" }, { status: 500 });
  }
}
