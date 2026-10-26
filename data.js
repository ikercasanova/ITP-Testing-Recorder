// Roster in running order. id must stay stable once results exist.
const ROSTER = [
  { id: "p01", name: "Roman Ahearn" },
  { id: "p02", name: "Luke Bigiarini" },
  { id: "p03", name: "Michael Deconinck" },
  { id: "p04", name: "Darius Farria" },
  { id: "p05", name: "Oscar Flores" },
  { id: "p06", name: "Bhanu Teja Gogireddy" },
  { id: "p07", name: "Joshua Goliath-Yarde" },
  { id: "p08", name: "Jonah Goodman" },
  { id: "p09", name: "Jon Gurcanlar" },
  { id: "p10", name: "Emre Gurcanlar" },
  { id: "p11", name: "AbdulRahman Haruna" },
  { id: "p12", name: "Tyson Hinckley" },
  { id: "p13", name: "Grady Houston" },
  { id: "p14", name: "Alexander Linza" },
  { id: "p15", name: "Brayden Mans" },
  { id: "p16", name: "Conner Martin" },
  { id: "p17", name: "Asher McConnell" },
  { id: "p18", name: "Elijah Mesidor" },
  { id: "p19", name: "Elija Moultrie" },
  { id: "p20", name: "Gavin Rios" },
  { id: "p21", name: "Saidjamolkhon Saidakbarov" },
  { id: "p22", name: "Lucas Vinson" },
  { id: "p23", name: "Jadon Yu" },
];

// Past testing results, keyed by player id, then measure.
// Measures: m5, m20, m30, yd40, t505, ift
// e.g. p01: { m30: [{ date: '2026-03-12', value: 4.21 }], ift: [{ date: '2026-03-14', value: 20.5 }] }
const PAST = {};
