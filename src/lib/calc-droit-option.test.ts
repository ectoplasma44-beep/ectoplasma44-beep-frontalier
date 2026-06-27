import { describe, it, expect } from "vitest";
import { calculerDroitOption } from "./calc-droit-option";

describe("calculerDroitOption", () => {
  it("avec abattement injecté = 10 000 et revenus 50 000 → CMU = 3 200, LAMal = 4 200, min = CMU", () => {
    const r = calculerDroitOption({
      revenusN2: 50_000,
      primeMensuelleLAMal: 350,
      abattement: 10_000,
    });
    expect(r.cmu).toEqual({ disponible: true, cotisationAnnuelle: 3_200 });
    expect(r.lamal.coutAnnuel).toBe(4_200);
    expect(r.moinsCher).toBe("cmu");
  });

  it("abattement null (cas prod) → CMU indisponible + lien simulateur, jamais un nombre", () => {
    const r = calculerDroitOption({
      revenusN2: 50_000,
      primeMensuelleLAMal: 350,
      abattement: null,
    });
    expect(r.cmu.disponible).toBe(false);
    expect(r.cmu).not.toHaveProperty("cotisationAnnuelle");
    if (!r.cmu.disponible) {
      expect(r.cmu.simulateurUrl).toMatch(/urssaf/);
    }
    expect(r.moinsCher).toBeNull();
    // LAMal reste chiffrable à partir de la saisie utilisateur.
    expect(r.lamal.coutAnnuel).toBe(4_200);
  });

  it("ne calcule pas de cotisation négative (revenus < abattement)", () => {
    const r = calculerDroitOption({
      revenusN2: 5_000,
      primeMensuelleLAMal: 0,
      abattement: 10_000,
    });
    expect(r.cmu).toEqual({ disponible: true, cotisationAnnuelle: 0 });
  });
});
