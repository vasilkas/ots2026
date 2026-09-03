# Analiza uporabniške zgodbe: Samodejni popust za zgodnjo prijavo

> Analiza brez implementacije ali predloga rešitve — izključno odprta vprašanja.

## Uporabniška zgodba (za referenco)

**Kot** udeleženec konference **želim**, da se mi ob prijavi samodejno upošteva popust za zgodnjo prijavo, **da** mi ni treba vnašati kode.

**Sprejemni kriteriji:**

- Na strani za prijavo naj bo znižana cena prikazana zeleno, redna cena pa prečrtana sivo.
- Popust se upošteva samodejno, uporabniku ni treba vnašati promocijske kode.
- Ko rok poteče, se popust ne prikazuje več.
- Obrazec mora ostati odziven na mobilnih napravah.

---

## 1. Izrazi, ki v zahtevi niso definirani

- **"Zgodnja prijava"** – ni definirano, kaj konkretno pomeni (obdobje, dogodek, ki ga sproži).
- **"Rok"** (za popust) – omenjen kot obstoječ koncept, a ni definirano, kaj je to (datum, prag glede na število prijav, razprodan kontingent ipd.).
- **"Popust"** – ni jasno, ali gre za fiksen znesek ali odstotek, niti ali obstaja ena stopnja popusta ali več (npr. stopnjevane zgodnje prijave: super early bird, early bird ...).
- **"Redna cena"** – ni definirano, ali je to ena fiksna cena ali se lahko spreminja glede na tip vstopnice/udeleženca.
- **"Prijava"** – ni jasno, ali gre za en sam korak prijave ali večkoračni proces (npr. izbira vstopnice → podatki → plačilo), in v katerem koraku se cena prikaže.

## 2. Manjkajoče mejne vrednosti, pragovi in enote

- Datum/čas izteka popusta (dan, ura, časovni pas) – ni naveden.
- Odstotek ali znesek popusta ter valuta.
- Ali obstaja več časovnih pragov (npr. "super early bird", "early bird", "regular") ali samo en prag.
- Definicija "poteka roka" – ali se meri po strežniškem času, uporabnikovem lokalnem času ali času ob oddaji obrazca (npr. kaj se zgodi, če uporabnik začne prijavo pred rokom, konča pa po njem).
- Morebiten prag glede na število prijav (npr. "prvih 100 prijav") namesto/poleg datuma – ni omenjeno, ali obstaja.
- Mejne vrednosti za "odzivnost na mobilnih napravah" – ni definirano, katere širine zaslona/naprave morajo biti podprte (npr. konkretni breakpointi v px).
- Barvni odtenki za "zeleno" in "sivo" – ni določenih točnih barvnih kod (hex) niti zahtev glede kontrasta/dostopnosti (WCAG).

## 3. Predpostavke, ki bi jih bilo treba privzeti, če ne bo dopolnjeno

| # | Predpostavka | Kdo bi moral sprejeti odločitev |
|---|---|---|
| 1 | Popust je vezan izključno na datum/čas, ne na count ali drug pogoj | Produktni lastnik / naročnik zgodbe |
| 2 | Obstaja samo ena stopnja zgodnjega popusta (ne več zaporednih rokov) | Produktni lastnik |
| 3 | Rok se preverja glede na strežniški čas ob oddaji prijave, ne glede na lokalni čas uporabnika | Razvijalec/arhitekt v dogovoru s produktnim lastnikom |
| 4 | "Prikaz cene" pomeni na prvem koraku prijave (izbira vstopnice), ne šele na plačilnem koraku | UX / produktni lastnik |
| 5 | Gre za fiksen odstotek popusta, določen vnaprej v administraciji, ne za dinamično izračunan popust | Produktni lastnik |
| 6 | Konkretne barve (hex vrednosti) in stil prečrtane cene | UX / oblikovalec |
| 7 | "Odziven na mobilnih napravah" pomeni skladnost z obstoječim design systemom/breakpointi projekta, če ti že obstajajo | Razvijalec / UX v dogovoru z naročnikom |
| 8 | Uporabnik, ki začne prijavo pred rokom, a jo dokonča po njem, popusta ne obdrži | Produktni lastnik / naročnik zgodbe |
