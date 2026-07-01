// ============================================
// Desert Standards — Dashboard Demo JS
// ============================================

const CITATIONS = [
  { id: 'DS-2026-0312', date: '2026-06-29', time: '9:14 PM', property: 'Desert Ridge HOA', violation: 'Fire Lane Violation', lot: 'Lot 42', vehicle: '2022 Toyota Camry — AZ BRK4921', status: 'Cited', type: 'parking', repeat: true, repeatCount: 4, officer: 'M. Torres' },
  { id: 'DS-2026-0311', date: '2026-06-29', time: '8:47 PM', property: 'Pinnacle Condos', violation: 'Expired Visitor Pass', lot: 'Unit 118', vehicle: '2019 Honda Accord — AZ DLT7832', status: 'Warning', type: 'parking', repeat: false, repeatCount: 0, officer: 'R. Davis' },
  { id: 'DS-2026-0310', date: '2026-06-28', time: '10:02 PM', property: 'Desert Ridge HOA', violation: 'No Parking Permit', lot: 'Lot 15', vehicle: '2021 Ford F-150 — AZ NMK2143', status: 'Cited', type: 'parking', repeat: true, repeatCount: 2, officer: 'M. Torres' },
  { id: 'DS-2026-0309', date: '2026-06-28', time: '7:33 PM', property: 'Scottsdale Villas', violation: 'Trash Bin Left Out', lot: 'Unit 7B', vehicle: '—', status: 'Resolved', type: 'ccr', repeat: false, repeatCount: 0, officer: 'K. Patel' },
  { id: 'DS-2026-0308', date: '2026-06-27', time: '9:55 PM', property: 'Pinnacle Condos', violation: 'Unauthorized Parking', lot: 'Lot 203', vehicle: '2020 Chevy Silverado — AZ PQR8814', status: 'Cited', type: 'parking', repeat: false, repeatCount: 0, officer: 'R. Davis' },
  { id: 'DS-2026-0307', date: '2026-06-27', time: '8:20 PM', property: 'Arcadia Estates', violation: 'Landscaping Violation', lot: 'Unit 34', vehicle: '—', status: 'Warning', type: 'ccr', repeat: true, repeatCount: 3, officer: 'K. Patel' },
  { id: 'DS-2026-0306', date: '2026-06-26', time: '10:15 PM', property: 'Desert Ridge HOA', violation: 'Blocked Walkway', lot: 'Lot 88', vehicle: '—', status: 'Resolved', type: 'ccr', repeat: false, repeatCount: 0, officer: 'M. Torres' },
  { id: 'DS-2026-0305', date: '2026-06-26', time: '7:45 PM', property: 'Scottsdale Villas', violation: 'No Parking Permit', lot: 'Unit 12A', vehicle: '2023 BMW X3 — AZ VWX5567', status: 'Cited', type: 'parking', repeat: false, repeatCount: 0, officer: 'R. Davis' },
  { id: 'DS-2026-0304', date: '2026-06-25', time: '9:30 PM', property: 'Arcadia Estates', violation: 'Fire Lane Violation', lot: 'Lot 5', vehicle: '2018 Nissan Altima — AZ JKL3390', status: 'Resolved', type: 'parking', repeat: false, repeatCount: 0, officer: 'K. Patel' },
  { id: 'DS-2026-0303', date: '2026-06-25', time: '8:10 PM', property: 'Pinnacle Condos', violation: 'Pet Waste Violation', lot: 'Unit 201', vehicle: '—', status: 'Warning', type: 'ccr', repeat: false, repeatCount: 0, officer: 'M. Torres' },
  { id: 'DS-2026-0302', date: '2026-06-24', time: '9:50 PM', property: 'Desert Ridge HOA', violation: 'Vehicle on Lawn', lot: 'Lot 67', vehicle: '2020 Dodge Ram — AZ QRS1122', status: 'Cited', type: 'ccr', repeat: true, repeatCount: 2, officer: 'M. Torres' },
  { id: 'DS-2026-0301', date: '2026-06-24', time: '7:15 PM', property: 'Scottsdale Villas', violation: 'Expired Visitor Pass', lot: 'Unit 3C', vehicle: '2021 Kia Sorento — AZ FGH7788', status: 'Warning', type: 'parking', repeat: false, repeatCount: 0, officer: 'R. Davis' },
  { id: 'DS-2026-0300', date: '2026-06-23', time: '10:25 PM', property: 'Pinnacle Condos', violation: 'Unauthorized Modification', lot: 'Unit 112', vehicle: '—', status: 'Cited', type: 'ccr', repeat: false, repeatCount: 0, officer: 'K. Patel' },
  { id: 'DS-2026-0299', date: '2026-06-23', time: '8:40 PM', property: 'Arcadia Estates', violation: 'No Parking Permit', lot: 'Lot 19', vehicle: '2022 Tesla Model 3 — AZ ZAB4455', status: 'Cited', type: 'parking', repeat: false, repeatCount: 0, officer: 'M. Torres' },
  { id: 'DS-2026-0298', date: '2026-06-22', time: '9:00 PM', property: 'Desert Ridge HOA', violation: 'Noise Complaint Follow-up', lot: 'Lot 31', vehicle: '—', status: 'Resolved', type: 'ccr', repeat: false, repeatCount: 0, officer: 'R. Davis' },
  { id: 'DS-2026-0297', date: '2026-06-22', time: '7:30 PM', property: 'Scottsdale Villas', violation: 'Fire Lane Violation', lot: 'Unit 9A', vehicle: '2019 Hyundai Tucson — AZ MNO6633', status: 'Cited', type: 'parking', repeat: true, repeatCount: 2, officer: 'K. Patel' },
];

