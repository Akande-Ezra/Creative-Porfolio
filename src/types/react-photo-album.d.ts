declare module "react-photo-album" {
  import { ComponentType } from "react";

  export interface Photo {
    src: string;
    width: number;
    height: number;
    alt?: string;
    key?: string;
  }

  export interface RenderPhotoProps {
    photo: Photo;
    layout: string;
    index: number;
    wrapperStyle: React.CSSProperties;
    renderDefaultPhoto: (props?: { wrapped?: boolean }) => React.ReactNode;
  }

  export interface PhotoAlbumProps {
    layout: "rows" | "columns" | "masonry";
    photos: Photo[];
    onClick?: (props: { photo: Photo; index: number; event: React.MouseEvent }) => void;
    renderPhoto?: (props: RenderPhotoProps) => React.ReactNode;
    columns?: number | ((containerWidth: number) => number);
    spacing?: number | ((containerWidth: number) => number);
    targetRowHeight?: number | ((containerWidth: number) => number);
  }

  const PhotoAlbum: ComponentType<PhotoAlbumProps>;
  export default PhotoAlbum;
}
