/*! Eretek Online Araçlar #56 — Yedekleme Penceresi ve Bant Genişliği */
ERT.def('56', {
	run: function (v, c) {
		var eff = (v.eff || 100) / 100, bits = v.size * 8e9, sec = v.win * 3600, need = bits / sec / 1e6 / eff, kv = [[c.t('need'), c.n(need, 1) + ' Mbit/s (' + c.n(need / 8, 1) + ' MB/s)']], msgs = [], vv = { need: Math.round(need * 100) / 100 };
		if (v.link) {
			var t = bits / (v.link * 1e6 * eff); vv.hours = Math.round(t / 3600 * 1000) / 1000;
			kv.push([c.t('dur'), c.dur(t)], [c.t('util'), c.pct(need / v.link, 0)]);
			msgs.push(t <= sec ? ['ok', c.t('fits', { d: c.dur(t) })] : ['err', c.t('nofit', { d: c.dur(t - sec) })]);
		}
		msgs.push(['info', c.t('eff', { e: c.n(eff * 100, 0) })], ['info', c.t('units')]);
		return { big: c.n(need, 1) + ' Mbit/s', kv: kv, msgs: msgs, x: { copy: kv.map(function (r) { return r[0] + ': ' + r[1]; }).join('\n') }, v: vv };
	}
});
