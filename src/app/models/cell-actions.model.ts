
export interface CellActions {
  value: string;
  label: string;
  iconName?: string;
  isDelete?: boolean;
}

export enum CellActionType {
  Switch = 'switch',
  Duplicate = 'duplicate',
  Delete = 'delete',
}
