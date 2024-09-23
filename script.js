// Weeks
const nflSchedule = {
  1: [
    { day: "Thursday", homeTeam: "KC", awayTeam: "BAL" },
    { day: "Friday", homeTeam: "PHI", awayTeam: "GB" },
    { day: "Sunday", homeTeam: "PIT", awayTeam: "ATL" },
    { day: "Sunday", homeTeam: "BUF", awayTeam: "ARI" },
    { day: "Sunday", homeTeam: "CHI", awayTeam: "TEN" },
    { day: "Sunday", homeTeam: "NE", awayTeam: "CIN" },
    { day: "Sunday", homeTeam: "IND", awayTeam: "HOU" },
    { day: "Sunday", homeTeam: "MIA", awayTeam: "JAX" },
    { day: "Sunday", homeTeam: "NO", awayTeam: "CAR" },
    { day: "Sunday", homeTeam: "MIN", awayTeam: "NYG" },
    { day: "Sunday", homeTeam: "LAC", awayTeam: "LV" },
    { day: "Sunday", homeTeam: "SEA", awayTeam: "DEN" },
    { day: "Sunday", homeTeam: "DAL", awayTeam: "CLE" },
    { day: "Sunday", homeTeam: "TB", awayTeam: "WSH" },
    { day: "Sunday", homeTeam: "DET", awayTeam: "LAR" },
    { day: "Monday", homeTeam: "SF", awayTeam: "NYJ" }
  ],
  2: [
    { day: "Thursday", homeTeam: "MIA", awayTeam: "BUF" },
    { day: "Sunday", homeTeam: "DAL", awayTeam: "NO" },
    { day: "Sunday", homeTeam: "DET", awayTeam: "TB" },
    { day: "Sunday", homeTeam: "GB", awayTeam: "IND" },
    { day: "Sunday", homeTeam: "TEN", awayTeam: "NYJ" },
    { day: "Sunday", homeTeam: "MIN", awayTeam: "SF" },
    { day: "Sunday", homeTeam: "NE", awayTeam: "SEA" },
    { day: "Sunday", homeTeam: "WSH", awayTeam: "NYG" },
    { day: "Sunday", homeTeam: "CAR", awayTeam: "LAC" },
    { day: "Sunday", homeTeam: "JAX", awayTeam: "CLE" },
    { day: "Sunday", homeTeam: "BAL", awayTeam: "LV" },
    { day: "Sunday", homeTeam: "ARI", awayTeam: "LAR" },
    { day: "Sunday", homeTeam: "DEN", awayTeam: "PIT" },
    { day: "Sunday", homeTeam: "KC", awayTeam: "CIN" },
    { day: "Sunday", homeTeam: "HOU", awayTeam: "CHI" },
    { day: "Monday", homeTeam: "PHI", awayTeam: "ATL" }
  ],
  3: [
    { day: "Thursday", homeTeam: "NYJ", awayTeam: "NE" },
    { day: "Sunday", homeTeam: "CAR", awayTeam: "LV" },
    { day: "Sunday", homeTeam: "MIA", awayTeam: "SEA" },
    { day: "Sunday", homeTeam: "BAL", awayTeam: "DAL" },
    { day: "Sunday", homeTeam: "SF", awayTeam: "LAR" },
    { day: "Sunday", homeTeam: "DET", awayTeam: "ARI" },
    { day: "Sunday", homeTeam: "KC", awayTeam: "ATL" },
    { day: "Sunday", homeTeam: "NYG", awayTeam: "CLE" },
    { day: "Sunday", homeTeam: "GB", awayTeam: "TEN" },
    { day: "Sunday", homeTeam: "CHI", awayTeam: "IND" },
    { day: "Sunday", homeTeam: "HOU", awayTeam: "MIN" },
    { day: "Sunday", homeTeam: "PHI", awayTeam: "NO" },
    { day: "Sunday", homeTeam: "LAC", awayTeam: "PIT" },
    { day: "Sunday", homeTeam: "DEN", awayTeam: "TB" },
    { day: "Monday", homeTeam: "JAX", awayTeam: "BUF" },
    { day: "Monday", homeTeam: "WSH", awayTeam: "CIN" }
  ],
  4: [
    { day: "Thursday", homeTeam: "NYG", awayTeam: "DAL", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", homeTeam: "ATL", awayTeam: "NO", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "CHI", awayTeam: "LAC", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "GB", awayTeam: "MIN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "IND", awayTeam: "PIT", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "NYJ", awayTeam: "DEN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "TB", awayTeam: "PHI", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "CAR", awayTeam: "CIN", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "HOU", awayTeam: "JAX", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "ARI", awayTeam: "WSH", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "SF", awayTeam: "NE", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "LV", awayTeam: "CLE", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "LAC", awayTeam: "KC", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "BAL", awayTeam: "BUF", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", homeTeam: "MIA", awayTeam: "TEN", time: "6:30 PM", tv: "ESPN" },
    { day: "Monday", homeTeam: "DET", awayTeam: "SEA", time: "7:15 PM", tv: "ABC" }
  ],
  5: [
    { day: "Thursday", homeTeam: "ATL", awayTeam: "TB", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", homeTeam: "MIN", awayTeam: "NYJ", time: "8:30 AM", tv: "NFL Net" },
    { day: "Sunday", homeTeam: "CHI", awayTeam: "CAR", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "CIN", awayTeam: "BAL", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "NE", awayTeam: "MIA", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "WAS", awayTeam: "CLE", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "JAX", awayTeam: "IND", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "HOU", awayTeam: "BUF", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "DEN", awayTeam: "LV", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "SF", awayTeam: "ARI", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "LAR", awayTeam: "GB", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "SEA", awayTeam: "NYG", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "PIT", awayTeam: "DAL", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", homeTeam: "KC", awayTeam: "NO", time: "7:15 PM", tv: "ESPN" }
  ],
  6: [
    { day: "Thursday", homeTeam: "SEA", awayTeam: "SF", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", homeTeam: "CHI", awayTeam: "JAX", time: "8:30 AM", tv: "NFL Net" },
    { day: "Sunday", homeTeam: "GB", awayTeam: "ARI", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "TEN", awayTeam: "IND", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "NE", awayTeam: "HOU", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "NO", awayTeam: "TB", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "PHI", awayTeam: "CLE", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "BAL", awayTeam: "WSH", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "DEN", awayTeam: "LAC", time: "3:05 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "LV", awayTeam: "PIT", time: "3:05 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "DAL", awayTeam: "DET", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "CAR", awayTeam: "ATL", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "NYJ", awayTeam: "CIN", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", homeTeam: "NYG", awayTeam: "BUF", time: "7:15 PM", tv: "ESPN" }
  ],
  7: [
    { day: "Thursday", homeTeam: "NO", awayTeam: "DEN", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", homeTeam: "JAX", awayTeam: "NE", time: "8:30 AM", tv: "NFL Net" },
    { day: "Sunday", homeTeam: "ATL", awayTeam: "SEA", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "BUF", awayTeam: "TEN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "CLE", awayTeam: "CIN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "GB", awayTeam: "HOU", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "IND", awayTeam: "MIA", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "MIN", awayTeam: "DET", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "NYG", awayTeam: "PHI", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "LAC", awayTeam: "LV", time: "3:05 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "WAS", awayTeam: "CAR", time: "3:05 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "SF", awayTeam: "KC", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "PIT", awayTeam: "NYJ", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", homeTeam: "TB", awayTeam: "BAL", time: "7:15 PM", tv: "ESPN" },
    { day: "Monday", homeTeam: "ARI", awayTeam: "LAR", time: "8:00 PM", tv: "ESPN+" }
  ],
  8: [
    { day: "Thursday", homeTeam: "LAR", awayTeam: "MIN", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", homeTeam: "CLE", awayTeam: "BAL", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "DET", awayTeam: "TEN", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "MIA", awayTeam: "ARI", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "NE", awayTeam: "NYG", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "TB", awayTeam: "ATL", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "WSH", awayTeam: "CHI", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "JAC", awayTeam: "GB", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "HOU", awayTeam: "IND", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "LAR", awayTeam: "NO", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "SEA", awayTeam: "BUF", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "CIN", awayTeam: "PHI", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "DEN", awayTeam: "CAR", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "LV", awayTeam: "KC", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "SF", awayTeam: "DAL", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", homeTeam: "PIT", awayTeam: "NYJ", time: "7:15 PM", tv: "ESPN" }
  ],
  9: [
    { day: "Thursday", homeTeam: "NYJ", awayTeam: "HOU", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", homeTeam: "ATL", awayTeam: "DAL", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "BUF", awayTeam: "MIA", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "CIN", awayTeam: "LV", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "CLE", awayTeam: "LAR", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "TEN", awayTeam: "NE", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "MIN", awayTeam: "IND", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "NYG", awayTeam: "WSH", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "CAR", awayTeam: "NO", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "BAL", awayTeam: "DEN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "ARI", awayTeam: "CHI", time: "3:05 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "GB", awayTeam: "DET", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "SEA", awayTeam: "LAR", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "PHI", awayTeam: "JAC", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", homeTeam: "KC", awayTeam: "TB", time: "7:15 PM", tv: "ESPN" }
  ],
  10: [
    { day: "Thursday", homeTeam: "BAL", awayTeam: "CIN", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", homeTeam: "CAR", awayTeam: "NYG", time: "8:30 AM", tv: "NFL Net" },
    { day: "Sunday", homeTeam: "CHI", awayTeam: "NE", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "IND", awayTeam: "BUF", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "KC", awayTeam: "DEN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "NO", awayTeam: "ATL", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "TB", awayTeam: "SF", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "WSH", awayTeam: "PIT", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "JAC", awayTeam: "MIN", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "LAR", awayTeam: "TEN", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "DAL", awayTeam: "PHI", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "ARI", awayTeam: "NYJ", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "HOU", awayTeam: "DET", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", homeTeam: "LAR", awayTeam: "MIA", time: "7:15 PM", tv: "ESPN" }
  ],
  11: [
    { day: "Thursday", homeTeam: "PHI", awayTeam: "WSH", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", homeTeam: "CHI", awayTeam: "GB", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "DET", awayTeam: "JAC", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "TEN", awayTeam: "MIN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "MIA", awayTeam: "LV", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "NE", awayTeam: "LAR", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "NO", awayTeam: "CLE", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "PIT", awayTeam: "BAL", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "DEN", awayTeam: "ATL", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "SF", awayTeam: "SEA", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "BUF", awayTeam: "KC", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "LAR", awayTeam: "CIN", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "NYJ", awayTeam: "IND", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", homeTeam: "DAL", awayTeam: "HOU", time: "7:15 PM", tv: "ESPN" }
  ],
  12: [
    { day: "Thursday", homeTeam: "CLE", awayTeam: "PIT", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", homeTeam: "CHI", awayTeam: "MIN", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "IND", awayTeam: "DET", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "MIA", awayTeam: "NE", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "NYJ", awayTeam: "TB", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "WSH", awayTeam: "DAL", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "CAR", awayTeam: "KC", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "HOU", awayTeam: "TEN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "LV", awayTeam: "DEN", time: "3:05 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "GB", awayTeam: "SF", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "SEA", awayTeam: "ARI", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "LAR", awayTeam: "PHI", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", homeTeam: "LAR", awayTeam: "BAL", time: "7:15 PM", tv: "ESPN" }
  ],
  13: [
    { day: "Thursday", homeTeam: "DET", awayTeam: "CHI", time: "11:30 AM", tv: "CBS" },
    { day: "Thursday", homeTeam: "DAL", awayTeam: "NYG", time: "3:30 PM", tv: "FOX" },
    { day: "Thursday", homeTeam: "GB", awayTeam: "MIA", time: "7:20 PM", tv: "NBC" },
    { day: "Friday", homeTeam: "KC", awayTeam: "LV", time: "2:00 PM", tv: "Prime Video" },
    { day: "Sunday", homeTeam: "ATL", awayTeam: "LAR", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "CIN", awayTeam: "PIT", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "MIN", awayTeam: "ARI", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "NE", awayTeam: "IND", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "NYJ", awayTeam: "SEA", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "WAS", awayTeam: "TEN", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "JAC", awayTeam: "HOU", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "NO", awayTeam: "LAR", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "CAR", awayTeam: "TB", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "BAL", awayTeam: "PHI", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "BUF", awayTeam: "SF", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", homeTeam: "DEN", awayTeam: "CLE", time: "7:15 PM", tv: "ESPN" }
  ],
  14: [
    { day: "Thursday", homeTeam: "DET", awayTeam: "GB", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", homeTeam: "TEN", awayTeam: "JAC", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "MIA", awayTeam: "NYG", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "MIN", awayTeam: "ATL", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "NYJ", awayTeam: "NO", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "PHI", awayTeam: "CAR", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "PIT", awayTeam: "CLE", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "TB", awayTeam: "LV", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "ARI", awayTeam: "SEA", time: "3:05 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "LAR", awayTeam: "BUF", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "SF", awayTeam: "CHI", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "KC", awayTeam: "LAR", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", homeTeam: "DAL", awayTeam: "CIN", time: "7:15 PM", tv: "ESPN" }
  ],
  15: [
    { day: "Thursday", homeTeam: "SF", awayTeam: "LAR", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", homeTeam: "CLE", awayTeam: "KC", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "TEN", awayTeam: "CIN", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "NO", awayTeam: "WAS", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "NYJ", awayTeam: "BAL", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "CAR", awayTeam: "DAL", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "JAC", awayTeam: "NYG", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "HOU", awayTeam: "MIA", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "DEN", awayTeam: "IND", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "DET", awayTeam: "BUF", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "PHI", awayTeam: "PIT", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "AZ", awayTeam: "NE", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "LAR", awayTeam: "TB", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "SEA", awayTeam: "GB", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", homeTeam: "MIN", awayTeam: "CHI", time: "7:00 PM", tv: "ABC" },
    { day: "Monday", homeTeam: "LV", awayTeam: "ATL", time: "7:30 PM", tv: "ESPN" }
  ],
  16: [
    { day: "Thursday", homeTeam: "CIN", awayTeam: "CLE", time: "7:15 PM", tv: "Prime Video" },
    { day: "Saturday", homeTeam: "KC", awayTeam: "HOU", time: "12:00 PM", tv: "NBC" },
    { day: "Saturday", homeTeam: "BAL", awayTeam: "PIT", time: "3:30 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "ATL", awayTeam: "NYG", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "BUF", awayTeam: "NE", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "CHI", awayTeam: "DET", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "IND", awayTeam: "TEN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "NYJ", awayTeam: "LAR", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "WAS", awayTeam: "PHI", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "CAR", awayTeam: "ARI", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "LAR", awayTeam: "DEN", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "SEA", awayTeam: "MIN", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "LV", awayTeam: "JAC", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "MIA", awayTeam: "SF", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "DAL", awayTeam: "TB", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", homeTeam: "GB", awayTeam: "NO", time: "7:15 PM", tv: "ESPN" }
  ],
  17: [
    { day: "Wednesday", homeTeam: "PIT", awayTeam: "KC", time: "12:00 PM", tv: "Netflix" },
    { day: "Wednesday", homeTeam: "HOU", awayTeam: "BAL", time: "3:30 PM", tv: "Netflix" },
    { day: "Thursday", homeTeam: "CHI", awayTeam: "SEA", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", homeTeam: "CIN", awayTeam: "DEN", time: "TBD", tv: "" },
    { day: "Sunday", homeTeam: "LAR", awayTeam: "ARI", time: "TBD", tv: "" },
    { day: "Sunday", homeTeam: "NE", awayTeam: "LAR", time: "TBD", tv: "" },
    { day: "Sunday", homeTeam: "NYJ", awayTeam: "IND", time: "TBD", tv: "" },
    { day: "Sunday", homeTeam: "WAS", awayTeam: "ATL", time: "TBD", tv: "" },
    { day: "Sunday", homeTeam: "BUF", awayTeam: "NYG", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "MIN", awayTeam: "GB", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "NO", awayTeam: "LV", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "TB", awayTeam: "CAR", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "JAC", awayTeam: "TEN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", homeTeam: "PHI", awayTeam: "DAL", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", homeTeam: "CLE", awayTeam: "MIA", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", homeTeam: "SF", awayTeam: "DET", time: "7:15 PM", tv: "ESPN" }
  ],
  18: [
    { day: "Sunday", homeTeam: "ATL", awayTeam: "CAR", time: "TBD", tv: "TBD" },
    { day: "Sunday", homeTeam: "DAL", awayTeam: "WAS", time: "TBD", tv: "TBD" },
    { day: "Sunday", homeTeam: "DEN", awayTeam: "KC", time: "TBD", tv: "TBD" },
    { day: "Sunday", homeTeam: "DET", awayTeam: "MIN", time: "TBD", tv: "TBD" },
    { day: "Sunday", homeTeam: "GB", awayTeam: "CHI", time: "TBD", tv: "TBD" },
    { day: "Sunday", homeTeam: "TEN", awayTeam: "HOU", time: "TBD", tv: "TBD" },
    { day: "Sunday", homeTeam: "IND", awayTeam: "JAC", time: "TBD", tv: "TBD" },
    { day: "Sunday", homeTeam: "LV", awayTeam: "LAR", time: "TBD", tv: "TBD" },
    { day: "Sunday", homeTeam: "LAR", awayTeam: "SEA", time: "TBD", tv: "TBD" },
    { day: "Sunday", homeTeam: "NE", awayTeam: "BUF", time: "TBD", tv: "TBD" },
    { day: "Sunday", homeTeam: "NYJ", awayTeam: "MIA", time: "TBD", tv: "TBD" },
    { day: "Sunday", homeTeam: "PHI", awayTeam: "NYG", time: "TBD", tv: "TBD" },
    { day: "Sunday", homeTeam: "AZ", awayTeam: "SF", time: "TBD", tv: "TBD" },
    { day: "Sunday", homeTeam: "PIT", awayTeam: "CIN", time: "TBD", tv: "TBD" },
    { day: "Sunday", homeTeam: "TB", awayTeam: "NO", time: "TBD", tv: "TBD" },
    { day: "Sunday", homeTeam: "BAL", awayTeam: "CLE", time: "TBD", tv: "TBD" }
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
