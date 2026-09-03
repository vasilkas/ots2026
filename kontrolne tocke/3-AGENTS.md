# AGENTS.md — Konvencije projekta

Ta dokument velja za **vsako nadaljnjo spremembo in vsako sejo agenta** na tem
projektu, ne le za US2. Agent mora ta pravila upoštevati privzeto, brez
dodatnega opozorila, razen če uporabnik izrecno zahteva odstopanje — v tem
primeru mora agent odstopanje izrecno omeniti v odgovoru.

Trditve, označene z **[PREDPOSTAVKA]**, ne izhajajo neposredno iz zahteve US2,
temveč jih je agent določil sam kot privzeto konvencijo. Če se izkažejo za
neustrezne, jih uporabnik popravi in ta datoteka se ustrezno posodobi.

---

## 1. Ravnanje s časom in datumi

- Vsi datumi in časi se v kodi, bazi in API-jih zapisujejo v formatu **ISO 8601**
  (`YYYY-MM-DDTHH:mm:ssZ`, npr. `2026-07-31T21:59:59Z`). [PREDPOSTAVKA]
- Interno (shranjevanje, primerjave, poslovna logika) se vsi časi hranijo in
  primerjajo v **UTC**. Za prikaz uporabniku se pretvorijo v časovni pas
  **Europe/Ljubljana**. [PREDPOSTAVKA]
- Rok za zgodnjo prijavo iz US2 je **31. 7. 2026**. Ker US2 ne navede ure,
  velja rok do **konca dneva 31. 7. 2026, 23:59:59 po času Europe/Ljubljana**
  (v UTC to pomeni `2026-07-31T21:59:59Z`, upoštevajoč CEST/poletni čas).
  [PREDPOSTAVKA]
- Odločilni trenutek za določitev cene je **strežniški čas ob uspešno
  zaključeni prijavi** (trenutek potrditve/zaključka registracije), ne čas,
  ko je uporabnik obrazec zgolj odprl ali začel izpolnjevati. [PREDPOSTAVKA]
- Primerjava roka se **vedno izvaja na strežniku**, nikoli samo v brskalniku
  uporabnika (uporabnikova lokalna ura ni zaupanja vredna). [PREDPOSTAVKA]
- Rok za zgodnjo prijavo se v kodi ne sme zapisati kot "magično" konstanto na
  več mestih. Definira se na enem mestu kot poimenovana konstanta, npr.
  `EARLY_BIRD_DEADLINE = "2026-07-31T21:59:59Z"`. [PREDPOSTAVKA]
- Vsaka funkcija, ki testira, ali je prijava "pravočasna", mora imeti
  eksplicitno mejo: prijava velja za zgodnjo, če je čas prijave
  `<= EARLY_BIRD_DEADLINE` (meja je vključena vanjo, ne izključena).
  [PREDPOSTAVKA]

## 2. Ravnanje z denarnimi zneski

- Uradna valuta projekta je **EUR** (ISO 4217). Valuta se v podatkih vedno
  hrani eksplicitno, tudi če je trenutno edina uporabljena — nikoli implicitno.
  [PREDPOSTAVKA]
- Denarni zneski se v kodi in bazi **nikoli ne hranijo kot `float`/`double`**
  zaradi napak zaokroževanja. Hranijo se kot **celo število v centih**
  (najmanjša enota valute) ali kot decimalni tip s fiksno natančnostjo.
  [PREDPOSTAVKA]
- Redna kotizacija je **300 EUR** (`30000` centov), znižana kotizacija za
  zgodnjo prijavo je **240 EUR** (`24000` centov) — vrednosti iz US2.
- Obe ceni se definirata kot poimenovani konstanti, ne kot "magični" števili
  v poslovni logiki, npr. `REGULAR_FEE_CENTS = 30000`,
  `EARLY_BIRD_FEE_CENTS = 24000`. [PREDPOSTAVKA]
- Po izteku roka (31. 7. 2026) sistem prikaže in obračuna **izključno redno
  ceno (300 EUR)** — brez izjem in brez ročnega popravka cene.
- Znižana cena mora biti razvidna na računu. Račun mora eksplicitno prikazati
  vsaj: redno ceno, znesek/odstotek popusta in končni znesek za plačilo,
  npr.:
  - Redna cena: 300,00 EUR
  - Popust za zgodnjo prijavo: −60,00 EUR
  - Za plačilo: 240,00 EUR
  (natančna postavitev vrstic na računu je [PREDPOSTAVKA], zahteva iz US2 je
  le, da je znižana cena razvidna). [PREDPOSTAVKA za obliko prikaza]
- Cena, obračunana ob prijavi, se **shrani skupaj z zapisom prijave/računa**
  in se pozneje ne spreminja, tudi če se rok ali cenik naknadno spremeni
  (izdani računi so nespremenljivi). [PREDPOSTAVKA]
