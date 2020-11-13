import p1 from "osequi-test-lerna-react-p1";
import p3 from "osequi-test-lerna-react-p3";
import p4 from "osequi-test-lerna-react-p4";

export type TP2 = {
  name: string;
};

const p2 = {
  name: "Zolika xxx es" + p1.name + p3.name + p4.name,
};

export default p2;
