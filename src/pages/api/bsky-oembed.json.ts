import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
  const target = url.searchParams.get("url");
  if (!target) {
    return new Response(JSON.stringify({ html: "" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const endpoint = `https://public.api.bsky.app/xrpc/app.bsky.oembed.getEmbed?url=${encodeURIComponent(target)}`;
  try {
    const r = await fetch(endpoint, {
      headers: { accept: "application/json" },
    });
    if (!r.ok) throw new Error(String(r.status));
    const data = await r.json();
    const html: string = data?.html || "";
    return new Response(JSON.stringify({ html }), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "public, s-maxage=300, stale-while-revalidate=86400",
      },
    });
  } catch {
    return new Response(JSON.stringify({ html: "" }), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "no-store",
      },
    });
  }
};
