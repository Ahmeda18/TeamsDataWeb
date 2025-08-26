// NFL teams data
const teams = [
  { abbr: "ARI", name: "Arizona Cardinals", division: "NFC West", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png" },
  { abbr: "ATL", name: "Atlanta Falcons", division: "NFC South", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png" },
  { abbr: "BAL", name: "Baltimore Ravens", division: "AFC North", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png" },
  { abbr: "BUF", name: "Buffalo Bills", division: "AFC East", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png" },
  { abbr: "CAR", name: "Carolina Panthers", division: "NFC South", logo: "https://a.espncdn.com/i/teamlogos/nfl/500-dark/car.png" },
  { abbr: "CHI", name: "Chicago Bears", division: "NFC North", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png" },
  { abbr: "CIN", name: "Cincinnati Bengals", division: "AFC North", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png" },
  { abbr: "CLE", name: "Cleveland Browns", division: "AFC North", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png" },
  { abbr: "DAL", name: "Dallas Cowboys", division: "NFC East", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png" },
  { abbr: "DEN", name: "Denver Broncos", division: "AFC West", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/den.png" },
  { abbr: "DET", name: "Detroit Lions", division: "NFC North", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/det.png" },
  { abbr: "GB", name: "Green Bay Packers", division: "NFC North", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png" },
  { abbr: "HOU", name: "Houston Texans", division: "AFC South", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png" },
  { abbr: "IND", name: "Indianapolis Colts", division: "AFC South", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png" },
  { abbr: "JAX", name: "Jacksonville Jaguars", division: "AFC South", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png" },
  { abbr: "KC", name: "Kansas City Chiefs", division: "AFC West", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png" },
  { abbr: "LA", name: "Los Angeles Rams", division: "NFC West", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png" },
  { abbr: "LAC", name: "Los Angeles Chargers", division: "AFC West", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png" },
  { abbr: "LV", name: "Las Vegas Raiders", division: "AFC West", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png" },
  { abbr: "MIA", name: "Miami Dolphins", division: "AFC East", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png" },
  { abbr: "MIN", name: "Minnesota Vikings", division: "NFC North", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/min.png" },
  { abbr: "NE", name: "New England Patriots", division: "AFC East", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },
  { abbr: "NO", name: "New Orleans Saints", division: "NFC South", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/no.png" },
  { abbr: "NYG", name: "New York Giants", division: "NFC East", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png" },
  { abbr: "NYJ", name: "New York Jets", division: "AFC East", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png" },
  { abbr: "PHI", name: "Philadelphia Eagles", division: "NFC East", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png" },
  { abbr: "PIT", name: "Pittsburgh Steelers", division: "AFC North", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png" },
  { abbr: "SEA", name: "Seattle Seahawks", division: "NFC West", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png" },
  { abbr: "SF", name: "San Francisco 49ers", division: "NFC West", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png" },
  { abbr: "TB", name: "Tampa Bay Buccaneers", division: "NFC South", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png" },
  { abbr: "TEN", name: "Tennessee Titans", division: "AFC South", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png" },
  { abbr: "WAS", name: "Washington Commanders", division: "NFC East", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png" }
];

function findTeam() {
  const select = document.getElementById('teamSelect');
  const input = select.value;
  const resultDiv = document.getElementById('result');
  if (!input) {
    resultDiv.innerHTML = '';
    return;
  }
  const team = teams.find(t => t.name === input);
  if (team) {
    // Nickname is the last word of the team name
    const nickname = team.name.split(' ').slice(-1)[0];
    resultDiv.innerHTML = `
      <img src="${team.logo}" alt="${team.name} logo" style="width:80px;height:80px;margin-bottom:10px;"><br>
      <strong>Team:</strong> ${team.name}<br>
      <strong>Division:</strong> ${team.division}<br>
      <strong>Nickname:</strong> ${nickname}
    `;
  } else {
    resultDiv.innerHTML = `<span class=\"not-found\">Team not found.</span>`;
  }
}
