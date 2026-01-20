import type { Photo } from "react-photo-album";

const breakpoints = []; //[1080, 640, 384, 256, 128, 96, 64, 48];

function imageLink(
  path: string,
  width: number,
  height: number,
  size: number,
  extension: string,
) {
  return `/images/build/more/${path}.${width}x${height}.${size}w.${extension}`;
}

const photos = [
  {
    title: "2025",
    src: "1_2025scioly_ev2.2400x3600.jpg",
    alt: "Science Olympiad - Electrical Vehicle V2",
  },
  {
    title: "2025",
    src: "1_2025scioly_ev2.2400x2400.png",
    alt: "Science Olympiad - Electrical Vehicle V2",
  },

  {
    title: "2025",
    src: "1_2025scioly_ev.2400x3200.jpg",
    alt: "Science Olympiad - Electrical Vehicle",
  },
  {
    title: "2025",
    src: "1_2025scioly_ev.2400x3100.jpg",
    alt: "Science Olympiad - Electrical Vehicle",
  },
  {
    title: "2025",
    src: "1_2025scioly_robot.2400x2100.png",
    alt: "Science Olympiad - Robot tour",
  },
  {
    title: "2025",
    src: "1_2025scioly_robot.2400x2000.png",
    alt: "Science Olympiad - Robot tour",
  },
  {
    title: "2024",
    src: "2024scioly_vehicle.2400x1735.png",
    alt: "Science Olympiad - Vehicle - State Final",
  },
  {
    title: "2024",
    src: "1_2024scioly_flight1.2400x1360.png",
    alt: "Science Olympiad - Flight -State Final - UIUC Armory",
  },
  {
    title: "2024",
    src: "1_2024scioly_flight2.2400x1360.png",
    alt: "Science Olympiad - Flight -State Final - UIUC Armory 4:17",
  },
  {
    title: "2025",
    src: "2023summer_tank.2400x3040.png",
    alt: "Science Olympiad - Engineering CAD",
  },
  {
    title: "2025",
    src: "2024summer_irremote_dcmotor.2400x2152.jpg",
    alt: "Science Olympiad - Engineering CAD - product1",
  },
  {
    title: "2025",
    src: "2024summer_joystick_dcmotor.2400x1300.jpg",
    alt: "Science Olympiad - Engineering CAD - product2",
  },
  {
    title: "2025",
    src: "2024summer_lcd_sensor.2400x2038.jpg",
    alt: "Science Olympiad - Engineering CAD - product3",
  },
  {
    title: "2025",
    src: "2023tryout.2400x1092.png",
    alt: "Science Olympiad - Engineering CAD - product4",
  },
  {
    title: "2023",
    src: "2023summer_tank.2400x3040.png",
    alt: "Personal Projects - Tank with Physical Simulation",
  },
  {
    title: "2022",
    src: "2022tryout.2400x1600.png",
    alt: "Daniel Wright Science Olympiad tryout - Stellated Cuboctrahedron",
  },
  {
    title: "2020",
    src: "transformer.2400x2328.png",
    alt: "2020 Half Day School Talent Show - Optimus Prime",
  },
].map(({ src, ...rest }) => {
  const matcher = src.match(/^(.*)\.(\d+)x(\d+)\.(.*)$/)!;

  const path = matcher[1];
  const width = Number.parseInt(matcher[2], 10);
  const height = Number.parseInt(matcher[3], 10);
  const extension = matcher[4];

  return {
    src: imageLink(path, width, height, width, extension),
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => ({
      src: imageLink(path, width, height, breakpoint, extension),
      width: breakpoint,
      height: Math.round((height / width) * breakpoint),
    })),
    ...rest,
  } as Photo;
});

export default photos;
