# Korak 4 — poziv: iz popravljene zahteve v kodo

Isti poziv kot v nalogi 3, korak 2 — samo z drugim vhodom.

| | Naloga 3 | Naloga 4 |
|---|---|---|
| Konvencije | `AGENTS.md`, ki ga je napisal **agent** | `AGENTS.md`, ki ste ga dopolnili **vi** |
| Zahteva | `US2.md` | vaša **popravljena** `USERSTORY.md` |
| Primeri | istih 7 | istih 7 |

---

```
Implementiraj funkcijo izracunajKotizacijo za spodnji projekt.

KONVENCIJE PROJEKTA

<<< SEM PRILEPI VAS AGENTS.md >>>

ZAHTEVA

<<< SEM PRILEPI VASO POPRAVLJENO USERSTORY.md >>>

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

Rezultate vpišite v [`obrazec.md`](obrazec.md).

> Če vaša zahteva zahteva podatek, ki ga vmesnik nima — to zapišite. Je pomembnejše od pravilnega rezultata.
