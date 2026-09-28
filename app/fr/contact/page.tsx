import InfoPage from "@/app/components/InfoPage";
import { infoMetadata } from "@/lib/info-pages";
export const metadata = infoMetadata("contact", "fr");
export default function Page() { return <InfoPage kind="contact" lang="fr" />; }
