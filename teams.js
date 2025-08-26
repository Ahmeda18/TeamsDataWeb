// NFL teams data
const teams = [
  { abbr: "ARI", name: "Arizona Cardinals", division: "NFC West" },
  { abbr: "ATL", name: "Atlanta Falcons", division: "NFC South" },
  { abbr: "BAL", name: "Baltimore Ravens", division: "AFC North" },
  { abbr: "BUF", name: "Buffalo Bills", division: "AFC East" },
  { abbr: "CAR", name: "Carolina Panthers", division: "NFC South" },
  { abbr: "CHI", name: "Chicago Bears", division: "NFC North" },
  { abbr: "CIN", name: "Cincinnati Bengals", division: "AFC North" },
  { abbr: "CLE", name: "Cleveland Browns", division: "AFC North" },
  { abbr: "DAL", name: "Dallas Cowboys", division: "NFC East" },
  { abbr: "DEN", name: "Denver Broncos", division: "AFC West" },
  { abbr: "DET", name: "Detroit Lions", division: "NFC North" },
  { abbr: "GB", name: "Green Bay Packers", division: "NFC North" },
  { abbr: "HOU", name: "Houston Texans", division: "AFC South" },
  { abbr: "IND", name: "Indianapolis Colts", division: "AFC South" },
  { abbr: "JAX", name: "Jacksonville Jaguars", division: "AFC South" },
  { abbr: "KC", name: "Kansas City Chiefs", division: "AFC West" },
  { abbr: "LA", name: "Los Angeles Rams", division: "NFC West" },
  { abbr: "LAC", name: "Los Angeles Chargers", division: "AFC West" },
  { abbr: "LV", name: "Las Vegas Raiders", division: "AFC West" },
  { abbr: "MIA", name: "Miami Dolphins", division: "AFC East" },
  { abbr: "MIN", name: "Minnesota Vikings", division: "NFC North" },
  { abbr: "NE", name: "New England Patriots", division: "AFC East" },
  { abbr: "NO", name: "New Orleans Saints", division: "NFC South" },
  { abbr: "NYG", name: "New York Giants", division: "NFC East" },
  { abbr: "NYJ", name: "New York Jets", division: "AFC East" },
  { abbr: "PHI", name: "Philadelphia Eagles", division: "NFC East" },
  { abbr: "PIT", name: "Pittsburgh Steelers", division: "AFC North" },
  { abbr: "SEA", name: "Seattle Seahawks", division: "NFC West" },
  { abbr: "SF", name: "San Francisco 49ers", division: "NFC West" },
  { abbr: "TB", name: "Tampa Bay Buccaneers", division: "NFC South" },
  { abbr: "TEN", name: "Tennessee Titans", division: "AFC South" },
  { abbr: "WAS", name: "Washington Commanders", division: "NFC East" }
];

function findTeam() {
  const input = document.getElementById('teamInput').value.trim().toLowerCase();
  const resultDiv = document.getElementById('result');
  if (!input) {
    resultDiv.innerHTML = '';
    return;
  }
  const team = teams.find(t => t.name.toLowerCase() === input);
  if (team) {
    resultDiv.innerHTML = `<strong>Team:</strong> ${team.name}<br><strong>Division:</strong> ${team.division}`;
  } else {
    resultDiv.innerHTML = `<span class="not-found">Team not found.</span>`;
  }
}
