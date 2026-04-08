import { NextRequest, NextResponse } from "next/server";

const CREDLY_BADGES_URL =
  "https://www.credly.com/users/5141ebf4-7340-4e43-a099-6858ed8c1663/badges";

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get("page") || "1";

  const res = await fetch(
    `${CREDLY_BADGES_URL}?page=${page}&page_size=48`,
    {
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0",
      },
    }
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch certificates" },
      { status: res.status }
    );
  }

  const json = await res.json();

  const certificates = json.data.map(
    (badge: {
      id: string;
      badge_template: { name: string };
      image_url: string;
      issuer: { entities: { entity: { name: string } }[] };
      issued_at_date: string;
      expires_at_date: string | null;
    }) => ({
      name: badge.badge_template.name,
      imageUrl: badge.image_url,
      orgnization: badge.issuer.entities[0].entity.name,
      earnedDate: badge.issued_at_date,
      expirationDate: badge.expires_at_date,
      sourceUrl: `https://www.credly.com/badges/${badge.id}/public_url`,
    })
  );

  return NextResponse.json(certificates);
}
