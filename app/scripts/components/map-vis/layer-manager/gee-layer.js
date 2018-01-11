import L from 'leaflet';

export default (leafletMap, layerSpec) => {
  const { id, layerIndex, opacity } = layerSpec;
  const tileUrl = `${config.apiUrlRW}/layer/${id}/tile/gee/{z}/{x}/{y}`;
  const layer = L.tileLayer(tileUrl);

  layer.setZIndex(layerIndex);

  // If visibility is enabled, set opacity to zero
  if (visibility) {
    layer.setOpacity(opacity);
  } else {
    layer.setOpacity(0);
  }

  // adding map
  leafletMap.addLayer(layer);

  return new Promise((resolve, reject) => {
    layer.on('tileload', () => resolve(layer));
    layer.on('tileerror', err => reject(err));
  });
};
