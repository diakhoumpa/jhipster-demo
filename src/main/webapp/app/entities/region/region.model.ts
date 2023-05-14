export interface IRegion {
  id: number;
  regionName?: string | null;
  secondName?: string | null;
}

export type NewRegion = Omit<IRegion, 'id'> & { id: null };
