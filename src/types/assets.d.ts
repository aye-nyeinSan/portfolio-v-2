declare module "*.glb" {
  const src: string;
  export default src;
}

declare module "meshline" {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

import type { Object3DNode } from '@react-three/fiber';
import type { MeshLineGeometry as MeshLineGeometryImpl, MeshLineMaterial as MeshLineMaterialImpl } from 'meshline';

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: Object3DNode<MeshLineGeometryImpl, typeof MeshLineGeometryImpl>;
    meshLineMaterial: Object3DNode<MeshLineMaterialImpl, typeof MeshLineMaterialImpl>;
  }
}
