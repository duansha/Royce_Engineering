// lib/models.ts
export type ModelItem = {
  id: string;
  title: string;
  thumbSrc: string;
  glbUrl: string; // path under /public
};

export const modelItems: ModelItem[] = [
  {
    id: "ev-chassis-slim",
    title: "EV V3.2 - Chassis (Slim Version)",
    thumbSrc: "/models/EV32.png",
    glbUrl: "/models/Slim.glb",
  },
  {
    id: "ev-chassis",
    title: "EV V3.1 - Chassis",
    thumbSrc: "/models/EV.png",
    glbUrl: "/models/EV.glb",
  },
  {
    id: "winder",
    title: "Rubber Motor Winder for Helicopter Team",
    thumbSrc: "/models/Winder.png",
    glbUrl: "/models/Winder.glb",
  },
  {
    id: "chainaxe",
    title: "Chainaxe - Engineering CAD",
    thumbSrc: "/models/Chainaxe.png",
    glbUrl: "/models/Chainaxe.glb",
  },
  {
    id: "pc",
    title: "Pneumatic Cylinder - Engineering CAD",
    thumbSrc: "/models/PC.png",
    glbUrl: "/models/PC.glb",
  },
  {
    id: "pc2",
    title: "PileBunker - Engineering CAD",
    thumbSrc: "/models/PileBunker.png",
    glbUrl: "/models/Bunker-optimized.glb",
  },
];
