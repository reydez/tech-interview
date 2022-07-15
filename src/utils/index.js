export const llueve = (preci, humi) =>
  preci > 60 || humi > 50 ? "LLUEVE" : "NO LLUEVE";
