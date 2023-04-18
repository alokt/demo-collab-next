type Thumbnail = {
  label: string;
  src: string;
  sizes: string;
};

type Icon = {
  label: string;
  src: string;
  sizes: string;
};

type Version = {
  name: string;
};

type Item = {
  appId: string;
  clientAppId: string;
  appType: string;
  name: string;
  supportedEnvs: string[];
  shortName: string;
  keywords: string[];
  category: string;
  shortDescription: string;
  description: string;
  thumbnails: Thumbnail[];
  icons: Icon[];
  platforms: string[];
  type: string;
  price: number;
  developer: string;
  version: Version;
  releasedDate: number;
  tags: string[];
  metadata: Record<string, any>;
  isInstalled: boolean;
  isPurchased: boolean;
  downloads: number;
};

type AppData = {
  items: Item[];
};
