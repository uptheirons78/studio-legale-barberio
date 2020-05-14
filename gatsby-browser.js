// Import Custom Typefaces
import "typeface-poppins";
import "typeface-fira-sans";

// Import Bootstrap
import "./node_modules/bootstrap/dist/css/bootstrap.css";

//update pages on changes [to avoid browser cache issues]
export function onServiceWorkerUpdateReady() {
  window.location.reload(true);
}
