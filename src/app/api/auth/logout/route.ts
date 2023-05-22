import { NextRequest, NextResponse } from "next/server";

// Recebe o Retorno do Oauth do Navegador
export async function GET(request : NextRequest) {
   
    const redirectURL = new URL('/', request.url)

    //Setando um Cookie no navegador para armazenar o Code
    return NextResponse.redirect(redirectURL, {
        headers: {
            'Set-Cookie': `token=; Path=/; max-age=0;` 
        }
    });
}