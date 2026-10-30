const SPA_ROUTES = new Set([
  "/team",
  "/partners",
  "/results",
  "/carro",
  "/contactos",
  "/join",
]);

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const path = url.pathname.replace(/\/+$/, "") || "/";
  const forwardedProto = context.request.headers.get("x-forwarded-proto");

  // Canonical host: www -> apex.
  if (url.hostname === "www.fs-erta.com") {
    return Response.redirect(`https://fs-erta.com${path}${url.search}`, 301);
  }

  // Canonical protocol: http -> https.
  if (url.hostname === "fs-erta.com" && forwardedProto === "http") {
    return Response.redirect(`https://fs-erta.com${path}${url.search}`, 301);
  }

  // Keep one canonical URL format: no trailing slash except the homepage.
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    const canonicalUrl = new URL(path + url.search, url);
    return Response.redirect(canonicalUrl.toString(), 301);
  }

  // Serve the SPA shell for known routes without turning the URL into a redirect.
  if (SPA_ROUTES.has(path)) {
    const indexResponse = await context.env.ASSETS.fetch(
      new Request(new URL("/", url).toString(), context.request)
    );
    const headers = new Headers(indexResponse.headers);
    headers.delete("location");

    return new Response(indexResponse.body, {
      status: 200,
      headers,
    });
  }

  // Unknown paths fall through to the static 404.html with a real 404 status.
  return context.next();
}
