# Sprejemni primeri

Sedem vhodov, ki jih preizkusimo na **vsaki** generirani funkciji. Isti primeri veljajo v nalogi 3 in nalogi 4 — zato je napredek merljiv.

> Vseh sedem se izvede **naenkrat** v `preizkus.html`. Ni jih treba vnašati ročno.
> Spodnji seznam je referenca, da veste, kaj kateri primer preverja.

---

| # | Kaj preverja | Vhod |
|---|---|---|
| 1 | osnovni primer | oddano 15. 7., plačano 20. 7., redni |
| 2 | **kateri časovni žig določa ceno** | oddano 31. 7. ob 23:47, račun 1. 8., plačano 4. 8. |
| 3 | vključenost roka | oddano 31. 7. ob 23:59:59 |
| 4 | prvi trenutek po roku | oddano 1. 8. ob 00:00:01 |
| 5 | **še neplačana prijava** | oddano 20. 7., `placano_ob` prazno |
| 6 | **po preklicu** | nova prijava oddana 3. 8. |
| 7 | **študent** | oddano 20. 7., status `student` |

---

## Podrobno

### 1 — osnovni primer
```
oddano_ob        2026-07-15T10:00:00+02:00
racun_izdan_ob   2026-07-16
placano_ob       2026-07-20
status           redni
```

### 2 — meja; račun in plačilo po roku
```
oddano_ob        2026-07-31T23:47:00+02:00
racun_izdan_ob   2026-08-01
placano_ob       2026-08-04
status           redni
```

### 3 — zadnja sekunda roka
```
oddano_ob        2026-07-31T23:59:59+02:00
```

### 4 — prva sekunda po roku
```
oddano_ob        2026-08-01T00:00:01+02:00
```

### 5 — še neplačana prijava
```
oddano_ob        2026-07-20T09:00:00+02:00
racun_izdan_ob   2026-07-22
placano_ob       (prazno)
```
*Neplačana prijava je povsem veljavno stanje. Če je funkcija ceno vezala na plačilo, se to tu pokaže.*

### 6 — po preklicu
```
Prva prijava oddana 2026-07-30, preklicana 2026-08-02.
Nova prijava:
oddano_ob        2026-08-03T09:00:00+02:00
```

### 7 — študent
```
oddano_ob        2026-07-20T14:00:00+02:00
status           student
```
*US2 o študentih ne pove ničesar. Kaj bo funkcija naredila s statusom, za katerega nima pravila?*

---

## Poleg preizkusa: poglejte v kodo

Poiščite vrstico, kjer je zapisan rok.

```js
new Date("2026-07-31")        // polnoč po UTC  →  2:00 po srednjeevropskem času
new Date("2026-07-31T23:59")  // 23:59 po lokalnem času brskalnika
```

Datumski zapis **brez ure** se v JavaScriptu razume kot UTC, zapis **z uro** pa kot lokalni čas. Če je model rok zapisal v prvi obliki, se meja tiho premakne za dve uri — in nikjer ni komentarja, da se je to zgodilo.

**Vprašanje:** kako je zapisan rok pri vas? Je predpostavka o časovnem pasu kje dokumentirana?
