import { describe, it, expect } from "vitest";
import { calculerQuasiResident } from "./calc-quasi-resident";

describe("calculerQuasiResident (seuil 90 %)", () => {
  it("100 000 / 100 000 → éligible", () => {
    expect(
      calculerQuasiResident({
        revenusBrutsSuisse: 100_000,
        revenusBrutsMondiauxFoyer: 100_000,
      }).eligible
    ).toBe(true);
  });

  it("80 000 / 100 000 → non éligible", () => {
    expect(
      calculerQuasiResident({
        revenusBrutsSuisse: 80_000,
        revenusBrutsMondiauxFoyer: 100_000,
      }).eligible
    ).toBe(false);
  });

  it("couple 90 000 / 100 000 → éligible (exactement au seuil)", () => {
    expect(
      calculerQuasiResident({
        revenusBrutsSuisse: 90_000,
        revenusBrutsMondiauxFoyer: 100_000,
      }).eligible
    ).toBe(true);
  });

  it("dénominateur 0 ou invalide → non éligible, partSuisse null", () => {
    const r = calculerQuasiResident({
      revenusBrutsSuisse: 50_000,
      revenusBrutsMondiauxFoyer: 0,
    });
    expect(r.partSuisse).toBeNull();
    expect(r.eligible).toBe(false);
  });
});
