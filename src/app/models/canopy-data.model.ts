import { MaterialIcon } from "../enums/MaterialIcon";
import { CanopyCell, ImageCard } from "./canopy-cell.model";
import { Guid, newGuid } from "./guid";


export class CanopyCellData {
  public guid: Guid;
  public entryNumber: number;
  public entryNumberSuffix!: string;
  public name: string;
  public iconSrc: string = `${MaterialIcon.Image}`;
  public entryCards: CanopyCell[] = [];
  public imageCards: ImageCard[] = [];

  constructor(entryNum: number, name: string, customEntryNumber: string, iconSrc: string, entryCards: CanopyCell[], imageCards: ImageCard[]) {
    this.guid = newGuid();
    this.entryNumber = entryNum;
    this.entryNumberSuffix = customEntryNumber || '';
    this.name = name || 'undefined';
    this.iconSrc = iconSrc || `${MaterialIcon.Image}`;
    this.entryCards = entryCards;
    this.imageCards = imageCards;
  }
}