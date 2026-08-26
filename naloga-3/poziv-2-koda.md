# Korak 2 — poziv: iz konvencij v kodo

Uporabite **dobesedno**. Potrebujete `AGENTS.md` iz koraka 1.

```
Implementiraj funkcijo izracunajKotizacijo za spodnji projekt.

KONVENCIJE PROJEKTA

<<< SEM PRILEPI AGENTS.md IZ KORAKA 1 >>>

ZAHTEVA

## Uporabniška zgodba

Kot udeleženec konference se želim prijaviti po nižji ceni pred iztekom roka za zgodnjo prijavo, da privarčujem pri kotizaciji.

## Sprejemni kriteriji

- Udeleženec, ki se prijavi do 31. 7. 2026, plača znižano kotizacijo 240 € namesto redne 300 €.
- Po tem datumu sistem prikaže redno ceno.
- Znižana cena mora biti razvidna na računu.

VMESNIK

function izracunajKotizacijo(prijava) -> { cena, valuta, razlog }

  prijava.oddano_ob        niz, npr. "2026-07-31T23:47:00+02:00"
  prijava.racun_izdan_ob   niz ali null
  prijava.placano_ob       niz ali null
  prijava.status           "redni" ali "student"
  prijava.stevilo_oseb     stevilo

  razlog = ena poved: zakaj ta znesek

PRAVILA IZDELAVE

- Implementiraj natanko to, kar pise v zahtevi in konvencijah.
- Ne postavljaj dodatnih vprasanj - vrni koncno kodo.
- Samo ta funkcija. Brez vmesnika, brez uvozov, brez odvisnosti.
- Vrni en sam blok kode, ki ga je mogoce pognati taksnega, kot je.
```

---

## Opomba

Vrstica *»Ne postavljaj dodatnih vprašanj«* je tam namenoma. Simulira agentni proces, kjer vprašanja modela nihče ne prebere, ker gre izhod naravnost v naslednji korak.

O tem se bomo pogovorili pri razpravi.
