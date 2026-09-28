import InfoPage from "@/app/components/InfoPage";
import { infoMetadata } from "@/lib/info-pages";
export const metadata = infoMetadata("method", "en");
export default function Page() { return <InfoPage kind="method" lang="en" />; }
