/**
 * Izracuna kotizacijo za prijavo na konferenco (US2 - Zgodnja prijava).
 *
 * Uporabljene vrednosti (glej AGENTS.md):
 *   - Redna kotizacija:        300,00 EUR (30000 centov) na osebo
 *   - Znizana (early-bird):    240,00 EUR (24000 centov) na osebo
 *   - Rok za zgodnjo prijavo:  do vkljucno 31. 7. 2026, 23:59:59 po casu
 *                              Europe/Ljubljana => "2026-07-31T21:59:59Z" (UTC, CEST)
 *   - Odlocilni trenutek:      prijava.oddano_ob (trenutek oddaje prijave),
 *                              ne trenutni sistemski cas ob klicu funkcije
 *                              (cena, dolocena ob prijavi, je nespremenljiva).
 *
 * Polji prijava.status in prijava.stevilo_oseb:
 *   - US2 ne definira razlike v ceni glede na status ("redni"/"student"),
 *     zato status NE vpliva na izracun cene. [PREDPOSTAVKA]
 *   - prijava.stevilo_oseb se uporabi kot mnozitelj cene na osebo, ker
 *     interface polje eksplicitno predvideva; ce je neveljavno/manjkajoce,
 *     se privzame 1 oseba. [PREDPOSTAVKA]
 *   - prijava.racun_izdan_ob in prijava.placano_ob ne vplivata na izracun
 *     cene (US2/AGENTS.md ne definirata takega vpliva); cena je vedno
 *     dolocena glede na prijava.oddano_ob. [PREDPOSTAVKA]
 */
function izracunajKotizacijo(prijava) {
  var EARLY_BIRD_DEADLINE = "2026-07-31T21:59:59Z"; // 31. 7. 2026, 23:59:59 Europe/Ljubljana (CEST)
  var REGULAR_FEE_CENTS = 30000;    // 300,00 EUR na osebo
  var EARLY_BIRD_FEE_CENTS = 24000; // 240,00 EUR na osebo
  var CURRENCY = "EUR";

  if (!prijava || typeof prijava.oddano_ob !== "string" || prijava.oddano_ob.trim() === "") {
    throw new Error("Polje 'oddano_ob' manjka ali ni niz - brez njega ni mogoce dolociti cene.");
  }

  var oddanoObCas = new Date(prijava.oddano_ob).getTime();
  if (Number.isNaN(oddanoObCas)) {
    throw new Error("Polje 'oddano_ob' ni veljaven ISO 8601 casovni zapis.");
  }

  var rokZgodnjePrijaveCas = new Date(EARLY_BIRD_DEADLINE).getTime();

  // Meja je vkljucena: prijava natanko ob roku se se steje za zgodnjo (AGENTS.md, tocka 1).
  var jeZgodnjaPrijava = oddanoObCas <= rokZgodnjePrijaveCas;

  var steviloOseb = Number.isInteger(prijava.stevilo_oseb) && prijava.stevilo_oseb > 0
    ? prijava.stevilo_oseb
    : 1;

  var kotizacijaNaOsebaCentov = jeZgodnjaPrijava ? EARLY_BIRD_FEE_CENTS : REGULAR_FEE_CENTS;
  var skupajCentov = kotizacijaNaOsebaCentov * steviloOseb;
  var cena = skupajCentov / 100;

  var razlog = jeZgodnjaPrijava
    ? "Prijava je bila oddana " + prijava.oddano_ob + ", kar je do vkljucno roka za zgodnjo prijavo (31. 7. 2026, 23:59:59 po srednjeevropskem poletnem casu), zato velja znizana kotizacija 240,00 EUR na osebo."
    : "Prijava je bila oddana " + prijava.oddano_ob + ", kar je po izteku roka za zgodnjo prijavo (31. 7. 2026, 23:59:59 po srednjeevropskem poletnem casu), zato velja redna kotizacija 300,00 EUR na osebo.";

  return {
    cena: cena,
    valuta: CURRENCY,
    razlog: razlog
  };
}