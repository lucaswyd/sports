// Weeks
const nflSchedule = {
  1: [
    { day: "Thursday", awayTeam: "KC", homeTeam: "BAL" },
    { day: "Friday", awayTeam: "PHI", homeTeam: "GB" },
    { day: "Sunday", awayTeam: "PIT", homeTeam: "ATL" },
    { day: "Sunday", awayTeam: "BUF", homeTeam: "ARI" },
    { day: "Sunday", awayTeam: "CHI", homeTeam: "TEN" },
    { day: "Sunday", awayTeam: "NE", homeTeam: "CIN" },
    { day: "Sunday", awayTeam: "IND", homeTeam: "HOU" },
    { day: "Sunday", awayTeam: "MIA", homeTeam: "JAX" },
    { day: "Sunday", awayTeam: "NO", homeTeam: "CAR" },
    { day: "Sunday", awayTeam: "MIN", homeTeam: "NYG" },
    { day: "Sunday", awayTeam: "LAC", homeTeam: "LV" },
    { day: "Sunday", awayTeam: "SEA", homeTeam: "DEN" },
    { day: "Sunday", awayTeam: "DAL", homeTeam: "CLE" },
    { day: "Sunday", awayTeam: "TB", homeTeam: "WSH" },
    { day: "Sunday", awayTeam: "DET", homeTeam: "LAR" },
    { day: "Monday", awayTeam: "SF", homeTeam: "NYJ" }
  ],
  2: [
    { day: "Thursday", awayTeam: "MIA", homeTeam: "BUF" },
    { day: "Sunday", awayTeam: "DAL", homeTeam: "NO" },
    { day: "Sunday", awayTeam: "DET", homeTeam: "TB" },
    { day: "Sunday", awayTeam: "GB", homeTeam: "IND" },
    { day: "Sunday", awayTeam: "TEN", homeTeam: "NYJ" },
    { day: "Sunday", awayTeam: "MIN", homeTeam: "SF" },
    { day: "Sunday", awayTeam: "NE", homeTeam: "SEA" },
    { day: "Sunday", awayTeam: "WSH", homeTeam: "NYG" },
    { day: "Sunday", awayTeam: "CAR", homeTeam: "LAC" },
    { day: "Sunday", awayTeam: "JAX", homeTeam: "CLE" },
    { day: "Sunday", awayTeam: "BAL", homeTeam: "LV" },
    { day: "Sunday", awayTeam: "ARI", homeTeam: "LAR" },
    { day: "Sunday", awayTeam: "DEN", homeTeam: "PIT" },
    { day: "Sunday", awayTeam: "KC", homeTeam: "CIN" },
    { day: "Sunday", awayTeam: "HOU", homeTeam: "CHI" },
    { day: "Monday", awayTeam: "PHI", homeTeam: "ATL" }
  ],
  3: [
    { day: "Thursday", awayTeam: "NYJ", homeTeam: "NE" },
    { day: "Sunday", awayTeam: "CAR", homeTeam: "LV" },
    { day: "Sunday", awayTeam: "MIA", homeTeam: "SEA" },
    { day: "Sunday", awayTeam: "BAL", homeTeam: "DAL" },
    { day: "Sunday", awayTeam: "SF", homeTeam: "LAR" },
    { day: "Sunday", awayTeam: "DET", homeTeam: "ARI" },
    { day: "Sunday", awayTeam: "KC", homeTeam: "ATL" },
    { day: "Sunday", awayTeam: "NYG", homeTeam: "CLE" },
    { day: "Sunday", awayTeam: "GB", homeTeam: "TEN" },
    { day: "Sunday", awayTeam: "CHI", homeTeam: "IND" },
    { day: "Sunday", awayTeam: "HOU", homeTeam: "MIN" },
    { day: "Sunday", awayTeam: "PHI", homeTeam: "NO" },
    { day: "Sunday", awayTeam: "LAC", homeTeam: "PIT" },
    { day: "Sunday", awayTeam: "DEN", homeTeam: "TB" },
    { day: "Monday", awayTeam: "JAX", homeTeam: "BUF" },
    { day: "Monday", awayTeam: "WSH", homeTeam: "CIN" }
  ],
  4: [
    { day: "Thursday", awayTeam: "NYG", homeTeam: "DAL", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", awayTeam: "ATL", homeTeam: "NO", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "CHI", homeTeam: "LAC", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "GB", homeTeam: "MIN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "IND", homeTeam: "PIT", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "NYJ", homeTeam: "DEN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "TB", homeTeam: "PHI", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "CAR", homeTeam: "CIN", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "HOU", homeTeam: "JAX", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "ARI", homeTeam: "WSH", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "SF", homeTeam: "NE", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "LV", homeTeam: "CLE", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "LAC", homeTeam: "KC", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "BAL", homeTeam: "BUF", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", awayTeam: "MIA", homeTeam: "TEN", time: "6:30 PM", tv: "ESPN" },
    { day: "Monday", awayTeam: "DET", homeTeam: "SEA", time: "7:15 PM", tv: "ABC" }
  ],
  5: [
    { day: "Thursday", awayTeam: "ATL", homeTeam: "TB", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", awayTeam: "MIN", homeTeam: "NYJ", time: "8:30 AM", tv: "NFL Net" },
    { day: "Sunday", awayTeam: "CHI", homeTeam: "CAR", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "CIN", homeTeam: "BAL", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "NE", homeTeam: "MIA", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "WAS", homeTeam: "CLE", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "JAX", homeTeam: "IND", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "HOU", homeTeam: "BUF", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "DEN", homeTeam: "LV", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "SF", homeTeam: "ARI", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "LAR", homeTeam: "GB", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "SEA", homeTeam: "NYG", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "PIT", homeTeam: "DAL", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", awayTeam: "KC", homeTeam: "NO", time: "7:15 PM", tv: "ESPN" }
  ],
  6: [
    { day: "Thursday", awayTeam: "SEA", homeTeam: "SF", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", awayTeam: "CHI", homeTeam: "JAX", time: "8:30 AM", tv: "NFL Net" },
    { day: "Sunday", awayTeam: "GB", homeTeam: "ARI", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "TEN", homeTeam: "IND", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "NE", homeTeam: "HOU", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "NO", homeTeam: "TB", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "PHI", homeTeam: "CLE", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "BAL", homeTeam: "WSH", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "DEN", homeTeam: "LAC", time: "3:05 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "LV", homeTeam: "PIT", time: "3:05 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "DAL", homeTeam: "DET", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "CAR", homeTeam: "ATL", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "NYJ", homeTeam: "CIN", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", awayTeam: "NYG", homeTeam: "BUF", time: "7:15 PM", tv: "ESPN" }
  ],
  7: [
    { day: "Thursday", awayTeam: "NO", homeTeam: "DEN", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", awayTeam: "JAX", homeTeam: "NE", time: "8:30 AM", tv: "NFL Net" },
    { day: "Sunday", awayTeam: "ATL", homeTeam: "SEA", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "BUF", homeTeam: "TEN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "CLE", homeTeam: "CIN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "GB", homeTeam: "HOU", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "IND", homeTeam: "MIA", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "MIN", homeTeam: "DET", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "NYG", homeTeam: "PHI", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "LAC", homeTeam: "LV", time: "3:05 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "WAS", homeTeam: "CAR", time: "3:05 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "SF", homeTeam: "KC", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "PIT", homeTeam: "NYJ", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", awayTeam: "TB", homeTeam: "BAL", time: "7:15 PM", tv: "ESPN" },
    { day: "Monday", awayTeam: "ARI", homeTeam: "LAR", time: "8:00 PM", tv: "ESPN+" }
  ],
  8: [
    { day: "Thursday", awayTeam: "LAR", homeTeam: "MIN", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", awayTeam: "CLE", homeTeam: "BAL", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "DET", homeTeam: "TEN", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "MIA", homeTeam: "ARI", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "NE", homeTeam: "NYG", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "TB", homeTeam: "ATL", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "WSH", homeTeam: "CHI", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "JAC", homeTeam: "GB", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "HOU", homeTeam: "IND", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "LAR", homeTeam: "NO", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "SEA", homeTeam: "BUF", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "CIN", homeTeam: "PHI", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "DEN", homeTeam: "CAR", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "LV", homeTeam: "KC", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "SF", homeTeam: "DAL", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", awayTeam: "PIT", homeTeam: "NYJ", time: "7:15 PM", tv: "ESPN" }
  ],
  9: [
    { day: "Thursday", awayTeam: "NYJ", homeTeam: "HOU", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", awayTeam: "ATL", homeTeam: "DAL", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "BUF", homeTeam: "MIA", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "CIN", homeTeam: "LV", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "CLE", homeTeam: "LAR", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "TEN", homeTeam: "NE", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "MIN", homeTeam: "IND", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "NYG", homeTeam: "WSH", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "CAR", homeTeam: "NO", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "BAL", homeTeam: "DEN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "ARI", homeTeam: "CHI", time: "3:05 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "GB", homeTeam: "DET", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "SEA", homeTeam: "LAR", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "PHI", homeTeam: "JAC", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", awayTeam: "KC", homeTeam: "TB", time: "7:15 PM", tv: "ESPN" }
  ],
  10: [
    { day: "Thursday", awayTeam: "BAL", homeTeam: "CIN", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", awayTeam: "CAR", homeTeam: "NYG", time: "8:30 AM", tv: "NFL Net" },
    { day: "Sunday", awayTeam: "CHI", homeTeam: "NE", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "IND", homeTeam: "BUF", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "KC", homeTeam: "DEN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "NO", homeTeam: "ATL", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "TB", homeTeam: "SF", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "WSH", homeTeam: "PIT", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "JAC", homeTeam: "MIN", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "LAR", homeTeam: "TEN", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "DAL", homeTeam: "PHI", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "ARI", homeTeam: "NYJ", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "HOU", homeTeam: "DET", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", awayTeam: "LAR", homeTeam: "MIA", time: "7:15 PM", tv: "ESPN" }
  ],
  11: [
    { day: "Thursday", awayTeam: "PHI", homeTeam: "WSH", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", awayTeam: "CHI", homeTeam: "GB", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "DET", homeTeam: "JAC", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "TEN", homeTeam: "MIN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "MIA", homeTeam: "LV", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "NE", homeTeam: "LAR", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "NO", homeTeam: "CLE", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "PIT", homeTeam: "BAL", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "DEN", homeTeam: "ATL", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "SF", homeTeam: "SEA", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "BUF", homeTeam: "KC", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "LAR", homeTeam: "CIN", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "NYJ", homeTeam: "IND", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", awayTeam: "DAL", homeTeam: "HOU", time: "7:15 PM", tv: "ESPN" }
  ],
  12: [
    { day: "Thursday", awayTeam: "CLE", homeTeam: "PIT", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", awayTeam: "CHI", homeTeam: "MIN", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "IND", homeTeam: "DET", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "MIA", homeTeam: "NE", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "NYJ", homeTeam: "TB", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "WSH", homeTeam: "DAL", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "CAR", homeTeam: "KC", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "HOU", homeTeam: "TEN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "LV", homeTeam: "DEN", time: "3:05 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "GB", homeTeam: "SF", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "SEA", homeTeam: "ARI", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "LAR", homeTeam: "PHI", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", awayTeam: "LAR", homeTeam: "BAL", time: "7:15 PM", tv: "ESPN" }
  ],
  13: [
    { day: "Thursday", awayTeam: "DET", homeTeam: "CHI", time: "11:30 AM", tv: "CBS" },
    { day: "Thursday", awayTeam: "DAL", homeTeam: "NYG", time: "3:30 PM", tv: "FOX" },
    { day: "Thursday", awayTeam: "GB", homeTeam: "MIA", time: "7:20 PM", tv: "NBC" },
    { day: "Friday", awayTeam: "KC", homeTeam: "LV", time: "2:00 PM", tv: "Prime Video" },
    { day: "Sunday", awayTeam: "ATL", homeTeam: "LAR", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "CIN", homeTeam: "PIT", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "MIN", homeTeam: "ARI", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "NE", homeTeam: "IND", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "NYJ", homeTeam: "SEA", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "WAS", homeTeam: "TEN", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "JAC", homeTeam: "HOU", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "NO", homeTeam: "LAR", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "CAR", homeTeam: "TB", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "BAL", homeTeam: "PHI", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "BUF", homeTeam: "SF", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", awayTeam: "DEN", homeTeam: "CLE", time: "7:15 PM", tv: "ESPN" }
  ],
  14: [
    { day: "Thursday", awayTeam: "DET", homeTeam: "GB", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", awayTeam: "TEN", homeTeam: "JAC", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "MIA", homeTeam: "NYG", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "MIN", homeTeam: "ATL", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "NYJ", homeTeam: "NO", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "PHI", homeTeam: "CAR", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "PIT", homeTeam: "CLE", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "TB", homeTeam: "LV", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "ARI", homeTeam: "SEA", time: "3:05 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "LAR", homeTeam: "BUF", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "SF", homeTeam: "CHI", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "KC", homeTeam: "LAR", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", awayTeam: "DAL", homeTeam: "CIN", time: "7:15 PM", tv: "ESPN" }
  ],
  15: [
    { day: "Thursday", awayTeam: "SF", homeTeam: "LAR", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", awayTeam: "CLE", homeTeam: "KC", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "TEN", homeTeam: "CIN", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "NO", homeTeam: "WAS", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "NYJ", homeTeam: "BAL", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "CAR", homeTeam: "DAL", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "JAC", homeTeam: "NYG", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "HOU", homeTeam: "MIA", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "DEN", homeTeam: "IND", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "DET", homeTeam: "BUF", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "PHI", homeTeam: "PIT", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "AZ", homeTeam: "NE", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "LAR", homeTeam: "TB", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "SEA", homeTeam: "GB", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", awayTeam: "MIN", homeTeam: "CHI", time: "7:00 PM", tv: "ABC" },
    { day: "Monday", awayTeam: "LV", homeTeam: "ATL", time: "7:30 PM", tv: "ESPN" }
  ],
  16: [
    { day: "Thursday", awayTeam: "CIN", homeTeam: "CLE", time: "7:15 PM", tv: "Prime Video" },
    { day: "Saturday", awayTeam: "KC", homeTeam: "HOU", time: "12:00 PM", tv: "NBC" },
    { day: "Saturday", awayTeam: "BAL", homeTeam: "PIT", time: "3:30 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "ATL", homeTeam: "NYG", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "BUF", homeTeam: "NE", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "CHI", homeTeam: "DET", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "IND", homeTeam: "TEN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "NYJ", homeTeam: "LAR", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "WAS", homeTeam: "PHI", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "CAR", homeTeam: "ARI", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "LAR", homeTeam: "DEN", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "SEA", homeTeam: "MIN", time: "3:05 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "LV", homeTeam: "JAC", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "MIA", homeTeam: "SF", time: "3:25 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "DAL", homeTeam: "TB", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", awayTeam: "GB", homeTeam: "NO", time: "7:15 PM", tv: "ESPN" }
  ],
  17: [
    { day: "Wednesday", awayTeam: "PIT", homeTeam: "KC", time: "12:00 PM", tv: "Netflix" },
    { day: "Wednesday", awayTeam: "HOU", homeTeam: "BAL", time: "3:30 PM", tv: "Netflix" },
    { day: "Thursday", awayTeam: "CHI", homeTeam: "SEA", time: "7:15 PM", tv: "Prime Video" },
    { day: "Sunday", awayTeam: "CIN", homeTeam: "DEN", time: "TBD", tv: "" },
    { day: "Sunday", awayTeam: "LAR", homeTeam: "ARI", time: "TBD", tv: "" },
    { day: "Sunday", awayTeam: "NE", homeTeam: "LAR", time: "TBD", tv: "" },
    { day: "Sunday", awayTeam: "NYJ", homeTeam: "IND", time: "TBD", tv: "" },
    { day: "Sunday", awayTeam: "WAS", homeTeam: "ATL", time: "TBD", tv: "" },
    { day: "Sunday", awayTeam: "BUF", homeTeam: "NYG", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "MIN", homeTeam: "GB", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "NO", homeTeam: "LV", time: "12:00 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "TB", homeTeam: "CAR", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "JAC", homeTeam: "TEN", time: "12:00 PM", tv: "CBS" },
    { day: "Sunday", awayTeam: "PHI", homeTeam: "DAL", time: "3:25 PM", tv: "FOX" },
    { day: "Sunday", awayTeam: "CLE", homeTeam: "MIA", time: "7:20 PM", tv: "NBC" },
    { day: "Monday", awayTeam: "SF", homeTeam: "DET", time: "7:15 PM", tv: "ESPN" }
  ],
  18: [
    { day: "Sunday", awayTeam: "ATL", homeTeam: "CAR", time: "TBD", tv: "TBD" },
    { day: "Sunday", awayTeam: "DAL", homeTeam: "WAS", time: "TBD", tv: "TBD" },
    { day: "Sunday", awayTeam: "DEN", homeTeam: "KC", time: "TBD", tv: "TBD" },
    { day: "Sunday", awayTeam: "DET", homeTeam: "MIN", time: "TBD", tv: "TBD" },
    { day: "Sunday", awayTeam: "GB", homeTeam: "CHI", time: "TBD", tv: "TBD" },
    { day: "Sunday", awayTeam: "TEN", homeTeam: "HOU", time: "TBD", tv: "TBD" },
    { day: "Sunday", awayTeam: "IND", homeTeam: "JAC", time: "TBD", tv: "TBD" },
    { day: "Sunday", awayTeam: "LV", homeTeam: "LAR", time: "TBD", tv: "TBD" },
    { day: "Sunday", awayTeam: "LAR", homeTeam: "SEA", time: "TBD", tv: "TBD" },
    { day: "Sunday", awayTeam: "NE", homeTeam: "BUF", time: "TBD", tv: "TBD" },
    { day: "Sunday", awayTeam: "NYJ", homeTeam: "MIA", time: "TBD", tv: "TBD" },
    { day: "Sunday", awayTeam: "PHI", homeTeam: "NYG", time: "TBD", tv: "TBD" },
    { day: "Sunday", awayTeam: "AZ", homeTeam: "SF", time: "TBD", tv: "TBD" },
    { day: "Sunday", awayTeam: "PIT", homeTeam: "CIN", time: "TBD", tv: "TBD" },
    { day: "Sunday", awayTeam: "TB", homeTeam: "NO", time: "TBD", tv: "TBD" },
    { day: "Sunday", awayTeam: "BAL", homeTeam: "CLE", time: "TBD", tv: "TBD" }
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
