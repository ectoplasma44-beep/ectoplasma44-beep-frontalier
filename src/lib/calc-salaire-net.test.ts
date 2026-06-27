import { describe, it, expect } from "vitest";
import { calculerSalaireNet } from "./calc-salaire-net";

describe("calculerSalaireNet", () => {
  it("brut 8000 CHF/mois, taux 1.06, sans LPP/AANP", () => {
    const r = calculerSalaireNet({
      brut: 8000,
      periode: "mensuel",
      tauxChange: 1.06,
    });
    expect(r.deductions.avsAiApg).toBe(424); // 8000 × 5,3 %
    expect(r.deductions.ac).toBe(88); // 8000 × 1,1 % (sous plafond)
    expect(r.netSocialCHF).toBe(7488);
    expect(r.netEUR).toBe(7937.28);
  });

  it("plafond AC : brut annuel 200 000 → AC = 148 200 × 1,1 % = 1 630,20", () => {
    const r = calculerSalaireNet({
      brut: 200_000,
      periode: "annuel",
      tauxChange: 1.06,
    });
    expect(r.deductions.ac).toBe(1630.2); // pas 2 200
  });

  it("taux non renseigné → net CHF affiché, netEUR = null (pas de 0/NaN)", () => {
    const r = calculerSalaireNet({ brut: 8000, periode: "mensuel" });
    expect(r.netSocialCHF).toBe(7488);
    expect(r.netEUR).toBeNull();
  });

  it("LPP (montant) et AANP (taux) sont déduits quand renseignés", () => {
    const r = calculerSalaireNet({
      brut: 8000,
      periode: "mensuel",
      tauxChange: 1,
      lppMontant: 500,
      aanpTaux: 0.01, // 80
    });
    expect(r.deductions.lpp).toBe(500);
    expect(r.deductions.aanp).toBe(80);
    expect(r.netSocialCHF).toBe(8000 - 424 - 88 - 500 - 80);
  });
});
