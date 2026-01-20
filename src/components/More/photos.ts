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
    title: "2024",
    src: "2024scioly_vehicle.2400x1735.png",
    alt: "2024 Science Olympiad - Vehicle",
  },
  {
    title: "2023",
    src: "2023scioly_vehicle.2400x3060.png",
    alt: "2023 Science Olympiad - Vehicle",
  },
  {
    title: "2022",
    src: "2022scioly_vehicle.2400x5000.png",
    alt: "2022 Science Olympiad - Vehicle",
  },
  {
    title: "2024",
    src: "2023scioly_flight.2400x1950.png",
    alt: "2024,2023 Science Olympiad - Flight",
  },
  {
    title: "2022",
    src: "2022scioly_flight.2400x2490.png",
    alt: "2022 Science Olympiad - Electric Wright Stuff",
  },
  {
    title: "2024",
    src: "2024scioly_windpower.2400x2150.png",
    alt: "2024 Science Olympiad - Wind Power - Blades and Airfoil Sanding Block",
  },
  {
    title: "2024",
    src: "2024scioly_towerjig.2400x1350.png",
    alt: "2024 Science Olympiad - Built Jig for Tower Team",
  },
  {
    title: "2024",
    src: "2024summer_robot_car.2400x2152.png",
    alt: "2024 Summer - Personal Projects - Smart Robot Car",
  },
  {
    title: "2024",
    src: "2024summer_irremote_dcmotor.2400x2152.jpg",
    alt: "2024 Summer - Personal Projects - IR Remote DC Motor",
  },
  {
    title: "2024",
    src: "2024summer_joystick_dcmotor.2400x1300.jpg",
    alt: "2024 Summer - Personal Projects - Joystick DC Motor",
  },
  {
    title: "2024",
    src: "2024summer_lcd_sensor.2400x2038.jpg",
    alt: "2024 Summer - Personal Projects - LCD Sensor",
  },
  {
    title: "2023",
    src: "2023tryout.2400x1092.png",
    alt: "2023 Daniel Wright Science Olympiad tryout - Stellated Tetrahedron",
  },
  {
    title: "2023",
    src: "2023summer_tank.2400x3040.png",
    alt: "2023 Summer - Personal Projects - Tank with Physical Simulation",
  },
  {
    title: "2023",
    src: "2023summer_mouse.2400x1600.png",
    alt: "2023 Summer - Personal Projects - Mouse",
  },
  {
    title: "2022",
    src: "2022tryout.2400x1600.png",
    alt: "2022 Daniel Wright Science Olympiad tryout - Stellated Cuboctrahedron",
  },
  {
    title: "2022",
    src: "2022summer_robot.2400x2562.png",
    alt: "2022 Summer - Personal Projects - Robot",
  },
  {
    title: "2022",
    src: "2022summer_donut.2400x2562.png",
    alt: "2022 Summer - Personal Projects - Donut",
  },
  {
    title: "2021",
    src: "2021tryout.2400x2956.jpg",
    alt: "2021 Daniel Wright Science Olympiad tryout - Truncated Tetrahedron",
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
