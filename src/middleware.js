
import { NextResponse } from "next/server";
import { createClient } from "./app/utils/supabase/middleware";



export async function middleware(request) {
  const { supabase, response } = createClient(request);

  // IMPORTANTE: getUser() es más seguro que getSession() en el middleware para Vercel
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Si no hay usuario y trata de entrar al dashboard, redirigir
  if (!user && request.nextUrl.pathname.startsWith("/dashboard")) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: ["/dashboard/:path*"],
};