# Kako oddate svoje delo

**5 minut, na koncu delavnice.** Ne po vsaki nalogi — datoteke zbirajte sproti, oddajte enkrat.

---

## Kam

Vsaka skupina ima **svojo mapo** in **svojo vejo**. Nikoli ne urejate datotek zunaj svoje mape — tako ne more priti do konfliktov.

```
oddaje/
├── skupina-1/
├── skupina-2/
└── skupina-3/   ← vaša mapa
```

| | Ime |
|---|---|
| Veja | `skupina-3` |
| Mapa | `oddaje/skupina-3/` |

> Številko skupine dobite od voditeljic.

---

## Kaj oddate

```
oddaje/skupina-3/
├── naloga-3-AGENTS.md        AGENTS.md, ki ga je napisal agent
├── naloga-3-cena.js          funkcija iz naloge 3
├── naloga-4-osnutek.md       osnutek, ki ga je napisal agent
├── naloga-4-USERSTORY.md     vaša popravljena verzija
├── naloga-4-AGENTS.md        vaš dopolnjeni AGENTS.md
├── naloga-4-cena.js          funkcija iz naloge 4
└── rezultati.md              rezultati 7 primerov, pred in po
```

Če česa nimate, ga preprosto izpustite. Nepopolna oddaja je boljša od nobene.

---
---

# POT A — brskalnik *(priporočeno)*

Nič ni treba namestiti. Potrebujete samo račun na GitHubu.

### 1. Naredite fork

Na strani repozitorija zgoraj desno **Fork → Create fork**.
Dobite svojo kopijo na `github.com/vase-ime/ots-prijava`.

### 2. Ustvarite vejo

V svojem forku kliknite spustni meni z napisom **`main`** (zgoraj levo nad seznamom datotek).
Vpišite **`skupina-3`** in kliknite **Create branch: skupina-3**.

> Preverite, da zdaj v tem meniju piše `skupina-3`, ne `main`.

### 3. Naložite datoteke

**Add file → Upload files**

Povlecite vse svoje datoteke naenkrat. Nato **v polje pod njimi** vpišite pot:

```
oddaje/skupina-3/
```

> GitHub mapo ustvari sam, ko v sporočilo poti napišete ime mape.
> Če polja za pot ne vidite, najprej naredite korak 4 in datoteke premaknite pozneje.

Spodaj vpišite sporočilo:

```
skupina 3: oddaja naloge 3 in 4
```

Kliknite **Commit changes**.

### 4. Odprite Pull Request

GitHub bo ponudil rumeno vrstico **Compare & pull request**. Kliknite jo.

Preverite, da gre:

```
iz:  vase-ime/ots-prijava : skupina-3
v:   ots/ots-prijava      : main
```

Kliknite **Create pull request**. **Končali ste.**

---
---

# POT B — ukazna vrstica

Za tiste, ki imajo `git` že nastavljen.

```bash
# 1. klonirajte (če še niste)
git clone https://github.com/<organizacija>/ots-prijava.git
cd ots-prijava

# 2. nova veja
git checkout -b skupina-3

# 3. mapa za vašo oddajo
mkdir -p oddaje/skupina-3

# 4. skopirajte svoje datoteke v to mapo
#    (iz mape, kamor ste jih shranili)

# 5. preverite, kaj boste oddali
git status

# 6. dodajte SAMO svojo mapo
git add oddaje/skupina-3

# 7. commit
git commit -m "skupina 3: oddaja naloge 3 in 4"

# 8. push
git push -u origin skupina-3
```

Nato v brskalniku odprite Pull Request iz veje `skupina-3` v `main`.

> **`git add oddaje/skupina-3`, nikoli `git add .`** — sicer poberete tudi tuje spremembe in nastane konflikt.

---
---

# POT C — rezervna

Če kaj ne deluje in vam zmanjkuje časa: **datoteke pošljite voditeljicama** in oddale jih bova midve.

Delavnica ni o gitu. Ne izgubljajte časa z nastavitvami.

---

## Pogoste zagate

| Težava | Rešitev |
|---|---|
| »Nimam pravic za push« | Naredili ste `git push` v izvirni repozitorij namesto v svoj fork. Uporabite pot A. |
| PR kaže na napačno vejo | V PR-ju kliknite **Edit** in popravite izvorno vejo na `skupina-3`. |
| Konflikt pri združevanju | Urejali ste datoteko zunaj `oddaje/skupina-3/`. Razveljavite to spremembo. |
| Ne najdem polja za pot | Naložite datoteke, kot so, in nam povejte — premaknemo jih midve. |
| Zaproša za geslo pri push | GitHub gesel ne sprejema več. Uporabite pot A. |

---

## Zakaj sploh oddajate

Isti razlog, kot ga obravnavamo ves dan: **zahteva, ki gre skozi pregled, ni isto kot zahteva, ki jo nekdo napiše in shrani zase.**

Vaš PR bo imel `diff`, zgodovino in nekoga, ki ga prebere. Točno to naredi zahtevo artefaktom in ne osnutkom.
