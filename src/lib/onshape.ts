export type OnshapeItem = {
  id: string;
  title: string;
  thumbSrc: string; // local /public or remote CDN
  embedUrl: string; // Onshape "share/embed" URL
};

export const onshapeItems: OnshapeItem[] = [
  {
    id: "ev-chassis",
    title: "EV Chassis",
    thumbSrc: "/onshape/ev-chassis.jpg",
    embedUrl: "https://cad.onshape.com/documents/XXXX/w/YYYY/e/ZZZZ", // replace
  },
  {
    id: "ev-chassis2",
    title: "EV Chassis",
    thumbSrc: "/onshape/ev-chassis.jpg",
    embedUrl: "https://cad.onshape.com/documents/XXXX/w/YYYY/e/ZZZZ", // replace
  },
  // ...
];
