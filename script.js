// Weeks
const nflSchedule = {
  1: [
    { day: "Thursday", h0meTeam: "KC", awayTeam: "BAL" },
    { day: "Friday", h0meTeam: "PHI", awayTeam: "GB" },
    { day: "Sunday", h0meTeam: "PIT", awayTeam: "ATL" },
    { day: "Sunday", h0meTeam: "BUF", awayTeam: "ARI" },
    { day: "Sunday", h0meTeam: "CHI", awayTeam: "TEN" },
    { day: "Sunday", h0meTeam: "NE", awayTeam: "CIN" },
    { day: "Sunday", h0meTeam: "IND", awayTeam: "HOU" },
    { day: "Sunday", h0meTeam: "MIA", awayTeam: "JAX" },
    { day: "Sunday", h0meTeam: "NO", awayTeam: "CAR" },
    { day: "Sunday", h0meTeam: "MIN", awayTeam: "NYG" },
    { day: "Sunday", h0meTeam: "LAC", awayTeam: "LV" },
    { day: "Sunday", h0meTeam: "SEA", awayTeam: "DEN" },
    { day: "Sunday", h0meTeam: "DAL", awayTeam: "CLE" },
    { day: "Sunday", h0meTeam: "TB", awayTeam: "WAS" },
    { day: "Sunday", h0meTeam: "DET", awayTeam: "LAR" },
    { day: "Monday", h0meTeam: "SF", awayTeam: "NYJ" }
  ],
  2: [
    { day: "Thursday", h0meTeam: "MIA", awayTeam: "BUF" },
    { day: "Sunday", h0meTeam: "DAL", awayTeam: "NO" },
    { day: "Sunday", h0meTeam: "DET", awayTeam: "TB" },
    { day: "Sunday", h0meTeam: "GB", awayTeam: "IND" },
    { day: "Sunday", h0meTeam: "TEN", awayTeam: "NYJ" },
    { day: "Sunday", h0meTeam: "MIN", awayTeam: "SF" },
    { day: "Sunday", h0meTeam: "NE", awayTeam: "SEA" },
    { day: "Sunday", h0meTeam: "WAS", awayTeam: "NYG" },
    { day: "Sunday", h0meTeam: "CAR", awayTeam: "LAC" },
    { day: "Sunday", h0meTeam: "JAX", awayTeam: "CLE" },
    { day: "Sunday", h0meTeam: "BAL", awayTeam: "LV" },
    { day: "Sunday", h0meTeam: "ARI", awayTeam: "LAR" },
    { day: "Sunday", h0meTeam: "DEN", awayTeam: "PIT" },
    { day: "Sunday", h0meTeam: "KC", awayTeam: "CIN" },
    { day: "Sunday", h0meTeam: "HOU", awayTeam: "CHI" },
    { day: "Monday", h0meTeam: "PHI", awayTeam: "ATL" }
  ],
  3: [
    { day: "Thursday", h0meTeam: "NYJ", awayTeam: "NE" },
    { day: "Sunday", h0meTeam: "CAR", awayTeam: "LV" },
    { day: "Sunday", h0meTeam: "MIA", awayTeam: "SEA" },
    { day: "Sunday", h0meTeam: "BAL", awayTeam: "DAL" },
    { day: "Sunday", h0meTeam: "SF", awayTeam: "LAR" },
    { day: "Sunday", h0meTeam: "DET", awayTeam: "ARI" },
    { day: "Sunday", h0meTeam: "KC", awayTeam: "ATL" },
    { day: "Sunday", h0meTeam: "NYG", awayTeam: "CLE" },
    { day: "Sunday", h0meTeam: "GB", awayTeam: "TEN" },
    { day: "Sunday", h0meTeam: "CHI", awayTeam: "IND" },
    { day: "Sunday", h0meTeam: "HOU", awayTeam: "MIN" },
    { day: "Sunday", h0meTeam: "PHI", awayTeam: "NO" },
    { day: "Sunday", h0meTeam: "LAC", awayTeam: "PIT" },
    { day: "Sunday", h0meTeam: "DEN", awayTeam: "TB" },
    { day: "Monday", h0meTeam: "JAX", awayTeam: "BUF" },
    { day: "Monday", h0meTeam: "WAS", awayTeam: "CIN" }
  ],
  4: [
    { day: "Thursday", h0meTeam: "NYG", awayTeam: "DAL", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", h0meTeam: "ATL", awayTeam: "NO", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "CHI", awayTeam: "LAC", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "GB", awayTeam: "MIN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "IND", awayTeam: "PIT", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "NYJ", awayTeam: "DEN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "TB", awayTeam: "PHI", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "CAR", awayTeam: "CIN", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "HOU", awayTeam: "JAX", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "ARI", awayTeam: "WAS", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "SF", awayTeam: "NE", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "LV", awayTeam: "CLE", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "LAC", awayTeam: "KC", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "BAL", awayTeam: "BUF", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", h0meTeam: "MIA", awayTeam: "TEN", time: "6:30 PM", tv: "ESPN" },
    { day: "Monday", h0meTeam: "DET", awayTeam: "SEA", time: "7:15 PM", tv: "ABC" }
  ],
  5: [
    { day: "Thursday", h0meTeam: "ATL", awayTeam: "TB", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", h0meTeam: "MIN", awayTeam: "NYJ", time: "8:30 AM", tv: "NFL Net" },
    { day: "Sunday", h0meTeam: "CHI", awayTeam: "CAR", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "CIN", awayTeam: "BAL", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "NE", awayTeam: "MIA", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "WAS", awayTeam: "CLE", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "JAX", awayTeam: "IND", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "HOU", awayTeam: "BUF", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "DEN", awayTeam: "LV", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "SF", awayTeam: "ARI", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "LAR", awayTeam: "GB", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "SEA", awayTeam: "NYG", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "PIT", awayTeam: "DAL", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", h0meTeam: "KC", awayTeam: "NO", time: "7:15 PM", tv: "ESPN" }
  ],
  6: [
    { day: "Thursday", h0meTeam: "SEA", awayTeam: "SF", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", h0meTeam: "CHI", awayTeam: "JAX", time: "8:30 AM", tv: "NFL Net" },
    { day: "Sunday", h0meTeam: "GB", awayTeam: "ARI", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "TEN", awayTeam: "IND", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "NE", awayTeam: "HOU", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "NO", awayTeam: "TB", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "PHI", awayTeam: "CLE", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "BAL", awayTeam: "WAS", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "DEN", awayTeam: "LAC", time: "3:05 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "LV", awayTeam: "PIT", time: "3:05 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "DAL", awayTeam: "DET", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "CAR", awayTeam: "ATL", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "NYJ", awayTeam: "CIN", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", h0meTeam: "NYG", awayTeam: "BUF", time: "7:15 PM", tv: "ESPN" }
  ],
  7: [
    { day: "Thursday", h0meTeam: "NO", awayTeam: "DEN", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", h0meTeam: "JAX", awayTeam: "NE", time: "8:30 AM", tv: "NFL Net" },
    { day: "Sunday", h0meTeam: "ATL", awayTeam: "SEA", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "BUF", awayTeam: "TEN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "CLE", awayTeam: "CIN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "GB", awayTeam: "HOU", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "IND", awayTeam: "MIA", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "MIN", awayTeam: "DET", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "NYG", awayTeam: "PHI", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "LAC", awayTeam: "LV", time: "3:05 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "WAS", awayTeam: "CAR", time: "3:05 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "SF", awayTeam: "KC", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "PIT", awayTeam: "NYJ", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", h0meTeam: "TB", awayTeam: "BAL", time: "7:15 PM", tv: "ESPN" },
    { day: "Monday", h0meTeam: "ARI", awayTeam: "LAR", time: "8:00 PM", tv: "ESPN+" }
  ],
  8: [
    { day: "Thursday", h0meTeam: "LAR", awayTeam: "MIN", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", h0meTeam: "CLE", awayTeam: "BAL", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "DET", awayTeam: "TEN", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "MIA", awayTeam: "ARI", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "NE", awayTeam: "NYG", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "TB", awayTeam: "ATL", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "WAS", awayTeam: "CHI", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "JAC", awayTeam: "GB", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "HOU", awayTeam: "IND", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "LAR", awayTeam: "NO", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "SEA", awayTeam: "BUF", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "CIN", awayTeam: "PHI", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "DEN", awayTeam: "CAR", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "LV", awayTeam: "KC", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "SF", awayTeam: "DAL", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", h0meTeam: "PIT", awayTeam: "NYJ", time: "7:15 PM", tv: "ESPN" }
  ],
  9: [
    { day: "Thursday", h0meTeam: "NYJ", awayTeam: "HOU", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", h0meTeam: "ATL", awayTeam: "DAL", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "BUF", awayTeam: "MIA", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "CIN", awayTeam: "LV", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "CLE", awayTeam: "LAR", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "TEN", awayTeam: "NE", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "MIN", awayTeam: "IND", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "NYG", awayTeam: "WAS", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "CAR", awayTeam: "NO", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "BAL", awayTeam: "DEN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "ARI", awayTeam: "CHI", time: "3:05 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "GB", awayTeam: "DET", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "SEA", awayTeam: "LAR", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "PHI", awayTeam: "JAC", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", h0meTeam: "KC", awayTeam: "TB", time: "7:15 PM", tv: "ESPN" }
  ],
  10: [
    { day: "Thursday", h0meTeam: "BAL", awayTeam: "CIN", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", h0meTeam: "CAR", awayTeam: "NYG", time: "8:30 AM", tv: "NFL Net" },
    { day: "Sunday", h0meTeam: "CHI", awayTeam: "NE", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "IND", awayTeam: "BUF", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "KC", awayTeam: "DEN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "NO", awayTeam: "ATL", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "TB", awayTeam: "SF", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "WAS", awayTeam: "PIT", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "JAC", awayTeam: "MIN", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "LAR", awayTeam: "TEN", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "DAL", awayTeam: "PHI", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "ARI", awayTeam: "NYJ", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "HOU", awayTeam: "DET", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", h0meTeam: "LAR", awayTeam: "MIA", time: "7:15 PM", tv: "ESPN" }
  ],
  11: [
    { day: "Thursday", h0meTeam: "PHI", awayTeam: "WAS", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", h0meTeam: "CHI", awayTeam: "GB", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "DET", awayTeam: "JAC", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "TEN", awayTeam: "MIN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "MIA", awayTeam: "LV", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "NE", awayTeam: "LAR", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "NO", awayTeam: "CLE", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "PIT", awayTeam: "BAL", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "DEN", awayTeam: "ATL", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "SF", awayTeam: "SEA", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "BUF", awayTeam: "KC", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "LAR", awayTeam: "CIN", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "NYJ", awayTeam: "IND", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", h0meTeam: "DAL", awayTeam: "HOU", time: "7:15 PM", tv: "ESPN" }
  ],
  12: [
    { day: "Thursday", h0meTeam: "CLE", awayTeam: "PIT", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", h0meTeam: "CHI", awayTeam: "MIN", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "IND", awayTeam: "DET", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "MIA", awayTeam: "NE", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "NYJ", awayTeam: "TB", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "WAS", awayTeam: "DAL", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "CAR", awayTeam: "KC", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "HOU", awayTeam: "TEN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "LV", awayTeam: "DEN", time: "3:05 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "GB", awayTeam: "SF", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "SEA", awayTeam: "ARI", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "LAR", awayTeam: "PHI", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", h0meTeam: "LAR", awayTeam: "BAL", time: "7:15 PM", tv: "ESPN" }
  ],
  13: [
    { day: "Thursday", h0meTeam: "DET", awayTeam: "CHI", time: "11:30 AM", tv: "CBS" },
    { day: "Thursday", h0meTeam: "DAL", awayTeam: "NYG", time: "3:30 PM", tv: "FOX" },
    { day: "Thursday", h0meTeam: "GB", awayTeam: "MIA", time: "7:20 PM", tv: "NBC" },
    { day: "Friday", h0meTeam: "KC", awayTeam: "LV", time: "2:00 PM", tv: "Prime Video" },
    { day: "Sunday", h0meTeam: "ATL", awayTeam: "LAR", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "CIN", awayTeam: "PIT", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "MIN", awayTeam: "ARI", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "NE", awayTeam: "IND", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "NYJ", awayTeam: "SEA", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "WAS", awayTeam: "TEN", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "JAC", awayTeam: "HOU", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "NO", awayTeam: "LAR", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "CAR", awayTeam: "TB", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "BAL", awayTeam: "PHI", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "BUF", awayTeam: "SF", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", h0meTeam: "DEN", awayTeam: "CLE", time: "7:15 PM", tv: "ESPN" }
  ],
  14: [
    { day: "Thursday", h0meTeam: "DET", awayTeam: "GB", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", h0meTeam: "TEN", awayTeam: "JAC", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "MIA", awayTeam: "NYG", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "MIN", awayTeam: "ATL", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "NYJ", awayTeam: "NO", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "PHI", awayTeam: "CAR", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "PIT", awayTeam: "CLE", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "TB", awayTeam: "LV", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "ARI", awayTeam: "SEA", time: "3:05 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "LAR", awayTeam: "BUF", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "SF", awayTeam: "CHI", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "KC", awayTeam: "LAR", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", h0meTeam: "DAL", awayTeam: "CIN", time: "7:15 PM", tv: "ESPN" }
  ],
  15: [
    { day: "Thursday", h0meTeam: "SF", awayTeam: "LAR", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", h0meTeam: "CLE", awayTeam: "KC", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "TEN", awayTeam: "CIN", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "NO", awayTeam: "WAS", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "NYJ", awayTeam: "BAL", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "CAR", awayTeam: "DAL", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "JAC", awayTeam: "NYG", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "HOU", awayTeam: "MIA", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "DEN", awayTeam: "IND", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "DET", awayTeam: "BUF", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "PHI", awayTeam: "PIT", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "AZ", awayTeam: "NE", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "LAR", awayTeam: "TB", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "SEA", awayTeam: "GB", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", h0meTeam: "MIN", awayTeam: "CHI", time: "7:00 PM", tv: "ABC" },
    { day: "Monday", h0meTeam: "LV", awayTeam: "ATL", time: "7:30 PM", tv: "ESPN" }
  ],
  16: [
    { day: "Thursday", h0meTeam: "CIN", awayTeam: "CLE", time: "7:15 PM", tv: "Prime Video" },
    { day: "Saturday", h0meTeam: "KC", awayTeam: "HOU", time: "12:00 PM", tv: "NBC" },
    { day: "Saturday", h0meTeam: "BAL", awayTeam: "PIT", time: "3:30 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "ATL", awayTeam: "NYG", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "BUF", awayTeam: "NE", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "CHI", awayTeam: "DET", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "IND", awayTeam: "TEN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "NYJ", awayTeam: "LAR", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "WAS", awayTeam: "PHI", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "CAR", awayTeam: "ARI", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "LAR", awayTeam: "DEN", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "SEA", awayTeam: "MIN", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "LV", awayTeam: "JAC", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "MIA", awayTeam: "SF", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "DAL", awayTeam: "TB", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", h0meTeam: "GB", awayTeam: "NO", time: "7:15 PM", tv: "ESPN" }
  ],
  17: [
    { day: "Wednesday", h0meTeam: "PIT", awayTeam: "KC", time: "12:00 PM", tv: "Netflix" },
    { day: "Wednesday", h0meTeam: "HOU", awayTeam: "BAL", time: "3:30 PM", tv: "Netflix" },
    { day: "Thursday", h0meTeam: "CHI", awayTeam: "SEA", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", h0meTeam: "CIN", awayTeam: "DEN", time: "TBD", tv: "" },
    { day: "Sunday", h0meTeam: "LAR", awayTeam: "ARI", time: "TBD", tv: "" },
    { day: "Sunday", h0meTeam: "NE", awayTeam: "LAR", time: "TBD", tv: "" },
    { day: "Sunday", h0meTeam: "NYJ", awayTeam: "IND", time: "TBD", tv: "" },
    { day: "Sunday", h0meTeam: "WAS", awayTeam: "ATL", time: "TBD", tv: "" },
    { day: "Sunday", h0meTeam: "BUF", awayTeam: "NYG", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "MIN", awayTeam: "GB", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "NO", awayTeam: "LV", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "TB", awayTeam: "CAR", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "JAC", awayTeam: "TEN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", h0meTeam: "PHI", awayTeam: "DAL", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", h0meTeam: "CLE", awayTeam: "MIA", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", h0meTeam: "SF", awayTeam: "DET", time: "7:15 PM", tv: "ESPN" }
  ],
  18: [
    { day: "Sunday", h0meTeam: "ATL", awayTeam: "CAR", time: "TBD", tv: "TBD" },
    { day: "Sunday", h0meTeam: "DAL", awayTeam: "WAS", time: "TBD", tv: "TBD" },
    { day: "Sunday", h0meTeam: "DEN", awayTeam: "KC", time: "TBD", tv: "TBD" },
    { day: "Sunday", h0meTeam: "DET", awayTeam: "MIN", time: "TBD", tv: "TBD" },
    { day: "Sunday", h0meTeam: "GB", awayTeam: "CHI", time: "TBD", tv: "TBD" },
    { day: "Sunday", h0meTeam: "TEN", awayTeam: "HOU", time: "TBD", tv: "TBD" },
    { day: "Sunday", h0meTeam: "IND", awayTeam: "JAC", time: "TBD", tv: "TBD" },
    { day: "Sunday", h0meTeam: "LV", awayTeam: "LAR", time: "TBD", tv: "TBD" },
    { day: "Sunday", h0meTeam: "LAR", awayTeam: "SEA", time: "TBD", tv: "TBD" },
    { day: "Sunday", h0meTeam: "NE", awayTeam: "BUF", time: "TBD", tv: "TBD" },
    { day: "Sunday", h0meTeam: "NYJ", awayTeam: "MIA", time: "TBD", tv: "TBD" },
    { day: "Sunday", h0meTeam: "PHI", awayTeam: "NYG", time: "TBD", tv: "TBD" },
    { day: "Sunday", h0meTeam: "AZ", awayTeam: "SF", time: "TBD", tv: "TBD" },
    { day: "Sunday", h0meTeam: "PIT", awayTeam: "CIN", time: "TBD", tv: "TBD" },
    { day: "Sunday", h0meTeam: "TB", awayTeam: "NO", time: "TBD", tv: "TBD" },
    { day: "Sunday", h0meTeam: "BAL", awayTeam: "CLE", time: "TBD", tv: "TBD" }
  ],
};
// NFL Bye Weeks
const nflBye = {
    5: [
        { bye: "DET" },
        { bye: "LAC" },
        { bye: "PHI" },
        { bye: "TEN" }
    ],
    6: [
        { bye: "KC" },
        { bye: "LAR" },
        { bye: "MIA" },
        { bye: "MIN" }
    ],
    7: [
        { bye: "CHI" },
        { bye: "DAL" }
    ],
    9: [
        { bye: "PIT" },
        { bye: "SF" }
    ],
    10: [
        { bye: "CLE" },
        { bye: "GB" },
        { bye: "LV" },
        { bye: "SEA" }
    ],
    11: [
        { bye: "ARI" },
        { bye: "CAR" },
        { bye: "NYG" },
        { bye: "TB" }
    ],
    12: [
        { bye: "ATL" },
        { bye: "BUF" },
        { bye: "CIN" },
        { bye: "JAC" },
        { bye: "NO" },
        { bye: "NYJ" }
    ],
    14: [
        { bye: "BAL" },
        { bye: "DEN" },
        { bye: "HOU" },
        { bye: "IND" },
        { bye: "NE" },
        { bye: "WAS" }
    ]
};

// Define the start date of the NFL season
const startDate = new Date('2024-09-05'); // NFL season starts on September 5, 2024

const byeWeeks = {
    1: "weeks/week1.html",
    2: "weeks/week2.html",
    3: "weeks/week3.html",
    4: "weeks/week4.html",
    5: "weeks/week5.html",
    6: "weeks/week6.html",
    7: "weeks/week7.html",
    8: "weeks/week8.html",
    9: "weeks/week9.html",
    10: "weeks/week10.html",
    11: "weeks/week11.html",
    12: "weeks/week12.html",
    13: "weeks/week13.html",
    14: "weeks/week14.html",
    15: "weeks/week15.html",
    16: "weeks/week16.html",
    17: "weeks/week17.html"
};

function getCurrentWeek() {
    const currentDate = new Date();
    const timeDifference = currentDate - startDate; // Get time difference in milliseconds
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days
    const weekOfYear = Math.floor(daysDifference / 7) + 1; // Calculate week number based on 7 days per week

    // Adjust for weeks beyond the regular schedule and determine proper weeks
    if (weekOfYear < 1 || weekOfYear > 17) {
        return null; // No schedule available
    }

    return weekOfYear;
}

document.getElementById('viewSchedulesBtn').addEventListener('click', function() {
    const currentWeek = getCurrentWeek();

    console.log("Current Week: ", currentWeek); // Log the current week for debugging

    if (currentWeek && byeWeeks[currentWeek]) {
        window.location.href = byeWeeks[currentWeek]; // Redirect to the corresponding week schedule
    } else {
        alert('No schedule available for the current week.');
    }
});
