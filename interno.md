# Kontrolni seznam za voditelja

**Ni za udeležence.** Pred objavo repozitorija to datoteko odstraniva.

---

## Ključ — pričakovani rezultati

Ob predpostavki, da je merodajen dogodek **oddaja obrazca** *(potrditi pri organizatorju!)*:

| # | Pričakovano | Zakaj |
|---|---|---|
| 1 | 240 € | oddano znotraj roka |
| 2 | **240 €** | datum računa in plačila ne vplivata |
| 3 | 240 € | rok vključen do 23:59:59 |
| 4 | 300 € | po roku |
| 5 | 240 € | plačilo ni pogoj za ceno |
| 6 | 300 € | velja značka nove prijave |
| 7 | **0 €** | študentje se udeležijo brezplačno; plača fakulteta |

**Kaj pričakovati:** primeri 1, 3, 4 → konvergenca (v zahtevi piše). Primeri 2, 5, 6, 7 → razhajanje (v zahtevi ne piše).

### Primer 7 je posebej močan

US2 o študentih **ne pove ničesar**, zapis pa ima polje `status`. Pravilen odgovor je **0 €**, do njega pa iz zahteve ni mogoče priti. Pričakujte tri vzorce:

- status povsem prezrt → 240 €
- izmišljena študentska cena → 120 €, 150 €, 50 %
- redkeje: 0 €, po naključju

Nobena skupina ni imela podatka. Vse tri odgovore je model podal enako prepričljivo.

### Študentska kvota — dvoumnost, ki je test ne zajame

Študentskih mest je omejeno število. To pravilo **ni izrazljivo** v vmesniku `izracunajKotizacijo(prijava)`, ker funkcija ne ve, koliko študentov je že prijavljenih.

To je druga vrsta vrzeli od vseh dosedanjih: ne manjka **vrednost**, manjka **vhodni podatek**.

Uporabite jo v nalogi 4. Ko skupine z listka dejstev izvedo za kvoto, morajo odločiti:
- kaj se zgodi z 51. študentom — polna cena, čakalna vrsta, zavrnitev?
- ali brezplačna udeležba sploh pozna rok zgodnje prijave?
- kdo je plačnik, če ni udeleženec?

In predvsem: **vmesnik funkcije tega ne prenese.** Skupina, ki to opazi in zapiše med odprta vprašanja ali predlaga spremembo vmesnika, je naredila najboljše delo v sobi. To povejte na glas.

---

## Časovnica

| Naloga | Čas | AI |
|---|---|---|
| 1 — analiza | 20 min | ✗ |
| 2 — dvoumnosti | 7 min | ✓ |
| 3 — generiranje (3 koraki) | 12 min | ✓ |
| razprava po nalogi 3 | 11 min | — |
| 4 — dvojno občinstvo | 20 min | ✓ agent piše, skupine popravljajo |

**Poanta razprave po nalogi 3:** za vsak napačen primer skupine poiščejo vrstico v svoji `AGENTS.md`, ki ga je povzročila.

> »Vsaka od teh funkcij deluje. Nobena ni pokvarjena. Vse so si izmislile drugo pravilo — in vse so ga zapisale v datoteko, ki je nihče ni prebral.«

---

## Naloga 4 — sidranje je glavno tveganje

Osnutek, ki ga vrne agent, bo videti urejen. Skupine bodo v skušnjavi popravljati sloge namesto odločitev.

**Protiukrep je korak 2: obvezna revizija, kjer nobena vrstica ne sme ostati neoznačena** (✓ drži / ✗ izmišljeno / + manjka). Če opazite skupino, ki je preskočila naravnost na popravke, jo ustavite in vrnite na označevanje.

Med delom hodite naokoli in postavljajte eno vprašanje:

> »Preberite razdelek Namen, ki ga je napisal agent. Od kod ve, da je to razlog?«

Agent razloga ni mogel poznati — v `US1` ga ni. Karkoli je napisal, si je izmislil, in prav to je najbolj prepričljiv, najmanj opazen del osnutka.

### Meritev, ki jo projicirate na koncu

