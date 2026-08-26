/**
 * Izračun kotizacije za eno prijavo na konferenco OTS.
 *
 * STUB — implementacijo generira agent na podlagi zahteve v docs/.
 * Glej src/poziv-generiranje.md.
 *
 * Konvencije projekta so v AGENTS.md. Preberi jih pred implementacijo.
 */

/**
 * @typedef {Object} Prijava
 * @property {string}      oddano_ob        ISO 8601 z odmikom, npr. "2026-07-31T23:47:00+02:00"
 * @property {string|null} racun_izdan_ob   datum izdaje računa; nastane v računovodstvu
 * @property {string|null} placano_ob       datum plačila; NULL je veljavno stanje
 * @property {"redni"|"student"} status
 * @property {number}      stevilo_oseb
 */

/**
 * @typedef {Object} Rezultat
 * @property {number} cena
 * @property {string} valuta
 * @property {string} razlog   ena poved: zakaj ta znesek
 */

/**
 * @param {Prijava} prijava
 * @returns {Rezultat}
 */
export function izracunajKotizacijo(prijava) {
  throw new Error("Ni implementirano.");
}
