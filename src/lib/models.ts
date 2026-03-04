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
    title: "Electric Vehicle V3.2 - Chassis (Slim Version)",
    thumbSrc: "/models/EV32.png",
    glbUrl: "/models/Slim.glb",
  },
  {
    id: "ev-chassis",
    title: "Electric Vehicle V3.1 - Chassis",
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
    title: "Engineering CAD - Chainaxe",
    thumbSrc: "/models/Chainaxe.png",
    glbUrl: "/models/Chainaxe.glb",
  },
  {
    id: "pc",
    title: "Engineering CAD - Pneumatic Cylinder",
    thumbSrc: "/models/PC.png",
    glbUrl: "/models/PC.glb",
  },
];
