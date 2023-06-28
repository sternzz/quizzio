import { NextResponse } from "next/server";
import DB from "@/db/data.json";

const find = (category, amount) => {
  return new Promise((resolve, reject) => {
    const data = DB[category];
    if (!data) {
      reject(`No data found for the category ${category}`);
    } else {
      const shuffle = data.sort(() => Math.random() - 0.5);
      const limit = shuffle.slice(0, amount);
      resolve(limit);
    }
  });
};

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat") || "general";
  const limit = searchParams.get("limit") || 5;
  try {
    const d = await find(cat, limit);
    return NextResponse.json(d, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
