
import React, { useState } from 'react';
import { DEVICES } from './constants';
import DeviceDashboard from './components/DeviceDashboard';
import { Home, Settings, Bell, LayoutGrid } from 'lucide-react';
import { DeviceType } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DeviceType>('humidifier');

  const currentDevice = DEVICES.find(d => d.id === activeTab) || DEVICES[0];

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans selection:bg-blue-500 selection:text-white">
      {/* 侧边导航栏 */}
      <nav className="w-full md:w-24 glass border-r-0 md:border-r border-white/5 flex flex-row md:flex-col items-center justify-between p-4 md:py-8 sticky top-0 md:h-screen z-50">
        <div className="flex flex-row md:flex-col items-center gap-8">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
            <LayoutGrid className="text-white w-6 h-6" />
          </div>
          <div className="hidden md:flex flex-col gap-6">
            <button className="p-3 text-slate-400 hover:text-white transition-colors"><Home className="w-6 h-6" /></button>
            <button className="p-3 text-slate-400 hover:text-white transition-colors"><Bell className="w-6 h-6" /></button>
            <button className="p-3 text-slate-400 hover:text-white transition-colors"><Settings className="w-6 h-6" /></button>
          </div>
        </div>
        
        <div className="flex flex-row md:flex-col items-center gap-4">
          <button className="p-1 border-2 border-slate-700 rounded-full">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full" />
          </button>
        </div>
      </nav>

      {/* 主内容区域 */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
        {/* 顶部标题栏 */}
        <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">"温湿净"精控</h1>
            <p className="text-slate-400 mt-1 font-medium">监测并管理临床级室内环境指标</p>
          </div>
          
          {/* 设备切换标签 */}
          <div className="flex p-1 bg-slate-800/50 rounded-xl border border-slate-700 self-start md:self-end">
            {DEVICES.map(device => (
              <button
                key={device.id}
                onClick={() => setActiveTab(device.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === device.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                  : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {device.icon}
                <span className="inline">{device.name}</span>
              </button>
            ))}
          </div>
        </header>

        {/* 控制中心内容 */}
        <DeviceDashboard config={currentDevice} />

        {/* 页脚信息 */}
        <footer className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500" /> 所有系统运行正常</span>
            <span>已持续运行: 142 天</span>
          </div>
          <div>© 2024 精准家居逻辑系统 • AI 云端连接已就绪</div>
        </footer>
      </main>
    </div>
  );
};

export default App;