const VIOLATIONS_CHART = [
  { label: 'No Parking Permit', count: 89, color: '#D4842A' },
  { label: 'Fire Lane', count: 67, color: '#B43C2D' },
  { label: 'Expired Visitor Pass', count: 54, color: '#C8822A' },
  { label: 'CC&R — Landscaping', count: 41, color: '#4A6B35' },
  { label: 'CC&R — Trash/Bins', count: 33, color: '#8B5A2B' },
  { label: 'Unauthorized Parking', count: 28, color: '#4A3728' },
];

const SCHEDULE = [
  { time: '6:00 PM', property: 'Desert Ridge HOA', officer: 'M. Torres', status: 'completed', color: '#4A6B35' },
  { time: '7:00 PM', property: 'Pinnacle Condos', officer: 'R. Davis', status: 'in-progress', color: '#D4842A' },
  { time: '8:30 PM', property: 'Scottsdale Villas', officer: 'K. Patel', status: 'upcoming', color: '#7A6B5D' },
  { time: '10:00 PM', property: 'Arcadia Estates', officer: 'M. Torres', status: 'upcoming', color: '#7A6B5D' },
];

const PROPERTIES = [
  { name: 'Desert Ridge HOA', type: 'HOA Community', units: 312, patrols: 48, citations: 97, compliance: 88 },
  { name: 'Pinnacle Condos', type: 'Condominium', units: 180, patrols: 36, citations: 72, compliance: 91 },
  { name: 'Scottsdale Villas', type: 'Apartment Complex', units: 240, patrols: 32, citations: 64, compliance: 93 },
  { name: 'Arcadia Estates', type: 'HOA Community', units: 156, patrols: 32, citations: 79, compliance: 85 },
];

const CAMERA_CLIPS = [
  { title: 'Patrol — Desert Ridge HOA', officer: 'M. Torres', date: 'Jun 29, 2026', duration: '3:24:18', time: '6:00 PM' },
  { title: 'Citation — Fire Lane Lot 42', officer: 'M. Torres', date: 'Jun 29, 2026', duration: '4:32', time: '9:14 PM' },
  { title: 'Patrol — Pinnacle Condos', officer: 'R. Davis', date: 'Jun 29, 2026', duration: '2:58:44', time: '7:00 PM' },
  { title: 'Citation — Expired Pass Unit 118', officer: 'R. Davis', date: 'Jun 29, 2026', duration: '3:17', time: '8:47 PM' },
  { title: 'Patrol — Scottsdale Villas', officer: 'K. Patel', date: 'Jun 28, 2026', duration: '2:45:09', time: '8:30 PM' },
  { title: 'CC&R Inspection — Unit 7B', officer: 'K. Patel', date: 'Jun 28, 2026', duration: '6:41', time: '7:33 PM' },
];

