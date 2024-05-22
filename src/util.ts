function e(t: any) {
  let e, n, r, i;
  return (
    t / Math.pow(10, 9) > 1
      ? ((e = t / Math.pow(10, 9)),
        (n = +e.toFixed(3).toString()),
        (r = n.toString().split('.')),
        (i =
          r[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') +
          (r[1] ? ',' + r[1] : '')))
      : ((e = t / Math.pow(10, 6)),
        (i = (+e.toFixed(3).toString()).toString().replace('.', ','))),
    i
  );
}

export function MoneyText(t: any, n = false, r = false) {
  if (
    (!t.minPrice && !t.maxPrice) ||
    (t.minPrice === 0 && void 0 === t.maxPrice)
  )
    return 'Đang cập nhật';
  {
    0;
    let n = '';
    return Number(e(t.minPrice, r).split(',').join('')) == 0
      ? 'Đang cập nhật'
      : ((n += e(t.minPrice, r)),
        t.maxPrice &&
          t.maxPrice !== t.minPrice &&
          (n += ' - ' + e(t.maxPrice, r)),
        (n += ''),
        (n += ''),
        (n += (function (t) {
          return t.maxPrice
            ? t.maxPrice > Math.pow(10, 9)
            : t.minPrice > Math.pow(10, 9);
        })(t)
          ? ' Tỷ'
          : ' Triệu'),
        n);
  }
}
