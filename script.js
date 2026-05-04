// ── PLACEHOLDER IMAGE (replace with station.image once photos are added) ──────
const PLACEHOLDER = (() => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="280" height="148">
    <rect width="280" height="148" fill="#d4cec4"/>
    <line x1="0" y1="0" x2="280" y2="148" stroke="#b8b0a8" stroke-width="1"/>
    <line x1="280" y1="0" x2="0" y2="148" stroke="#b8b0a8" stroke-width="1"/>
    <text x="140" y="66" text-anchor="middle" dominant-baseline="middle"
      font-family="Georgia,serif" font-size="12" fill="#888">[ Bild folgt ]</text>
    <text x="140" y="86" text-anchor="middle" dominant-baseline="middle"
      font-family="Georgia,serif" font-size="10" fill="#aaa">Photo to be added</text>
  </svg>`;
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
})();

// ── LIFE STATIONS ─────────────────────────────────────────────────────────────
const stations = [
  {
    id: 1,
    name: 'Wien',
    coords: [48.2082, 16.3738],
    period: '1921–1938',
    summary: 'Geburtsstadt. Georg Stefan Troller wächst in einer jüdischen Familie auf und besucht die Mittelschule. Nach dem Anschluss Österreichs an das Deutsche Reich im März 1938 wird das Leben der Juden unerträglich.',
    image: 'img/wien.jpg',
  },
  {
    id: 2,
    name: 'Prag, Tschechoslowakei',
    coords: [50.0755, 14.4378],
    period: '1938–1939',
    summary: 'Erste Fluchtstation. Die Tschechoslowakei bietet vorläufig Schutz, bis der deutsche Einmarsch im März 1939 auch hier die Sicherheit zunichte macht und zur Weiterreise zwingt.',
    image: 'img/prag.jpg',
  },
  {
    id: 3,
    name: 'Paris, Frankreich',
    coords: [48.8566, 2.3522],
    period: '1939–1941',
    summary: 'Zuflucht in der Weltstadt. Mit Kriegsbeginn wird Troller als feindlicher Ausländer interniert. Paris steht unter dem Schatten der deutschen Besatzung; die Suche nach einem Ausreisevisum beginnt.',
    image: 'img/paris.jpg',
  },
  {
    id: 4,
    name: 'Marseille, Frankreich',
    coords: [43.2965, 5.3698],
    period: '1941',
    summary: 'Das Tor zur Freiheit. In Marseille gelingt die Beschaffung eines Ausreisevisums — ein entscheidender Schritt, der für tausende Flüchtlinge in diesen Jahren über Leben und Tod entschied.',
    image: 'img/marseille.jpg',
  },
  {
    id: 5,
    name: 'Casablanca, Marokko',
    coords: [33.5731, -7.5898],
    period: 'Juli 1941',
    summary: 'Letzte Station auf afrikanischem Boden. Ende Juli 1941 schifft sich Troller in Casablanca ein. Die nordafrikanische Hafenstadt ist Durchgangsstation auf dem Weg nach Amerika.',
    image: 'img/casablanca.jpg',
  },
  {
    id: 6,
    name: 'New York City, USA',
    coords: [40.7128, -74.006],
    period: '1941–1943',
    summary: 'Exil und Neuanfang. In New York arbeitet Troller als Buchbinder. Im März 1943 wird er in die US-Armee eingezogen — der österreichische Jude trägt nun die Uniform der künftigen Befreier.',
    image: 'img/newyork.jpg',
  },
  {
    id: 7,
    name: 'Fort Dix & Camp Croft',
    coords: [40.0087, -74.6626],
    period: '1943–1944',
    summary: 'Militärische Grundausbildung. Aufnahme im Reception Center Fort Dix, New Jersey, dann Infanterietraining in Camp Croft, South Carolina — in der Company A des 35. und Company B des 33. Ausbildungsbataillons.',
    image: 'img/training.jpg',
  },
  {
    id: 8,
    name: 'Oran, Algerien',
    coords: [35.6969, -0.6331],
    period: 'Februar–März 1944',
    summary: 'Verlegung an den mediterranen Kriegsschauplatz. Über das Replacement Depot Fort Meade und eine Überfahrt nach Casablanca gelangt Troller nach Oran — Ausgangspunkt für den Einsatz in Europa.',
    image: 'img/oran.jpg',
  },
  {
    id: 9,
    name: 'Neapel, Italien',
    coords: [40.8518, 14.2681],
    period: 'April–August 1944',
    summary: 'Pionierdienst und Nachrichtendienst. In Neapel dem G-2 der 5. US-Armee zugeteilt: Troller verhört Kriegsgefangene, übersetzt und wird schließlich fest der 2680th Military Intelligence Service Company zugeteilt.',
    image: 'img/neapel.jpg',
  },
  {
    id: 10,
    name: 'Südfrankreich',
    coords: [43.5, 6.0],
    period: 'August 1944',
    summary: 'Landung in Südfrankreich. Als Kriegsgefangenenverhörer (IPW) beim 179. Regiment der 45. Infanteriedivision kehrt Troller nach Frankreich zurück — diesmal als Soldat der Alliierten.',
    image: 'img/suedfrankreich.jpg',
  },
  {
    id: 11,
    name: 'Dijon – Épinal – Straßburg',
    coords: [48.5734, 7.7521],
    period: 'Herbst 1944 – Frühjahr 1945',
    summary: 'Der Vormarsch durch Frankreich. Über Dijon und Épinal bis nach Straßburg im Elsass. Troller ist als Verhörer und — laut eigenen Angaben — als Lautsprecherpropagandist an der Front im Einsatz.',
    image: 'img/strassburg.jpg',
  },
  {
    id: 12,
    name: 'Nürnberg & München',
    coords: [48.6, 11.2],
    period: 'Frühjahr–Herbst 1945',
    summary: 'Im besiegten Deutschland. Troller wird in Nürnberg und München eingesetzt. Nach Kriegsende kurz beim Counter Intelligence Corps für die Entnazifizierung tätig, dann bei Radio München.',
    image: 'img/muenchen.jpg',
  },
  {
    id: 13,
    name: 'Wien (Rückkehr)',
    coords: [48.225, 16.395],
    period: 'Ende 1945 – Frühjahr 1946',
    summary: 'Heimkehr als Besatzungssoldat. Als Kulturkontrollsoldat für die Information Control Division kehrt Troller in seine Geburtsstadt zurück — in die Stadt, aus der er sieben Jahre zuvor fliehen musste.',
    image: 'img/wien_rueckkehr.jpg',
  },
  {
    id: 14,
    name: 'Fort Dix, New Jersey',
    coords: [39.9687, -74.5926],
    period: 'Mai 1946',
    summary: 'Abrüstung und Abschluss. Im Mai 1946 wird Georg Stefan Troller als Technician 5th Grade entlassen. Sein weiterer Lebensweg führt nach Paris, wo er als Journalist und Filmemacher weltweite Bekanntheit erlangt.',
    image: 'img/fortdix.jpg',
  },
];

// ── TIMELINE EVENTS ───────────────────────────────────────────────────────────
const timelineEvents = [
  { year: '1921–1938',     event: 'Geburt & Jugend in Wien',                stationId: 1  },
  { year: '1938–1939',     event: 'Exil in der Tschechoslowakei',           stationId: 2  },
  { year: '1939–1941',     event: 'Paris — Ankunft & Internierung',         stationId: 3  },
  { year: '1941',          event: 'Ausreisevisum in Marseille',             stationId: 4  },
  { year: 'Juli 1941',     event: 'Transit über Casablanca',                stationId: 5  },
  { year: 'Aug. 1941',     event: 'Ankunft in New York',                   stationId: 6  },
  { year: '1943–1944',     event: 'Einzug & Grundausbildung USA',           stationId: 7  },
  { year: 'Feb. 1944',     event: 'Überfahrt — Nordafrika, Oran',          stationId: 8  },
  { year: 'April 1944',    event: 'Neapel — G-2 Nachrichtendienst',        stationId: 9  },
  { year: 'Aug. 1944',     event: 'Landung in Südfrankreich',              stationId: 10 },
  { year: 'Herbst 1944',   event: 'Vormarsch nach Straßburg',              stationId: 11 },
  { year: 'Frühjahr 1945', event: 'Einsatz in Nürnberg & München',         stationId: 12 },
  { year: 'Ende 1945',     event: 'Kulturkontrolle in Wien',               stationId: 13 },
  { year: 'Mai 1946',      event: 'Abrüstung in Fort Dix',                 stationId: 14 },
];

// ── MAP SETUP ─────────────────────────────────────────────────────────────────
const map = L.map('map', { center: [42, 0], zoom: 3, zoomControl: true });

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
  maxZoom: 16
}).addTo(map);

// Dashed route line connecting stations in order
L.polyline(stations.map(s => s.coords), {
  color: '#1a1510',
  weight: 2,
  opacity: 0.6,
  dashArray: '4 7',
}).addTo(map);

// ── MARKERS ───────────────────────────────────────────────────────────────────
const markers = {};

function makeIcon(num, active = false) {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div class="marker-pin${active ? ' active' : ''}">${num}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -17],
  });
}

function popupHTML(s) {
  return `
    <img class="popup-img" src="${PLACEHOLDER}" alt="${s.name}">
    <div class="popup-body">
      <div class="popup-header">
        <span class="popup-num">${s.id}</span>
        <span class="popup-name">${s.name}</span>
      </div>
      <span class="popup-period">${s.period}</span>
      <p class="popup-text">${s.summary}</p>
    </div>`;
}

stations.forEach(s => {
  const marker = L.marker(s.coords, { icon: makeIcon(s.id) })
    .bindPopup(popupHTML(s), { maxWidth: 300 })
    .addTo(map);

  marker.on('click', () => activate(s.id));
  markers[s.id] = marker;
});

// ── ACTIVE STATE ──────────────────────────────────────────────────────────────
let activeId = null;

function activate(id) {
  if (activeId && markers[activeId]) {
    markers[activeId].setIcon(makeIcon(activeId, false));
  }
  activeId = id;
  markers[id].setIcon(makeIcon(id, true));

  document.querySelectorAll('.timeline-item').forEach(el => {
    el.classList.toggle('active', +el.dataset.stationId === id);
  });

  // scroll the first matching timeline item into view
  const first = document.querySelector(`.timeline-item[data-station-id="${id}"]`);
  if (first) first.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

function flyToStation(id) {
  const s = stations.find(x => x.id === id);
  if (!s) return;
  activate(id);
  map.flyTo(s.coords, Math.max(map.getZoom(), 5), { duration: 1.2 });
  setTimeout(() => markers[id].openPopup(), 1000);
}

// ── TIMELINE ─────────────────────────────────────────────────────────────────
const trackEl = document.getElementById('timeline');

timelineEvents.forEach(ev => {
  const el = document.createElement('div');
  el.className = 'timeline-item';
  el.dataset.stationId = ev.stationId;
  el.innerHTML = `
    <div class="timeline-year">${ev.year}</div>
    <div class="timeline-dot">${ev.stationId}</div>
    <div class="timeline-event">${ev.event}</div>`;
  el.addEventListener('click', () => flyToStation(ev.stationId));
  trackEl.appendChild(el);
});