// ---- INITIALIZATION ----
document.addEventListener('DOMContentLoaded', () => {
  renderDashboardCitations(CITATIONS.slice(0, 10), 'all');
  renderViolationChart();
  renderSchedule();
  renderFullCitations(CITATIONS);
  renderProperties();
  renderCameraClips();
  initNavigation();
  initFilters();
  initSearch();
  initNotifications();
  initDemoBanner();
  initMap();
});

// ---- NAVIGATION ----
function initNavigation() {
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      document.querySelectorAll('.page-content').forEach(p => p.classList.add('d-none'));
      document.getElementById('page-' + page).classList.remove('d-none');
      if (page === 'patrols') setTimeout(() => map && map.invalidateSize(), 100);
      // Close mobile sidebar
      document.getElementById('sidebar').classList.remove('show');
    });
  });

  document.getElementById('sidebarToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('show');
  });
}

// ---- DASHBOARD CITATIONS TABLE ----
function renderDashboardCitations(data, filter) {
  const filtered = filter === 'all' ? data : data.filter(c => c.type === filter);
  const tbody = document.getElementById('citationsBody');
  tbody.innerHTML = filtered.map(c => `
    <tr data-id="${c.id}">
      <td>${formatDate(c.date)}</td>
      <td>${c.property}</td>
      <td>${c.violation}</td>
      <td>${c.lot}</td>
      <td><span class="badge-status badge-${c.status.toLowerCase()}">${c.status}</span></td>
      <td>${c.officer}</td>
      <td><button class="view-btn" onclick="showCitation('${c.id}')">View</button></td>
    </tr>
  `).join('');

  tbody.querySelectorAll('tr').forEach(row => {
    row.addEventListener('click', (e) => {
      if (e.target.tagName !== 'BUTTON') showCitation(row.dataset.id);
    });
  });
}

// ---- FULL CITATIONS TABLE ----
function renderFullCitations(data) {
  const tbody = document.getElementById('fullCitationsBody');
  tbody.innerHTML = data.map(c => `
    <tr data-id="${c.id}">
      <td><span style="font-weight:600;color:var(--ds-accent);">${c.id}</span></td>
      <td>${formatDate(c.date)}</td>
      <td>${c.property}</td>
      <td>${c.violation}</td>
      <td>${c.lot}</td>
      <td style="font-size:0.8rem;">${c.vehicle}</td>
      <td><span class="badge-status badge-${c.status.toLowerCase()}">${c.status}</span></td>
      <td>${c.repeat ? '<span class="badge-repeat"><i class="fas fa-exclamation-triangle me-1"></i>' + c.repeatCount + 'x</span>' : '—'}</td>
      <td>${c.officer}</td>
      <td><button class="view-btn" onclick="showCitation('${c.id}')">View</button></td>
    </tr>
  `).join('');

  document.getElementById('resultCount').textContent = `Showing ${data.length} results`;
}

// ---- CITATION DETAIL MODAL ----
function showCitation(id) {
  const c = CITATIONS.find(x => x.id === id);
  if (!c) return;
  const body = document.getElementById('citationModalBody');
  body.innerHTML = `
    <div class="row">
      <div class="col-md-7">
        <h6 style="color:var(--ds-accent);font-weight:700;margin-bottom:16px;">${c.id}</h6>
        <div class="detail-row"><span class="detail-label">Date & Time</span><span class="detail-value">${c.date} at ${c.time}</span></div>
        <div class="detail-row"><span class="detail-label">Property</span><span class="detail-value">${c.property}</span></div>
        <div class="detail-row"><span class="detail-label">Violation</span><span class="detail-value">${c.violation}</span></div>
        <div class="detail-row"><span class="detail-label">Location</span><span class="detail-value">${c.lot}</span></div>
        <div class="detail-row"><span class="detail-label">Vehicle</span><span class="detail-value">${c.vehicle}</span></div>
        <div class="detail-row"><span class="detail-label">Status</span><span class="detail-value"><span class="badge-status badge-${c.status.toLowerCase()}">${c.status}</span></span></div>
        <div class="detail-row"><span class="detail-label">Officer</span><span class="detail-value">${c.officer}</span></div>
        <div class="detail-row"><span class="detail-label">Type</span><span class="detail-value">${c.type === 'parking' ? 'Parking Enforcement' : 'CC&R Compliance'}</span></div>
        ${c.repeat ? '<div class="detail-row"><span class="detail-label">Repeat Offender</span><span class="detail-value"><span class="badge-repeat"><i class="fas fa-exclamation-triangle me-1"></i>' + c.repeatCount + ' prior violations</span></span></div>' : ''}
      </div>
      <div class="col-md-5">
        <div class="detail-photo">
          <i class="fas fa-camera"></i>
          <div>
            <div style="font-weight:600;">Violation Photo</div>
            <div style="font-size:0.75rem;">Photo evidence captured on site</div>
          </div>
        </div>
        <div class="detail-photo" style="height:120px;margin-top:10px;background:#1a1a1a;color:rgba(255,255,255,0.4);">
          <i class="fas fa-video" style="color:var(--ds-accent);"></i>
          <div>
            <div style="font-weight:600;color:rgba(255,255,255,0.7);">Axon Body Cam</div>
            <div style="font-size:0.75rem;">Footage linked to this citation</div>
          </div>
        </div>
      </div>
    </div>
  `;
  new bootstrap.Modal(document.getElementById('citationModal')).show();
}

