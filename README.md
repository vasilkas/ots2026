# ots-prijava

Delovni repozitorij za delavnico **USERSTORY.md — ena zahteva, dva bralca** (OTS 2026).

Projekt je ozek izsek prijavnega sistema za konferenco OTS: **izračun kotizacije ob prijavi.** Namenoma majhen — dovolj, da ga agent implementira v eni potezi, in dovolj, da se v njem skrijejo vse dvoumnosti, ki jih obravnavamo na delavnici.

---

## Kje začeti

Vsaka naloga ima svojo mapo. **Odprite mapo naloge, ki jo trenutno delate, in preberite `NAVODILA.md`.**

| Mapa | Naloga | Čas | AI |
|---|---|---|---|
| [`naloga-1/`](naloga-1/) | Analiza zahtev — kaj mora razjasniti razvijalec | 20 min | ✗ brez |
| [`naloga-2/`](naloga-2/) | Lov na dvoumnosti | 7 min | ✓ samo AI |
| [`naloga-3/`](naloga-3/) | Iz zahteve v konvencije, iz konvencij v kodo | 12 min | ✓ samo AI |
| [`naloga-4/`](naloga-4/) | Zahteva za dvojno občinstvo | 20 min | agent piše, vi presojate |

---

## Struktura

```
ots-prijava/
├── README.md                      ta datoteka
├── AGENTS.md                      konvencije projekta — razdelek je PRAZEN
│
├── skupno/                        gradiva, ki jih uporabljamo skozi vso delavnico
│   ├── US1.md                     slabo definirana/strukturirana zahteva
│   ├── US2.md                     delno strukturirana zahteva
│   ├── dejstva-organizatorja.md   kar vam je naročnik povedal ustno
│   ├── sprejemni-primeri.md       7 primerov — merilo za vse naloge
│   ├── ears-vzorci.md             pet vzorcev EARS
│   ├── preizkus.html              preizkusno okolje generiranih skript
│   └── cena.js                    vmesnik funkcije, ki jo generira agent
│
├── naloga-1/   NAVODILA.md · obrazec.md
├── naloga-2/   NAVODILA.md · poziv.md · obrazec.md
├── naloga-3/   NAVODILA.md · poziv-1-agents.md · poziv-2-koda.md · obrazec.md
└── naloga-4/   NAVODILA.md · USERSTORY.md · poziv-1-osnutek.md · poziv-2-koda.md · obrazec.md
```

---


## Kaj boste danes spremenili v tem repozitoriju

| # | Sprememba | Naloga |
|---|---|---|
| 1 | ugotovitve o vrzelih v `skupno/US1.md` | 1 in 2 |
| 2 | `AGENTS.md`, ki ga iz `US2.md` napiše **agent** | 3 |
| 3 | `naloga-4/USERSTORY.md` in `AGENTS.md`, ki ju napišete **vi** | 4 |

Na koncu primerjamo s sedmimi istimi primeri.

---

## Namestitev

Nič ni treba namestiti. Vse poteka v klepetalnem oknu in v brskalniku. \
`skupno/preizkus.html` odprete z dvoklikom.

---

## Področje uporabe

**V obsegu:** izračun kotizacije za eno prijavo. \
**Izven obsega:** načini plačila, izdaja računa, vračila ob odpovedi, prijava na delavnice, avtentikacija.

---

## Opomba o podatkih

Vsi podatki so **učni primer**. Zneski, datumi in pravila so postavljeni za potrebe delavnice in ne predstavljajo dejanskih pogojev prijave na konferenco OTS.
