import InfoPage from "@/app/components/InfoPage";
import { infoMetadata } from "@/lib/info-pages";
export const metadata = infoMetadata("method", "fr");
export default function Page() { return <InfoPage kind="method" lang="fr" />; }
