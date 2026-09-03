\---

id: REQ-EARLY-BIRD-DISPLAY-001

status: osnutek

povezano\_z: US2-EARLY-BIRD-PRICING

early\_bird\_deadline\_utc: "2026-07-31T21:59:59Z"

early\_bird\_deadline\_timezone: "Europe/Ljubljana"

early\_bird\_deadline\_lokalno: "31.7.2026 23:59:59 (CEST, UTC+2)"

redna\_cena: 300.00

znizana\_cena: 240.00

valuta: EUR

promocijska\_koda\_potrebna: false

barva\_znizane\_cene\_hex: "#1E8E3E"       # PREDPOSTAVKA - potrdi UX

barva\_redne\_cene\_hex: "#757575"         # PREDPOSTAVKA - potrdi UX

slog\_redne\_cene: "precrtano besedilo (text-decoration: line-through)"

mobilni\_prelom\_min\_px: 320              # PREDPOSTAVKA - najmanjsa podprta sirina

mobilni\_prelom\_tablet\_px: 768           # PREDPOSTAVKA

\---



\## Namen



Uporabnik naj popust za zgodnjo prijavo prejme brez trenja - ne sme mu biti

treba iskati ali vnašati promocijske kode. Jasen vizualni prikaz (zelena

znižana cena, sivo prečrtana redna cena) mu takoj pove, da je popust že

