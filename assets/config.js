/* =====================================================================
   READINESS TEST SETTINGS. This is the only file you normally need to edit.
   ===================================================================== */
window.RWAI_CONFIG = {

  /* 1. LEAD COLLECTOR (where results are stored).
     Paste the HTTP URL from the Power Automate flow ("When an HTTP request
     is received"), which saves each result to the SharePoint Excel file.
     Leave it empty to test without saving anything. */
  leadsEndpoint: "",   // e.g. "https://xxxx.environment.api.powerplatform.com/powerautomate/automations/direct/workflows/..."

  /* 2. LINKS used on the results screen. */
  mainSite: "https://www.responsiblewithai.com",
  courseLinks: {
    Foundation: "https://www.responsiblewithai.com",
    Practitioner: "https://www.responsiblewithai.com",
    Reviewer: "https://www.responsiblewithai.com"
  },
  teamTrainingLink: "https://www.responsiblewithai.com"
};
