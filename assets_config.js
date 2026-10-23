/* =====================================================================
   READINESS TEST SETTINGS. This is the only file you normally need to edit.
   ===================================================================== */
window.RWAI_CONFIG = {

  /* 1. GOOGLE FORM (where results are stored).
     Paste the form's response address and each field's entry number.
     See README.md, "Connect the Google Form". Leave action empty to test
     without saving anything. */
  googleForm: {
    action: "",   // e.g. "https://docs.google.com/forms/d/e/XXXXXXXX/formResponse"
    fields: {
      name: "",              // e.g. "entry.1234567890"
      email: "",
      field: "",
      role: "",
      orgSize: "",
      professionalBody: "",
      mostHelpful: "",
      score: "",
      band: "",
      dataLine: "",
      checking: "",
      judgement: "",
      disclosure: "",
      lowestArea: "",
      redFlags: "",
      answers: "",
      source: "",
      contactConsent: "",
      updatesConsent: ""
    }
  },

  /* 2. LINKS used on the results screen. */
  mainSite: "https://www.responsiblewithai.com",
  courseLinks: {
    Foundation: "https://www.responsiblewithai.com",
    Practitioner: "https://www.responsiblewithai.com",
    Reviewer: "https://www.responsiblewithai.com"
  },
  teamTrainingLink: "https://www.responsiblewithai.com"
};
