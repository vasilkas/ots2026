# AGENTS.md

Konvencije projekta `ots-prijava`. Velja za **vsako** spremembo in vsako sejo — za razvijalce in za agente.

> Namen te datoteke: kar velja za cel projekt, se zapiše **enkrat** in se v posameznih zahtevah ne ponavlja.

---

## Projekt

Prijavni sistem za konferenco OTS. Trenutni obseg: **izračun kotizacije za posamezno prijavo.**

**Izven obsega:** načini plačila, izdaja računa, vračila ob odpovedi, prijava na delavnice, avtentikacija.

---

## Podatkovni model

Zapis **prijave**:

| Polje | Pomen |
|---|---|
| `oddano_ob` | časovna značka ob uspešni strežniški validaciji obrazca |
| `racun_izdan_ob` | datum izdaje računa; nastane v računovodstvu, ne ob prijavi |
| `placano_ob` | datum prejema plačila; **lahko je prazen** |
| `status` | `redni` ali `student` — plačnik ni nujno udeleženec |
| `stevilo_oseb` | število oseb na eni prijavi |

---

## Konvencije

> ⚠ **TA RAZDELEK JE PRAZEN.**
>
> Na delavnici ga boste dvakrat izpolnili:
> - **blok 3** — izpolni ga agent, iz ene same zahteve
> - **blok 4** — izpolnite ga vi, na podlagi svojih odločitev
>
> Nato ju primerjamo.

### Čas in datumi

*(neizpolnjeno)*

### Denar

*(neizpolnjeno)*

### Jezik in poimenovanje

*(neizpolnjeno)*

---

## Kje so zahteve

`docs/`. Ena datoteka na funkcionalnost. Zahteva gre skozi pregled v PR-ju enako kot koda.

---

## Kaj tu **ne** sme biti

Poverilnice, ključi, osebni podatki. Ta datoteka je v repozitoriju in jo berejo tudi zunanje storitve.
