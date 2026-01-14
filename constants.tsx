
import React from 'react';
import { Droplets, Thermometer, Wind } from 'lucide-react';
import { DeviceConfig } from './types';

export const DEVICES: DeviceConfig[] = [
  {
    id: 'humidifier',
    name: '精准控湿',
    unit: '%',
    icon: <Droplets className="w-6 h-6" />,
    color: '#3b82f6',
    targetRange: [30, 80],
    defaultTarget: 50,
    startValue: 35,
    description: '精准维持最佳水分平衡，有效预防呼吸道不适及皮肤干燥。'
  },
  {
    id: 'heater',
    name: '精准控温',
    unit: '°C',
    icon: <Thermometer className="w-6 h-6" />,
    color: '#f97316',
    targetRange: [16, 30],
    defaultTarget: 24,
    startValue: 18,
    description: '采用 PID 逻辑的高效热控制，确保室内温暖稳定，避免过热波动。'
  },
  {
    id: 'purifier',
    name: '精准控净',
    unit: 'AQI',
    icon: <Wind className="w-6 h-6" />,
    color: '#22c55e',
    targetRange: [0, 100],
    defaultTarget: 10,
    startValue: 65,
    description: '持续监测并过滤空气杂质，确保您的呼吸环境达到临床级纯净。'
  }
];
