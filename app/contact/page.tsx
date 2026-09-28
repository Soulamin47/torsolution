import InfoPage from "@/app/components/InfoPage";
import { infoMetadata } from "@/lib/info-pages";
export const metadata = infoMetadata("contact", "en");
export default function Page() { return <InfoPage kind="contact" lang="en" />; }
