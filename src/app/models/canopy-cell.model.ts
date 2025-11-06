import { CanopyCellType } from "../enums/CanopyCellType";
import { MaterialIcon } from "../enums/MaterialIcon";
import { Guid, newGuid } from "./guid";

export class CanopyCell {
  public guid: Guid;
  public index: number;
  public entryCardType: CanopyCellType;
  public title: string;
  public value: string;

  constructor(index: number = -1, title: string, value: string, entryType?: CanopyCellType ) {
    this.guid = newGuid();
    this.index = index;
    this.entryCardType = entryType || CanopyCellType.Text;
    this.title = title;
    this.value = value || '';
  }

  public toString = () : string => {
    return this.value;
  }
}

export class ImageCard extends CanopyCell {
  constructor(index: number, title: string, value: string = `${MaterialIcon.Image}`) {
    super(index, title, value, CanopyCellType.Image);
  }
}

export class ListCard extends CanopyCell {
  public items: string[] = [];
  constructor(index: number, title: string, value: string, items: string[] = ['default']) {
    super(index, title, items[0], CanopyCellType.List);
    this.items = items;
  }

  public getItems(): string[] {
    return this.items;
  }
}