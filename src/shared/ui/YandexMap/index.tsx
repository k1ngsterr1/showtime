const ymaps3Reactify = await ymaps3.import("@yandex/ymaps3-reactify");
const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);
const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } =
  reactify.module(ymaps3);

<YMap location={{ center: [25.229762, 55.289311], zoom: 9 }} mode="vector">
  <YMapDefaultSchemeLayer />
  <YMapDefaultFeaturesLayer />

  <YMapMarker
    coordinates={[25.229762, 55.289311]}
    draggable={true}
  ></YMapMarker>
</YMap>;
