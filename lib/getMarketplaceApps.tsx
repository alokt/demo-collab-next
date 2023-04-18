"use client";

export default async function getMarketplaceApps(communityPk: string) {
  const authToken = process.env.NEXT_PUBLIC_AE_TOKEN; // Read auth token from public environment variable
  if (!authToken)
    throw new Error(
      "No auth token found. Please set NEXT_PUBLIC_AE_TOKEN in .env.local"
    );
  console.log("getMarketplaceApps");
  const encoded = encodeURIComponent("DIS#COMM#834476259199156245");
  const url = "https://7ecda4270c83.ngrok.app/apps";
  // const url = `https://api-qa.collab.land/marketplace/communities/${encoded}/apps`;
  const response = await fetch(url, {
    headers: {
      Authorization: authToken, // Use auth token in header
    },
  });
  return response.json();
}
