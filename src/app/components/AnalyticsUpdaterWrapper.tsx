"use client";
import dynamic from "next/dynamic";
const AnalyticsUpdater = dynamic(() => import("./AnalyticsUpdater"), { ssr: false });
export default function AnalyticsUpdaterWrapper() {
  return <AnalyticsUpdater />;
}