// ---- VIOLATION CHART ----
function renderViolationChart() {
  const container = document.getElementById('violationChart');
  const max = Math.max(...VIOLATIONS_CHART.map(v => v.count));
  container.innerHTML = VIOLATIONS_CHART.map(v => `
    <div class="bar-row">
      <div class="bar-label">${v.label} <span>${v.count}</span></div>
      <div class="bar-track">
        <div class="bar-fill" style="width:${(v.count/max)*100}%;background:${v.color};"></div>
      </div>
    </div>
  `).join('');
}

// ---- SCHEDULE ----
function renderSchedule() {
  const container = document.getElementById('scheduleTimeline');
  container.innerHTML = SCHEDULE.map(s => `
    <div class="schedule-item">
      <div class="schedule-dot" style="background:${s.color};"></div>
      <div class="schedule-info">
        <div class="schedule-time">${s.time} <span class="schedule-property">— ${s.property}</span></div>
        <div class="schedule-officer">${s.officer}
          ${s.status === 'in-progress' ? ' <span class="schedule-status">● In Progress</span>' : ''}
          ${s.status === 'completed' ? ' <span class="schedule-status" style="color:var(--ds-muted);">✓ Completed</span>' : ''}
        </div>
      </div>
    </div>
  `).join('');
}

// ---- PROPERTIES ----
function renderProperties() {
  const grid = document.getElementById('propertiesGrid');
  grid.innerHTML = PROPERTIES.map(p => `
    <div class="col-md-6">
      <div class="property-card">
        <h5>${p.name}</h5>
        <div class="property-meta">${p.type} — ${p.units} units</div>
        <div class="property-stats">
          <div class="property-stat">
            <span class="property-stat-val">${p.patrols}</span>
            <span class="property-stat-lbl">Patrols</span>
          </div>
          <div class="property-stat">
            <span class="property-stat-val">${p.citations}</span>
            <span class="property-stat-lbl">Citations</span>
          </div>
          <div class="property-stat">
            <span class="property-stat-val">${p.compliance}%</span>
            <span class="property-stat-lbl">Compliance</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// ---- CAMERA CLIPS ----
function renderCameraClips() {
  const grid = document.getElementById('cameraGrid');
  grid.innerHTML = CAMERA_CLIPS.map(c => `
    <div class="col-md-4">
      <div class="camera-clip">
        <div class="camera-thumb">
          <i class="fas fa-play-circle"></i>
          <span class="camera-duration">${c.duration}</span>
          <span class="camera-axon">AXON BODY CAM</span>
        </div>
        <div class="camera-meta">
          <h6>${c.title}</h6>
          <p>${c.officer} — ${c.date} at ${c.time}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// ---- FILTERS ----
function initFilters() {
  // Dashboard filter pills
  document.querySelectorAll('.filter-pills .pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pills .pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderDashboardCitations(CITATIONS.slice(0, 10), pill.dataset.filter);
    });
  });

  // Full citations page filters
  const search = document.getElementById('citationSearch');
  const filterProp = document.getElementById('filterProperty');
  const filterStatus = document.getElementById('filterStatus');
  const filterType = document.getElementById('filterType');

  [search, filterProp, filterStatus, filterType].forEach(el => {
    if (!el) return;
    el.addEventListener('input', applyFullFilters);
    el.addEventListener('change', applyFullFilters);
  });
}

