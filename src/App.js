import React, { useState } from 'react';
import { Search, MapPin, BookOpen, Utensils, Mic, Globe } from 'lucide-react';

export default function MoroccoPediaApp() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Navigation */}
      <nav className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-orange-600">MoroccoPedia</h1>
        <div className="flex gap-4">
          <button onClick={() => setActiveTab('home')} className="hover:text-orange-500">الرئيسية</button>
          <button onClick={() => setActiveTab('dictionary')} className="hover:text-orange-500">القاموس</button>
        </div>
      </nav>

      <main className="p-6 max-w-4xl mx-auto">
        {activeTab === 'home' && (
          <section>
            <div className="bg-orange-100 p-8 rounded-3xl mb-8 text-center">
              <h2 className="text-3xl font-bold mb-4">اكتشف كنوز المغرب</h2>
              <div className="relative max-w-lg mx-auto">
                <input className="w-full p-4 rounded-full pl-12 shadow-lg outline-none" placeholder="ابحث عن مدينة، حرفة، أو تقليد..." />
                <Search className="absolute left-4 top-4 text-gray-400" />
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-2 gap-4">
              <FeatureCard icon={<MapPin />} title="الخريطة التفاعلية" color="bg-blue-500" />
              <FeatureCard icon={<Utensils />} title="المطبخ الإقليمي" color="bg-green-500" />
              <FeatureCard icon={<BookOpen />} title="التاريخ المحلي" color="bg-purple-500" />
              <FeatureCard icon={<Globe />} title="تقاليد وعادات" color="bg-yellow-500" />
            </div>
          </section>
        )}

        {activeTab === 'dictionary' && (
          <section className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Mic /> القاموس التفاعلي للهجات
            </h2>
            <div className="space-y-4">
              <WordEntry word="دابا" region="شمال/وسط" translation="الآن" />
              <WordEntry word="إيه" region="مراكش" translation="نعم" />
              <WordEntry word="واخا" region="عام" translation="حسناً" />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, color }) {
  return (
    <div className={`${color} text-white p-6 rounded-2xl cursor-pointer hover:scale-105 transition-transform flex flex-col items-center gap-2`}>
      {icon}
      <span className="font-bold">{title}</span>
    </div>
  );
}

function WordEntry({ word, region, translation }) {
  return (
    <div className="border-b pb-4 flex justify-between items-center">
      <div>
        <h4 className="text-xl font-bold text-orange-600">{word}</h4>
        <p className="text-sm text-gray-500">المنطقة: {region}</p>
      </div>
      <div className="text-right">
        <p className="font-semibold">{translation}</p>
        <button className="text-blue-500 underline text-xs">استمع للفظ</button>
      </div>
    </div>
  );
}