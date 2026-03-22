import { NextResponse } from "next/server";

type NotifyBody = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const adminChatId = process.env.ADMIN_CHAT_ID;

  if (!botToken || !adminChatId) {
    return NextResponse.json(
      { error: "Telegram configuration is missing." },
      { status: 500 },
    );
  }

  try {
    const body = (await request.json()) as NotifyBody;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Invalid submission payload." },
        { status: 400 },
      );
    }

    const text = [
      "New portfolio contact submission",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: adminChatId,
          text,
        }),
      },
    );

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text();
      return NextResponse.json(
        { error: "Failed to send Telegram notification.", details: errorText },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 },
    );
  }
}