function applyFullFilters() {
  const q = (document.getElementById('citationSearch').value || '').toLowerCase();
  const prop = document.getElementById('filterProperty').value;
  const status = document.getElementById('filterStatus').value;
  const type = document.getElementById('filterType').value;

  let filtered = CITATIONS.filter(c => {
    if (q && !(c.violation.toLowerCase().includes(q) || c.property.toLowerCase().includes(q) || c.lot.toLowerCase().includes(q) || c.id.toLowerCase().includes(q) || c.vehicle.toLowerCase().includes(q))) return false;
    if (prop && c.property !== prop) return false;
    if (status && c.status !== status) return false;
    if (type && c.type !== type) return false;
    return true;
  });

  renderFullCitations(filtered);
}

// ---- SEARCH ----
function initSearch() {
  const globalSearch = document.getElementById('globalSearch');
  globalSearch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const q = globalSearch.value.trim();
      if (!q) return;
      // Switch to citations page and search
      document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
      document.querySelector('[data-page="citations"]').classList.add('active');
      document.querySelectorAll('.page-content').forEach(p => p.classList.add('d-none'));
      document.getElementById('page-citations').classList.remove('d-none');
      document.getElementById('citationSearch').value = q;
      applyFullFilters();
      globalSearch.value = '';
    }
  });
}

// ---- NOTIFICATIONS ----
function initNotifications() {
  document.getElementById('notifBell').addEventListener('click', () => {
    new bootstrap.Offcanvas(document.getElementById('notifPanel')).show();
  });
}

// ---- DEMO BANNER ----
function initDemoBanner() {
  document.getElementById('closeBanner').addEventListener('click', () => {
    document.getElementById('demoBanner').style.display = 'none';
  });
}

// ---- MAP ----
let map;
function initMap() {
  map = L.map('patrolMap').setView([33.6846, -111.8600], 14);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  // Simulated patrol route through a Phoenix-area neighborhood
  const route = [
    [33.6890, -111.8650], [33.6880, -111.8620], [33.6870, -111.8590],
    [33.6855, -111.8560], [33.6840, -111.8540], [33.6825, -111.8555],
    [33.6810, -111.8580], [33.6800, -111.8610], [33.6815, -111.8640],
    [33.6830, -111.8660], [33.6845, -111.8670], [33.6860, -111.8655],
    [33.6875, -111.8630], [33.6885, -111.8600], [33.6880, -111.8570],
    [33.6865, -111.8545], [33.6850, -111.8530], [33.6835, -111.8550],
    [33.6820, -111.8575], [33.6810, -111.8600],
  ];

  L.polyline(route, { color: '#D4842A', weight: 4, opacity: 0.8, dashArray: '8, 6' }).addTo(map);

  // Officer marker at current position
  const officerIcon = L.divIcon({
    html: '<div style="width:32px;height:32px;border-radius:50%;background:#4A6B35;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:700;">MT</div>',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    className: ''
  });
  L.marker(route[route.length - 1], { icon: officerIcon })
    .addTo(map)
    .bindPopup('<strong>M. Torres</strong><br>On patrol — Desert Ridge HOA<br><small>Last updated 2 min ago</small>');

  // Citation markers
  const citationPoints = [
    { pos: [33.6855, -111.8560], label: 'Fire Lane — Lot 42' },
    { pos: [33.6830, -111.8660], label: 'No Permit — Lot 15' },
    { pos: [33.6865, -111.8545], label: 'Expired Pass — Lot 88' },
  ];

  citationPoints.forEach(cp => {
    const icon = L.divIcon({
      html: '<div style="width:24px;height:24px;border-radius:50%;background:#B43C2D;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;"><i class="fas fa-file-alt"></i></div>',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      className: ''
    });
    L.marker(cp.pos, { icon: icon })
      .addTo(map)
      .bindPopup(`<strong>${cp.label}</strong><br><small>Citation issued during patrol</small>`);
  });
}

// ---- HELPERS ----
function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return (d.getMonth() + 1) + '/' + d.getDate().toString().padStart(2, '0');
}
