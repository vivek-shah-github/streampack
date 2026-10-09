/* Support / donate button for Stream Pack Builder and Stream Widgets.
   ------------------------------------------------------------------
   EDIT ONLY THIS BLOCK. Leave a value as '' to hide that option.
   If both are empty, the Support button is hidden. */
var SUPPORT = {
  name: 'SHAHZON',
  link: 'https://ko-fi.com/shahzon',        // Ko-fi / Buy Me a Coffee / PayPal.me link, e.g. 'https://ko-fi.com/shahzon'
  linkLabel: 'Support on Ko-fi',
  upi: 'shahzon@ptaxis',         // UPI ID for India, e.g. 'shahzon@okaxis'
  upiName: 'SHAHZON' // name shown in the UPI app
};
/* ------------------------------------------------------------------ */

(function () {
  if (!SUPPORT.link && !SUPPORT.upi) return;

  var css = ''
    + '.sup-btn{border-color:var(--tally)!important;color:var(--text)}'
    + '.sup-btn:hover{background:var(--tally-dim)}'
    + '.sup-btn span{color:var(--tally)}.sup-btn b{font-weight:inherit}'
    + '@media (max-width:1500px){.sup-btn .sup-t{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}}'
    + 'dialog.sup{border:1px solid var(--line2);border-radius:10px;background:var(--panel);color:var(--text);padding:0;width:min(400px,calc(100vw - 32px));font:inherit}'
    + 'dialog.sup::backdrop{background:rgba(0,0,0,.6)}'
    + '.sup-in{padding:22px 22px 20px}'
    + '.sup h2{margin:0 0 6px;font-size:20px}'
    + '.sup p{margin:0 0 16px;color:var(--muted);font-size:14px}'
    + '.sup-opt{border:1px solid var(--line);border-radius:8px;background:var(--ink);padding:14px;margin-bottom:12px}'
    + '.sup-opt h3{margin:0 0 10px;font-size:13px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.04em}'
    + '.sup-opt .btn{width:100%;text-align:center;justify-content:center;box-sizing:border-box}'
    + '.sup-qr{display:grid;place-items:center;background:#fff;border-radius:6px;padding:10px;width:max-content;margin:0 auto 10px}'
    + '.sup-qr img,.sup-qr canvas{display:block;width:180px;height:180px;image-rendering:pixelated}'
    + '.sup-upi{display:flex;gap:8px;align-items:center}'
    + '.sup-upi code{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;background:var(--raise);border:1px solid var(--line2);border-radius:6px;padding:8px 10px;font-size:14px}'
    + '.sup-upi .btn{width:auto}'
    + '.sup-pay{margin-top:10px}'
    + '.sup-close{display:block;margin:4px auto 0;background:none!important;border:0!important;color:var(--muted)!important}'
    + '@media (min-width:700px){dialog.sup a.sup-pay{display:none}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  var upiUrl = SUPPORT.upi ? 'upi://pay?pa=' + encodeURIComponent(SUPPORT.upi) + '&pn=' + encodeURIComponent(SUPPORT.upiName || SUPPORT.name) + '&cu=INR&tn=' + encodeURIComponent('Support ' + SUPPORT.name) : '';

  var d = document.createElement('dialog');
  d.className = 'sup';
  d.setAttribute('aria-labelledby', 'sup-h');
  d.innerHTML = '<div class="sup-in">'
    + '<h2 id="sup-h">Support ' + esc(SUPPORT.name) + '</h2>'
    + '<p>This builder is free. If it helped your stream, a small tip keeps it free and adds new styles.</p>'
    + (SUPPORT.link ? '<div class="sup-opt"><h3>From anywhere</h3><a class="btn primary" href="' + esc(SUPPORT.link) + '" target="_blank" rel="noopener">' + esc(SUPPORT.linkLabel) + ' ↗</a></div>' : '')
    + (SUPPORT.upi ? '<div class="sup-opt"><h3>India · UPI</h3><div class="sup-qr" id="sup-qr" aria-label="UPI QR code"></div>'
        + '<div class="sup-upi"><code>' + esc(SUPPORT.upi) + '</code><button class="btn" type="button" id="sup-copy">Copy</button></div>'
        + '<a class="btn primary sup-pay" href="' + esc(upiUrl) + '">Pay with a UPI app</a></div>' : '')
    + '<button class="btn sup-close" type="button" id="sup-x">Close</button></div>';
  document.body.appendChild(d);

  var b = document.createElement('button');
  b.type = 'button';
  b.className = 'btn sup-btn';
  b.innerHTML = '<span aria-hidden="true">♥</span><b class="sup-t"> Support</b>';
  b.title = 'Tip ' + SUPPORT.name + ' to keep this free';
  var top = document.querySelector('header.top');
  var anchor = top && top.querySelector('.btn');
  if (anchor) top.insertBefore(b, anchor); else if (top) top.appendChild(b);

  var qrDone = false;
  function drawQR() {
    if (qrDone || !SUPPORT.upi) return;
    var box = document.getElementById('sup-qr');
    if (typeof qrcode !== 'function') { box.style.display = 'none'; return; }
    var q = qrcode(0, 'M'); q.addData(upiUrl); q.make();
    box.innerHTML = q.createImgTag(6, 0, 'UPI QR code for ' + SUPPORT.upi);
    qrDone = true;
  }
  function loadQR(cb) {
    if (typeof qrcode === 'function') return cb();
    var s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js';
    s.onload = cb; s.onerror = cb; document.head.appendChild(s);
  }

  b.addEventListener('click', function () {
    if (d.showModal) d.showModal(); else d.setAttribute('open', '');
    if (SUPPORT.upi) loadQR(drawQR);
  });
  d.querySelector('#sup-x').addEventListener('click', function () { d.close ? d.close() : d.removeAttribute('open'); });
  d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
  var cp = d.querySelector('#sup-copy');
  if (cp) cp.addEventListener('click', function () {
    var done = function () { cp.textContent = 'Copied'; setTimeout(function () { cp.textContent = 'Copy'; }, 1500); };
    if (navigator.clipboard) navigator.clipboard.writeText(SUPPORT.upi).then(done, done); else done();
  });
})();