upoštevan, kar zmanjšuje dvom in podporna vprašanja ("zakaj ne vidim

popusta?"). Obrazec mora delovati enako zanesljivo na telefonu kot na

namizniku, ker se udeleženci pogosto prijavljajo z mobilne naprave, npr. med

odmorom ali potjo.



\## Definicije



\- \*\*Zgodnja prijava\*\* - prijava, katere trenutek oddaje (glej `oddano\_ob` v

&#x20; US2) je manjši ali enak `early\_bird\_deadline\_utc`.

\- \*\*Rok za zgodnjo prijavo (`early\_bird\_deadline\_utc`)\*\* - trenutek

&#x20; `2026-07-31T21:59:59Z`, kar ustreza 31. 7. 2026, 23:59:59 po času

&#x20; Europe/Ljubljana (poletni čas, CEST).

\- \*\*Znižana cena (`znizana\_cena`)\*\* - kotizacija 240,00 EUR, ki velja za

&#x20; zgodnjo prijavo.

\- \*\*Redna cena (`redna\_cena`)\*\* - kotizacija 300,00 EUR, ki velja po izteku

&#x20; roka za zgodnjo prijavo.

\- \*\*Stran za prijavo\*\* - spletna stran/obrazec, kjer udeleženec vnese

&#x20; podatke in odda prijavo na konferenco.

\- \*\*Promocijska koda\*\* - ročno vnesen niz, ki bi sicer sprožil popust; v tej

&#x20; zahtevi je uporaba take kode izrecno izključena.

\- \*\*Odziven obrazec\*\* - obrazec, ki na širinah zaslona od

&#x20; `mobilni\_prelom\_min\_px` navzgor ostane v celoti berljiv in uporaben, brez

&#x20; vodoravnega drsenja in brez prekrivajočih se elementov.



\## Pravila



\- KO udeleženec odpre stran za prijavo in je trenutni strežniški čas manjši

&#x20; ali enak `early\_bird\_deadline\_utc`, MORA sistem prikazati `znizana\_cena`

&#x20; (240,00 EUR) v barvi `barva\_znizane\_cene\_hex` in poleg nje `redna\_cena`

&#x20; (300,00 EUR) prikazano prečrtano v barvi `barva\_redne\_cene\_hex`.

\- KO udeleženec odda prijavo in je čas oddaje manjši ali enak

&#x20; `early\_bird\_deadline\_utc`, MORA sistem samodejno obračunati `znizana\_cena`,

&#x20; ne da bi od udeleženca zahteval vnos promocijske kode ali kakršenkoli drug

&#x20; ročni vnos za uveljavitev popusta.

\- KO je trenutni strežniški čas večji od `early\_bird\_deadline\_utc`, MORA

&#x20; sistem na strani za prijavo prikazati izključno `redna\_cena`, brez

&#x20; prečrtane cene, brez omembe popusta in brez polja za promocijsko kodo.

\- ČE je bila prijava oddana pred `early\_bird\_deadline\_utc`, POTEM MORA

&#x20; sistem pri izračunu cene uporabiti čas oddaje prijave, ne trenutnega

&#x20; sistemskega časa ob poznejšem ogledu ali izpisu.

\- ČE širina zaslona naprave, na kateri udeleženec izpolnjuje obrazec, je

&#x20; večja ali enaka `mobilni\_prelom\_min\_px`, POTEM MORA sistem obrazec za

&#x20; prijavo prikazati v postavitvi, ki omogoča izpolnjevanje in oddajo brez

&#x20; vodoravnega drsenja.

\- MORA sistem na strani za prijavo v vsakem trenutku prikazovati natanko eno

&#x20; aktivno ceno kot ceno "za plačilo" (bodisi `znizana\_cena` bodisi

&#x20; `redna\_cena`), nikoli obeh hkrati kot enakovrednih možnosti.



\## Robni primeri



| Vhod | Pričakovani izhod |

|---|---|

| Ogled strani ob `2026-06-01T10:00:00Z` | Prikaz: 240,00 EUR zeleno, 300,00 EUR sivo prečrtano |

| Oddaja prijave ob `2026-07-31T21:59:59Z` (točno na roku) | Obračunana cena: 240,00 EUR (meja je vključena) |

| Oddaja prijave ob `2026-07-31T22:00:00Z` (1 sekundo po roku) | Obračunana cena: 300,00 EUR, brez prikaza prečrtane cene |

| Ogled strani ob `2026-09-03T09:00:00Z` (po roku) | Prikaz: samo 300,00 EUR, brez zelene/sive/prečrtane oznake |

| Uporabnik začne obrazec ob `2026-07-31T20:00:00Z`, odda ga ob `2026-08-01T06:00:00Z` | Obračunana cena: 300,00 EUR (odločilen je čas oddaje) |

| Širina zaslona 320px | Obrazec brez vodoravnega drsenja, vsa polja dosegljiva |

| Širina zaslona 1920px | Obrazec v polni namizni postavitvi |



\## Izven obsega



\- Sistem ne implementira dodatnih stopenj popusta (npr. "super early bird",

&#x20; popust glede na število oseb ali status "student").

\- Sistem ne omogoča ročnega vnosa, spreminjanja ali preklica popusta s strani

&#x20; udeleženca ali skrbnika prek te strani.

\- Sistem ne spreminja cene na že izdanih računih, tudi če se rok ali cenik

&#x20; naknadno spremeni.

\- Sistem ne prikazuje cen v valutah, drugačnih od EUR.

\- Sistem ne pošilja obvestil ali opozoril uporabniku pred iztekom roka (npr.

&#x20; odštevalnik, e-poštno opozorilo).



\## Odprta vprašanja



\- Ali sta `barva\_znizane\_cene\_hex` (#1E8E3E) in `barva\_redne\_cene\_hex`

&#x20; (#757575) usklajeni z obstoječim design systemom, ali ju mora potrditi UX?

\- Ali `mobilni\_prelom\_min\_px` (320px) zadostuje, ali obstaja seznam

&#x20; konkretnih naprav/ločljivosti, ki jih mora obrazec podpirati?

\- Kaj se zgodi, če se cena na strani spremeni med tem, ko uporabnik že

&#x20; izpolnjuje obrazec (npr. rok poteče med izpolnjevanjem) - ali je potrebno

&#x20; vidno opozorilo pred oddajo?

\- Ali se ta zahteva nanaša samo na prikaz (UI), medtem ko je sam izračun

&#x20; cene (`izracunajKotizacijo`) že pokrit v ločeni zahtevi US2 - ali morata

&#x20; biti dokumenta eksplicitno povezana v sistemu za sledenje zahtevam?

