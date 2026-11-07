// Alterna tres grupos de precio: económico, intermedio y alto.
// Se recalculan sobre los resultados para mantener el patrón al filtrar.
function orderProductsByPriceRows(items) {
    const flowers = items.filter(p => !p.peluche).sort((a, b) => a.price - b.price || a.id - b.id);
    const rows = Math.ceil(flowers.length / 3);
    const middleSize = Math.ceil((flowers.length - rows) / 2);
    const groups = [flowers.slice(0, rows), flowers.slice(rows, rows + middleSize), flowers.slice(rows + middleSize)];
    const ordered = [];
    for (let row = 0; row < rows; row++) {
        for (const group of groups) {
            if (group[row]) ordered.push(group[row]);
        }
    }
    return ordered.concat(items.filter(p => p.peluche));
}
