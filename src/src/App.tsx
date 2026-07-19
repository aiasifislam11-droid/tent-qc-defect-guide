import React, { useState } from 'react';
import { defectsData } from './data';
import { Defect, DefectCategory } from './types';
import { ShieldAlert, AlertTriangle, CheckCircle, MessageSquare, Image as ImageIcon, Search, Send, RefreshCw } from 'lucide-react';

export default function App() {
  const [defects, setDefects] = useState<Defect[]>(defectsData);
  const [activeTab, setActiveTab] = useState<DefectCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // AI Chat State
  const [chatMessages, setChatMessages] = useState<{ sender: 'user' | 'ai'; text: string }[]>([
    { sender: 'ai', text: 'হ্যালো! আমি টেন্ট কিউসি অ্যাসিস্ট্যান্ট। ডিফেক্ট ক্যাটাগরি বা লজিক নিয়ে যেকোনো প্রশ্ন এখানে করতে পারেন।' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  // Image Upload Trigger
  const handleImageChange = (defectId: number) => {
    const newUrl = prompt("নতুন ইমেজ ইউআরএল (URL) দিন:");
    if (newUrl && newUrl.trim() !== "") {
      setDefects(prev => prev.map(d => d.id === defectId ? { ...d, image: newUrl } : d));
    }
  };

  // Bot Logic
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage.trim();
    const newMessages = [...chatMessages, { sender: 'user', text: userText }];
    setChatMessages(newMessages);
    setInputMessage('');

    // Simple Database Search AI Matching
    setTimeout(() => {
      const foundDefect = defects.find(d => 
        d.name.toLowerCase().includes(userText.toLowerCase()) || 
        d.bengaliName.includes(userText)
      );

      let aiResponse = "দুঃখিত, এই ডিফেক্টটি সম্পর্কে আমার কাছে বিস্তারিত তথ্য নেই। দয়া করে সঠিক নাম লিখুন।";
      
      if (foundDefect) {
        const cats = foundDefect.categories.join(' ও ');
        let reasonStr = "";
        if (foundDefect.reasoning?.Critical) reasonStr += `\n• Critical এর কারণ: ${foundDefect.reasoning.Critical}`;
        if (foundDefect.reasoning?.Major) reasonStr += `\n• Major এর কারণ: ${foundDefect.reasoning.Major}`;
        if (foundDefect.reasoning?.Minor) reasonStr += `\n• Minor এর কারণ: ${foundDefect.reasoning.Minor}`;

        aiResponse = `**${foundDefect.name} (${foundDefect.bengaliName})** এটি মূলত **${cats}** ক্যাটাগরির ডিফেক্ট।\n${reasonStr}`;
      }

      setChatMessages(prev => [...prev, { sender: 'ai', text: aiResponse }]);
    }, 600);
  };

  // Filter Logic
  const filteredDefects = defects.filter(defect => {
    const matchesTab = activeTab === 'All' || defect.categories.includes(activeTab);
    const matchesSearch = defect.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          defect.bengaliName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-md p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-wide">⛺ TENT FACTORY QUALITY SYSTEM</h1>
            <p className="text-xs text-slate-400">কোয়ালিটি কন্ট্রোল চেকিং ও ডিফেক্ট ম্যাট্রিক্স</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-2.5 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="ডিফেক্ট সার্চ করুন..." 
              className="w-full bg-slate-800 text-white text-sm pl-9 pr-4 py-2 rounded-lg border border-slate-750 focus:outline-none focus:border-emerald-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 w-full">
        {/* Left 2 Columns: Defect List */}
        <div className="lg:col-span-2 space-y-4">
          {/* Tabs */}
          <div className="flex bg-white p-1 rounded-xl shadow-sm border border-slate-200 overflow-x-auto">
            {(['All', 'Critical', 'Major', 'Minor'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
                  activeTab === tab 
                    ? 'bg-slate-900 text-white shadow-sm' 
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab === 'All' ? 'সব ডিফেক্ট (৩০)' : tab}
              </button>
            ))}
          </div>

          {/* Defect Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDefects.map(defect => (
              <div key={defect.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col justify-between">
                <div>
                  {/* Image Holder */}
                  <div className="relative h-44 bg-slate-100 group">
                    <img src={defect.image} alt={defect.name} className="w-full h-full object-cover" />
                    <button 
                      onClick={() => handleImageChange(defect.id)}
                      className="absolute bottom-2 right-2 bg-black/70 hover:bg-black text-white p-2 rounded-lg text-xs flex items-center gap-1 opacity-90 transition-opacity"
                    >
                      <RefreshCw className="w-3 h-3" /> ছবি পরিবর্তন
                    </button>
                  </div>

                  {/* Body Info */}
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <span className="text-xs font-mono text-slate-400">#{defect.id}</span>
                        <h3 className="text-base font-bold text-slate-800">{defect.name}</h3>
                        <p className="text-sm text-slate-600 font-medium">{defect.bengaliName}</p>
                      </div>
                    </div>

                    {/* Badge Container */}
                    <div className="flex flex-wrap gap-1.5">
                      {defect.categories.map(cat => (
                        <span key={cat} className={`text-xs px-2.5 py-0.5 rounded-full font-bold inline-flex items-center gap-1 ${
                          cat === 'Critical' ? 'bg-red-50 text-red-700 border border-red-200' :
                          cat === 'Major' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                          'bg-slate-100 text-slate-700'
                        }`}>
                          {cat === 'Critical' && <ShieldAlert className="w-3 h-3" />}
                          {cat === 'Major' && <AlertTriangle className="w-3 h-3" />}
                          {cat === 'Minor' && <CheckCircle className="w-3 h-3" />}
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Dynamic Reasoning Rendering */}
                    <div className="pt-2 border-t border-slate-100 space-y-1 text-xs text-slate-500">
                      {defect.reasoning?.Critical && (
                        <p><strong className="text-red-600">Critical এর কারণ:</strong> {defect.reasoning.Critical}</p>
                      )}
                      {defect.reasoning?.Major && (
                        <p><strong className="text-amber-600">Major এর কারণ:</strong> {defect.reasoning.Major}</p>
                      )}
                      {defect.reasoning?.Minor && (
                        <p><strong className="text-slate-600">Minor এর কারণ:</strong> {defect.reasoning.Minor}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Column: AI Chatbot Window */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 h-[600px] flex flex-col sticky top-24">
          <div className="p-4 border-b border-slate-200 bg-slate-900 text-white rounded-t-xl flex items-center gap-2">
            <MessageSquare className="text-emerald-400 w-5 h-5" />
            <div>
              <h2 className="font-bold text-sm">AI QC Assistant</h2>
              <p className="text-[10px] text-slate-400">টেন্ট ডিফেক্ট নলেজ বেস</p>
            </div>
          </div>

          {/* Chat Bubble Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-lg p-2.5 text-xs shadow-sm whitespace-pre-line ${
                  msg.sender === 'user' 
                    ? 'bg-slate-900 text-white rounded-tr-none' 
                    : 'bg-white text-slate-850 border border-slate-200 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input Form */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-200 flex gap-2">
            <input 
              type="text" 
              placeholder="যেমন: Open Seam কেন Major?"
              className="flex-1 bg-slate-100 rounded-lg px-3 text-xs focus:outline-none focus:ring-1 focus:ring-slate-900"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button type="submit" className="bg-slate-900 text-white p-2 rounded-lg hover:bg-slate-800">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
            }
      
