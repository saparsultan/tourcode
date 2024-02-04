import { Inter } from "next/font/google";
import Header from "@/components/Header";
import ModalsAll from "@/components/modals";
const inter = Inter({ subsets: ["latin"] });
import "@/app/globals.scss";
import "@/sass/page.scss";

const APP_NAME = "TourCode App";
const APP_DEFAULT_TITLE = "TourCode App";
const APP_TITLE_TEMPLATE = "%s - TourCode App";
const APP_DESCRIPTION = "Поск туркода";

export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "78",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      <ModalsAll />
      </body>
    </html>
  );
}
