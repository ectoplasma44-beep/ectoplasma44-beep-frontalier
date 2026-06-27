import { describe, it, expect } from "vitest";
import { calculerTeletravail } from "./calc-teletravail";

describe("calculerTeletravail (seuil fiscal 40 %)", () => {
  it("230 j/an → 92 jours de télétravail max", () => {
    expect(calculerTeletravail(230).joursTeletravailMax).toBe(92);
  });

  it("220 j/an → 88 jours de télétravail max", () => {
    expect(calculerTeletravail(220).joursTeletravailMax).toBe(88);
  });

  it("200 j/an → 80 jours de télétravail max", () => {
    expect(calculerTeletravail(200).joursTeletravailMax).toBe(80);
  });

  it("arrondit à l'entier inférieur (floor)", () => {
    // 201 * 0.4 = 80.4 → 80
    expect(calculerTeletravail(201).joursTeletravailMax).toBe(80);
  });

  it("gère les entrées invalides / négatives sans planter", () => {
    expect(calculerTeletravail(-5).joursTeletravailMax).toBe(0);
    expect(calculerTeletravail(Number.NaN).joursTeletravailMax).toBe(0);
  });
});