- Vsak izračun cene mora biti pokrit z avtomatiziranim testom, ki preverja
  točne vrednosti (240,00 EUR in 300,00 EUR), ne le "manjše/večje od".
  [PREDPOSTAVKA]

## 3. Poimenovanje polj in funkcij

- V API-jih, JSON strukturah in aplikacijski kodi (JS/TS) se uporablja
  **camelCase** (npr. `registrationDate`, `earlyBirdDeadline`). V bazi
  podatkov (SQL) se uporablja **snake_case** (npr. `registration_date`,
  `early_bird_deadline`). [PREDPOSTAVKA]
- Datumska/časovna polja imajo pripono `At` oz. `_at`
  (`registeredAt` / `registered_at`, `deadlineAt` / `deadline_at`).
  [PREDPOSTAVKA]
- Denarna polja imajo pripono, ki nedvoumno pove enoto, npr.
  `priceCents` / `price_cents` (ne `price`, ki je dvoumno glede enote in
  valute). Če se zraven hrani tudi valuta, je ločeno polje `currency`
  (npr. `"EUR"`). [PREDPOSTAVKA]
- Logična (boolean) polja imajo predpono `is`/`has`, npr. `isEarlyBird`,
  `hasDiscount`. [PREDPOSTAVKA]
- Ker US2 izrecno zahteva, da uporabniku **ni treba vnašati kode**, se v
  poimenovanju ne uporablja izraz `promoCode`/`promo_code` ali podobno za to
  funkcionalnost — popust ni vezan na kodo, temveč na datum. Uporablja se
  izraz `earlyBird...` (npr. `isEarlyBirdEligible`,
  `applyEarlyBirdDiscount()`, `earlyBirdDeadline`).
- Funkcije, ki odločajo o upravičenosti do popusta ali ga izračunajo, imajo
  glagolska imena, ki jasno povedo namen, npr.:
  - `isEarlyBirdEligible(registrationTimestamp): boolean`
  - `calculateRegistrationFee(registrationTimestamp): { amountCents, isDiscounted }`
  - `applyEarlyBirdDiscount(...)`
  [PREDPOSTAVKA glede točnih imen, princip glagol+namen izhaja iz splošne
  konvencije]
- Prepovedane so kratice in nejasna imena (npr. `flg`, `amt`, `dt`) — imena
  polj in funkcij morajo biti polno izpisana in samoopisna. [PREDPOSTAVKA]

## 4. Pravila, ki jih mora agent upoštevati pri implementaciji

1. Preverjanje roka in izračun cene se **vedno izvede na strežniški strani**;
   frontend prikazuje ceno le informativno in ne sme biti edini vir resnice.
   [PREDPOSTAVKA]
2. Noben datum ali denarni znesek se ne sme zapisati kot dobesedna vrednost
   ("magic number/string") razpršeno po kodi — vse gre skozi poimenovane
   konstante iz enega konfiguracijskega mesta (glej razdelka 1 in 2).
   [PREDPOSTAVKA]
3. Vsaka sprememba, ki vpliva na ceno ali rok zgodnje prijave, mora vključevati
   avtomatizirane teste za vsaj tri robne primere: (a) prijava pred rokom →
   240 EUR, (b) prijava natanko ob roku (31. 7. 2026, 23:59:59
   Europe/Ljubljana) → 240 EUR, (c) prijava po roku → 300 EUR.
   [PREDPOSTAVKA]
4. Agent pred implementacijo poišče obstoječe definicije cen/rokov v
   projektu in jih ponovno uporabi oz. razširi — ne ustvarja vzporednih,
   podvojenih definicij iste konstante. [PREDPOSTAVKA]
5. Vsaka sprememba sheme podatkovne baze (npr. dodajanje polj za popust,
   ceno, datum) mora biti izvedena kot migracija, ne kot ročna sprememba.
   [PREDPOSTAVKA]
6. Besedila v uporabniškem vmesniku in na računu, vezana na denar, uporabljajo
   format `X,XX EUR` (vejica kot decimalno ločilo, oznaka valute za zneskom).
   [PREDPOSTAVKA]
7. Agent v nobenem primeru ne sme uvesti vnosnega polja za promocijsko kodo
   ali podoben ročni vnos za uveljavitev tega popusta — to je v nasprotju z
   US2 ("da mi ni treba vnašati kode").
8. Ob vsaki spremembi, ki se dotika cene, roka ali računa, agent v svojem
   odgovoru uporabniku izrecno navede, katere vrednosti so bile uporabljene
   (cena, rok, časovni pas), da je sprememba preverljiva brez branja kode.
   [PREDPOSTAVKA]
9. Če katerakoli od zgornjih konvencij trči z obstoječo kodo v projektu
   (npr. drugačna konvencija poimenovanja je že uveljavljena), agent o tem
   izrecno opozori uporabnika, namesto da tiho uvede mešanico konvencij.
   [PREDPOSTAVKA]
