"use client";
import { useEffect } from "react";

interface AnalyticsUpdaterProps {
  updateUnique?: boolean;
}

export default function AnalyticsUpdater({ updateUnique = true }: AnalyticsUpdaterProps) {
  useEffect(() => {
    fetch("/api/website/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "updateTotal" }),
    });
    fetch("/api/website/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "updateDaily" }),
    });
    if (updateUnique) {
      fetch("https://api.ipify.org?format=json")
        .then(res => res.json())
        .then(data => {
          if (data && data.ip) {
            fetch("/api/website/analytics", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ type: "updateUnique", ip: data.ip }),
            });
          }
        });
    }
  }, [updateUnique]);
  return null;
}
