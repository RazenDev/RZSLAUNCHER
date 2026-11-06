(function () {
  const config = window.RZS_CONFIG || {};
  const download = document.getElementById("downloadButton");
  const notice = document.getElementById("downloadNotice");
  const release = document.getElementById("releaseLink");
  const version = document.getElementById("versionText");
  document.getElementById("year").textContent = new Date().getFullYear();
  if (config.version) version.textContent = `Version ${config.version} · Android · APK`;
  if (config.releasesUrl && !config.releasesUrl.includes("YOUR-GITHUB-USERNAME")) {
    release.href = config.releasesUrl;
  } else {
    release.href = "#";
    release.addEventListener("click", e => { e.preventDefault(); alert("Set your GitHub username in config.js first."); });
  }
  if (config.downloadUrl && !config.downloadUrl.includes("YOUR-GITHUB-USERNAME")) {
    download.href = config.downloadUrl;
    download.setAttribute("target", "_blank");
    download.setAttribute("rel", "noopener");
    notice.textContent = "Download the official APK from the latest RZS release.";
  } else {
    download.href = "#";
    download.addEventListener("click", e => { e.preventDefault(); alert("Add your GitHub username and publish the APK release, then update config.js."); });
  }
})();
