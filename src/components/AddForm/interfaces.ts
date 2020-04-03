export interface IProps {
  valueAmount: string;
  setValueAmount(val: string): void;
  valueWeight: string;
  setValueWeight(val: string): void;
  onPostDate(): void;
  selectedExercise: string;
}
