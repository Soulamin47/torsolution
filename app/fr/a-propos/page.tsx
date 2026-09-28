import InfoPage from "@/app/components/InfoPage";
import { infoMetadata } from "@/lib/info-pages";
export const metadata = infoMetadata("about", "fr");
export default function Page() { return <InfoPage kind="about" lang="fr" />; }
