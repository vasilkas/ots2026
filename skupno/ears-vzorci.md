# EARS — pet vzorcev

*Easy Approach to Requirements Syntax.* Nastalo v letalski industriji (Rolls-Royce, 2009). Ni programska oprema — deluje v katerikoli `.md` datoteki.

---

| Vzorec | Oblika | Kdaj |
|---|---|---|
| **Vseprisotni** | `MORA sistem <odziv>.` | vedno velja |
| **Dogodkovni** | `KO <sprožilec>, MORA sistem <odziv>.` | ob dogodku |
| **Stanjski** | `DOKLER <stanje>, MORA sistem <odziv>.` | med stanjem |
| **Neželeno vedenje** | `ČE <pogoj>, POTEM MORA sistem <odziv>.` | napake, izjeme |
| **Opcijski** | `KJER <funkcija obstaja>, MORA sistem <odziv>.` | samo ob funkciji |

Šesti, **kompleksni** vzorec, je kombinacija:
`DOKLER <stanje>, KO <sprožilec>, MORA sistem <odziv>.`

---

## Primera

```
KO je prijava oddana pred rokom,
   MORA sistem dodeliti znižano kotizacijo.

ČE validacija obrazca ne uspe,
   POTEM MORA sistem zavrniti oddajo brez zapisa časovne značke.
```

---

## Dve stvari, ki si ju velja zapomniti

**Četrti vzorec je tisti, ki ga ekipe najpogosteje pozabijo.** Neželeno vedenje — napake, izjeme, prazna polja — je natanko tam, kjer agent ugiba.

**Če povedi ne morete zapisati v nobenem od petih vzorcev, odločitev še ni dokončana.** EARS tu ni oblikovna zahteva, ampak detektor nedokončanih odločitev.

---

## Kaj EARS **ne** naredi

Ne nadomesti razdelka **Namen**. Pove *kdaj* mora sistem kaj narediti, ne pove pa *zakaj* je pravilo tako in kdaj se ga sme spremeniti.
