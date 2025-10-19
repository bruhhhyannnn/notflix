import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, trackPageview } from "../../utils/googleAnalytics";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageview(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return null;
}
