// app/api/brevo/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, firstName, lastName } = await req.json();
    console.log("Données reçues:", { email, firstName, lastName });

    if (!email || !firstName || !lastName) {
      return NextResponse.json({ message: "Champs manquants" }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error("Clé API manquante");
      return NextResponse.json({ message: "Clé API manquante" }, { status: 500 });
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: {
          PRENOM: firstName,
          NOM: lastName,
        },
        listIds: [3], // Mets ici le bon ID de ta liste
        updateEnabled: true,
      }),
    });

    const data = await response.json();
    console.log("Réponse Brevo:", data);

    if (response.ok) {
      return NextResponse.json({ message: "Contact créé avec succès!", data });
    } else {
      return NextResponse.json({ message: data.message || "Erreur Brevo", data }, { status: 500 });
    }
  } catch (error) {
    console.error("Erreur serveur:", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}