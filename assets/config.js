/* =====================================================================
   READINESS TEST SETTINGS. This is the only file you normally need to edit.
   ===================================================================== */
window.RWAI_CONFIG = {

  /* 1. LEAD COLLECTOR (where results are stored).
     Paste the HTTP URL from the Power Automate flow ("When an HTTP request
     is received"), which saves each result to the SharePoint Excel file.
     Leave it empty to test without saving anything. */
  leadsEndpoint: "https://defaultc6000866469442dca28bbd9015fc78.92.environment.api.powerplatform.com:443/powerautomate/automations/direct/cu/12/workflows/c20ce03b64384e6c9ac6617ab7b37599/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=pslaCieiPi2Ncz6fabEButsfI5K0g1_tO_jwlrooqNg",   // e.g. "https://xxxx.environment.api.powerplatform.com/powerautomate/automations/direct/workflows/..."

  /* 2. LINKS used on the results screen. */
  mainSite: "https://www.responsiblewithai.com",
  courseLinks: {
    Foundation: "https://www.responsiblewithai.com",
    Practitioner: "https://www.responsiblewithai.com",
    Reviewer: "https://www.responsiblewithai.com"
  },
  teamTrainingLink: "https://www.responsiblewithai.com"
};
