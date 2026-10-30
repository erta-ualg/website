const SPA_ROUTES = new Set([
  "/team",
  "/partners",
  "/results",
  "/carro",
  "/contactos",
  "/join",
]);

const redirect = (location) =>
  new Response(null, {
    status: 301,
    headers: {
      Location: location,
    },
  });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";
    const forwardedProto = request.headers.get("x-forwarded-proto");

    // Canonical host: www -> apex.
    if (url.hostname === "www.fs-erta.com") {
      return redirect(`https://fs-erta.com${path}${url.search}`);
    }

    // Canonical protocol: http -> https.
    if (url.hostname === "fs-erta.com" && forwardedProto === "http") {
      return redirect(`https://fs-erta.com${path}${url.search}`);
    }

    // Keep one canonical URL format: no trailing slash except the homepage.
    if (url.pathname !== "/" && url.pathname.endsWith("/")) {
      return redirect(new URL(path + url.search, url).toString());
    }

    // Serve the SPA shell for known routes without turning the URL into a redirect.
    if (SPA_ROUTES.has(path)) {
      const indexResponse = await env.ASSETS.fetch(
        new Request(new URL("/", url).toString(), request)
      );
      const headers = new Headers(indexResponse.headers);
      headers.delete("location");

      return new Response(indexResponse.body, {
        status: 200,
        headers,
      });
    }

    // Assets and unknown paths are handled by the static asset server.
    // 404.html is returned with a real 404 status for missing files.
    return env.ASSETS.fetch(request);
  },
};
