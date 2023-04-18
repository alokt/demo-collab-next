"use client";

import getMarketplaceApps from "@/lib/getMarketplaceApps";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AppCard from "./AppCard";

export default function AppList() {
  const [data, setData] = useState<Item[] | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      // You can await here
      const allApps: Promise<AppData> = getMarketplaceApps(
        "DIS#COMM#834476259199156245"
      );
      const apps = await allApps;
      setData(apps.items);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) return <Text fontSize={"2xl"}>Loading...</Text>;

  const content = (
    <>
      <SimpleGrid minChildWidth="350px" spacing="10px">
        {data ? (
          Object.values(data).map((result) => {
            return <AppCard key={result.appId} item={result} />;
          })
        ) : (
          <h2>{` Not Found`}</h2>
        )}
      </SimpleGrid>
    </>
  );

  return content;
}
