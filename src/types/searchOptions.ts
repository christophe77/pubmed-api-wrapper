export type ESearchOptions = {
  minDate?: string;
  maxDate?: string;
  retStart?: string;
  retMax?: string;
  retType?: string;
  dateType?: string;
  relDate?: string;
  useHistory?: boolean
} | undefined;

export type ESummaryOptions = {
  retStart ?: string;
  retMax ?: string;
  version ?: string;
} | undefined;
