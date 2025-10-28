export interface TreeNodeType {
  id: string;
  label: string;
  isAnswer?: boolean;
  children?: TreeNodeType[];
}
