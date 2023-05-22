import { api } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

// Recebe o Retorno do Oauth do Navegador
export async function GET(request : NextRequest) {
    const { searchParams } = new URL(request.url)

    const redirectTo = request.cookies.get('redirectTo')?.value;

    //Pega o parametro code da url
    const code = searchParams.get('code')

    //Buscar no Backend o token do usuario
    const registerResponse = await api.post('/register', {
        code,
    })

    const { token } = registerResponse.data;
    
    const redirectURL = redirectTo ?? new URL('/', request.url);
    
    //Tempo de Expiração Do cookie segundos, horas, dias, mes
    const cookieExpiresInSeconds = 60 * 60 * 24 * 30

    //Setando um Cookie no navegador para armazenar o Code
    return NextResponse.redirect(redirectURL, {
        headers: {
            'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds};` 
        }
    });
}