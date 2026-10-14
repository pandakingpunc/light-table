/* Dil desteği: İngilizce (varsayılan) ve Türkçe */
(function () {
  'use strict';
  const LT = (window.LT = window.LT || {});

  const STR = {
    en: {
      title: 'Light Table',
      sub: 'prism · lens · soap bubble · diamond',
      scenesAria: 'Preset scenes',
      langAria: 'Language',
      'scene.karma': 'Mix',
      'scene.prizma': 'Prism',
      'scene.mercek': 'Lens',
      'scene.elmas': 'Diamond',
      'scene.kopuk': 'Bubbles',
      settings: 'Settings',
      capLight: 'Light',
      capObject: 'Objects',
      'tool.beam': 'Beam',
      'tool.point': 'Point',
      'tool.laser': 'Laser',
      'tool.prism': 'Prism',
      'tool.lens': 'Lens',
      'tool.diamond': 'Diamond',
      'tool.bubble': 'Bubble',
      'tip.beam': 'Light beam (parallel white light)',
      'tip.point': 'Point light',
      'tip.laser': 'Laser (single color)',
      'tip.prism': 'Prism',
      'tip.lens': 'Lens',
      'tip.diamond': 'Diamond',
      'tip.bubble': 'Soap bubble',
      hint: '<b>Drag</b> to move · <b>Wheel</b> to rotate · <b>Shift + wheel</b> to resize · <b>Double-click</b> to pop a bubble · <b>Del</b> to delete',
      'name.beam': 'Light beam',
      'name.point': 'Point light',
      'name.laser': 'Laser',
      'name.prism': 'Prism',
      'name.lens': 'Lens',
      'name.diamond': 'Diamond',
      'name.bubble': 'Soap bubble',
      'mat.su': 'Water',
      'mat.kron': 'Crown',
      'mat.flint': 'Flint',
      'mat.elmas': 'Diamond',
      width: 'Width',
      spread: 'Spread',
      color: 'Color',
      white: 'White',
      mono: 'Single color',
      wavelength: 'Wavelength',
      brightness: 'Brightness',
      direction: 'Direction',
      size: 'Size',
      film: 'Film thickness',
      filmNote: 'Interference colors shift as the thickness changes.',
      pop: 'Pop',
      lensType: 'Type',
      convex: 'Convex',
      concave: 'Concave',
      material: 'Material',
      abbe: 'Abbe number',
      apex: 'Apex angle',
      focal: 'Focal length',
      rotate: 'Rotate',
      duplicate: 'Duplicate',
      del: 'Delete',
      exposure: 'Light intensity',
      dispersion: 'Dispersion',
      off: 'off',
      glow: 'Haze / glow',
      refl: 'Surface reflections',
      view: 'View',
      viewLight: 'Light beams',
      viewRays: 'Ray lines',
      drift: 'Bubbles drift',
      savePng: 'Save PNG',
      pngName: 'light-table.png',
      clear: 'Clear table',
      noWebgl: 'WebGL2 does not work in this browser: ',
      errNoGl: 'WebGL2 unavailable',
      errNoFloat: 'No float render target',
      error: 'ERROR: ',
    },
    tr: {
      title: 'Işık Masası',
      sub: 'prizma · mercek · sabun köpüğü · elmas',
      scenesAria: 'Hazır sahneler',
      langAria: 'Dil',
      'scene.karma': 'Karma',
      'scene.prizma': 'Prizma',
      'scene.mercek': 'Mercek',
      'scene.elmas': 'Elmas',
      'scene.kopuk': 'Köpük',
      settings: 'Ayarlar',
      capLight: 'Işık',
      capObject: 'Nesne',
      'tool.beam': 'Işın',
      'tool.point': 'Nokta',
      'tool.laser': 'Lazer',
      'tool.prism': 'Prizma',
      'tool.lens': 'Mercek',
      'tool.diamond': 'Elmas',
      'tool.bubble': 'Köpük',
      'tip.beam': 'Işın demeti (paralel beyaz ışık)',
      'tip.point': 'Nokta ışık',
      'tip.laser': 'Lazer (tek renk)',
      'tip.prism': 'Prizma',
      'tip.lens': 'Mercek',
      'tip.diamond': 'Elmas',
      'tip.bubble': 'Sabun köpüğü',
      hint: '<b>Sürükle</b> taşı · <b>Tekerlek</b> döndür · <b>Shift + tekerlek</b> boyutlandır · <b>Çift tık</b> köpüğü patlat · <b>Del</b> sil',
      'name.beam': 'Işın demeti',
      'name.point': 'Nokta ışık',
      'name.laser': 'Lazer',
      'name.prism': 'Prizma',
      'name.lens': 'Mercek',
      'name.diamond': 'Elmas',
      'name.bubble': 'Sabun köpüğü',
      'mat.su': 'Su',
      'mat.kron': 'Kron',
      'mat.flint': 'Flint',
      'mat.elmas': 'Elmas',
      width: 'Genişlik',
      spread: 'Açıklık',
      color: 'Renk',
      white: 'Beyaz',
      mono: 'Tek renk',
      wavelength: 'Dalga boyu',
      brightness: 'Parlaklık',
      direction: 'Yön',
      size: 'Boyut',
      film: 'Film kalınlığı',
      filmNote: 'Kalınlık değiştikçe girişim renkleri kayar.',
      pop: 'Patlat',
      lensType: 'Tür',
      convex: 'Dışbükey',
      concave: 'İçbükey',
      material: 'Malzeme',
      abbe: 'Abbe sayısı',
      apex: 'Tepe açısı',
      focal: 'Odak uzaklığı',
      rotate: 'Döndür',
      duplicate: 'Çoğalt',
      del: 'Sil',
      exposure: 'Işık parlaklığı',
      dispersion: 'Dispersiyon',
      off: 'yok',
      glow: 'Sis / parıltı',
      refl: 'Yüzey yansımaları',
      view: 'Görünüm',
      viewLight: 'Işık huzmesi',
      viewRays: 'Işın çizgileri',
      drift: 'Köpükler süzülsün',
      savePng: 'PNG kaydet',
      pngName: 'isik-masasi.png',
      clear: 'Masayı boşalt',
      noWebgl: 'Bu tarayıcıda WebGL2 çalışmıyor: ',
      errNoGl: 'WebGL2 yok',
      errNoFloat: 'Float render hedefi yok',
      error: 'HATA: ',
    },
  };

  // öncelik: ?lang=tr adres parametresi > kayıtlı seçim > İngilizce
  function initialLang() {
    const q = /[?&#]lang=(en|tr)\b/.exec(location.search + location.hash);
    if (q) return q[1];
    try {
      const s = localStorage.getItem('lt-lang');
      if (STR[s]) return s;
    } catch (e) {}
    return 'en';
  }

  LT.lang = initialLang();
  LT.t = (k) => (STR[LT.lang][k] !== undefined ? STR[LT.lang][k] : STR.en[k] !== undefined ? STR.en[k] : k);

  // index.html'deki data-i18n* öznitelikli öğeleri doldur
  LT.applyLang = function () {
    document.documentElement.lang = LT.lang;
    document.title = LT.t('title');
    document.querySelectorAll('[data-i18n]').forEach((e) => (e.textContent = LT.t(e.dataset.i18n)));
    document.querySelectorAll('[data-i18n-html]').forEach((e) => (e.innerHTML = LT.t(e.dataset.i18nHtml)));
    document.querySelectorAll('[data-i18n-title]').forEach((e) => (e.title = LT.t(e.dataset.i18nTitle)));
    document.querySelectorAll('[data-i18n-aria]').forEach((e) => e.setAttribute('aria-label', LT.t(e.dataset.i18nAria)));
    document.querySelectorAll('#lang button').forEach((b) => b.classList.toggle('on', b.dataset.lang === LT.lang));
  };

  LT.setLang = function (l) {
    if (!STR[l] || l === LT.lang) return;
    LT.lang = l;
    try {
      localStorage.setItem('lt-lang', l);
    } catch (e) {}
    LT.applyLang();
    if (LT.onLangChanged) LT.onLangChanged();
  };

  document.querySelectorAll('#lang button').forEach((b) => b.addEventListener('click', () => LT.setLang(b.dataset.lang)));
  LT.applyLang();
})();
