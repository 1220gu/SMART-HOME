
export type DeviceType = 'humidifier' | 'heater' | 'purifier';

export interface DataPoint {
  time: string;
  normalValue: number;
  precisionValue: number;
}

export interface DeviceConfig {
  id: DeviceType;
  name: string;
  unit: string;
  icon: React.ReactNode;
  color: string;
  targetRange: [number, number];
  defaultTarget: number;
  startValue: number;
  description: string;
}

export interface AIAdvice {
  summary: string;
  efficiency: number;
  impact: string;
}