| | Naloga 3 | Naloga 4 |
|---|---|---|
| samo agent | ____ / 7 | |
| agent + človeška presoja | | ____ / 7 |

Razlika je človeški faktor, izražen s številko. To je zaključek celotne delavnice.

### Kaj naj skupine odkrijejo pri zadnjem vprašanju

Študentska kvota **ni izrazljiva** v vmesniku `izracunajKotizacijo(prijava)` — funkcija ne ve, koliko študentov je že prijavljenih. Ne manjka vrednost, manjka vhodni podatek.

Skupina, ki to opazi in zapiše med odprta vprašanja ali predlaga spremembo vmesnika, je naredila najboljše delo v sobi. Povejte to na glas.

---

## Blokirno

- [ ] **Referenčne vrednosti potrjene pri organizatorju OTS.** Predvsem primer 2. Če odgovor ni »oddaja obrazca«, popravite ključ zgoraj.
- [ ] **Oba poziva preizkušena: 3 modeli × 3 zagoni.**
- [ ] **`skupno/preizkus.html` odprt v Chromu, Firefoxu in Safariju.** Gumb »Vstavi vzorčno funkcijo« mora izpisati tabelo.
- [ ] **Tri najbolj različne funkcije shranjene na USB.**
- [ ] **Posnetki zaslona treh različnih rezultatov pri primeru 2.**

## Merila iz testiranja

| Kaj | Prag |
|---|---|
| Korak 1 (AGENTS.md) | pod 2 min |
| Korak 2 (funkcija) | pod 2 min |
| Razhajanje med zagoni | vsaj 2 primera |

---

## Kaj se v generirani AGENTS.md skoraj zagotovo pojavi

- **časovni pas** — določil ga bo, čeprav ga v US2 ni; pogosto UTC
- **merodajni časovni žig** — izbral bo enega od treh, brez utemeljitve
- **DDV** — pogosto zapiše, da so cene z DDV
- **študentska cena** — izmislil bo znesek
- **zaokroževanje, valuta, format datumov** — vse izmišljeno

Kar je **spregledal**, je enako zanimivo: preklic, prazen `placano_ob`, skupinske prijave.

## Past, ki jo velja pokazati

Implementacija, vezana na plačilo, pri praznem `placano_ob` **ne javi napake**:

```js
new Date(null)   // 1. januar 1970 — torej "pred rokom"
```

Tiho vrne znižano ceno. Napačen rezultat brez opozorila. Če se to pri kateri skupini zgodi, je to najmočnejši trenutek delavnice.

---

## Tiskanje

Po skupinah:

| Naloga | Natisniti |
|---|---|
| 1 | `naloga-1/NAVODILA.md`, `naloga-1/obrazec.md`, `skupno/US1.md`, `skupno/US2.md` |
| 2 | `naloga-2/NAVODILA.md`, `naloga-2/poziv.md`, `naloga-2/obrazec.md` |
| 3 | `naloga-3/*` (4 datoteke), `skupno/sprejemni-primeri.md` |
| 4 | `naloga-4/*` (5 datotek), `skupno/dejstva-organizatorja.md`, `skupno/ears-vzorci.md` |

> `skupno/dejstva-organizatorja.md` razdelite **šele pri nalogi 4**. Če ga dobijo prej, imajo odgovore za nalogo 1.

## Med delavnico

- [ ] Prazna tabela na tabli: skupine v vrsticah, primeri 1–7 v stolpcih
- [ ] Razdelek »Konvencije« v `AGENTS.md` ostane prazen do naloge 3
- [ ] `naloga-4/USERSTORY.md` ostane prazna do naloge 4
- [ ] Ključ se razkrije **šele po** poročanju skupin

## Rezervni scenariji

| Odpove | Naredite |
|---|---|
| omrežje v celoti | posnetki zaslona treh rezultatov, razprava enaka |
| skupina nima funkcije po 4 min | dobi eno z USB-ja |
| vse skupine dobijo isto | preklop na zgodbo »soglasje ni pravilnost« |
| zmanjkuje časa | izpade pregled kode; primerjava v nalogi 4 na 3 minute |
