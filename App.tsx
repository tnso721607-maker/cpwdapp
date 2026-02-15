import React, { useState, useMemo } from 'react';
import { projectSummary, electricalSorData, approvedMakesData } from './data';
import { 
  Building2, 
  Search, 
  Calculator, 
  FileText, 
  ChevronRight, 
  LayoutDashboard,
  MapPin,
  Clock,
  TrendingUp,
  AlertCircle,
  Zap,
  HardHat,
  Percent,
  ShieldCheck,
  Award,
  Filter,
  List,
  Eye,
  Printer,
  Calendar,
  Wallet
} from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'electrical' | 'makes'>('dashboard');
  const [selectedSubHead, setSelectedSubHead] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [thresholdEnabled, setThresholdEnabled] = useState(false);
  const [viewMode, setViewMode] = useState<'detailed' | 'summary'>('detailed');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  
  const [electricalDiscount, setElectricalDiscount] = useState<number>(0);

  const THRESHOLD = 50000;

  const currentSorData = electricalSorData;
  const currentDiscount = electricalDiscount;

  const categories = useMemo(() => {
    const cats = new Set(approvedMakesData.map(m => m.category));
    return Array.from(cats).sort();
  }, []);

  const filteredSOR = useMemo(() => {
    if (activeTab === 'makes' || activeTab === 'dashboard') return [];
    let result = currentSorData;
    
    result = result.map(sh => ({
      ...sh,
      items: sh.items.filter(item => {
        const matchesThreshold = !thresholdEnabled || item.amount > THRESHOLD;
        const matchesSearch = !searchQuery || 
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.make && item.make.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesThreshold && matchesSearch;
      })
    })).filter(sh => sh.items.length > 0);

    if (selectedSubHead) {
      result = result.filter(sh => sh.id === selectedSubHead);
    }
    
    return result;
  }, [currentSorData, activeTab, selectedSubHead, searchQuery, thresholdEnabled]);

  const filteredMakes = useMemo(() => {
    if (activeTab !== 'makes') return [];
    return approvedMakesData.filter(m => {
      const matchesSearch = m.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            m.manufacturers.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || m.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [activeTab, searchQuery, selectedCategory]);

  const totalElectricalCalculated = useMemo(() => {
    return electricalSorData.reduce((acc, sh) => 
      acc + sh.items.reduce((shAcc, item) => shAcc + item.amount, 0), 0
    );
  }, []);

  const getDiscountedValue = (val: number, disc: number) => val * (1 - disc / 100);

  const discountedElectricalTotal = getDiscountedValue(totalElectricalCalculated, electricalDiscount);
  const discountedElectricalEstimate = getDiscountedValue(projectSummary.estimatedCost.electrical, electricalDiscount);

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(num);
  };

  const handlePrint = () => {
    window.print();
  };

  const renderDashboard = () => (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-500 print:p-0">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden print:shadow-none print:border-none">
        <div className="bg-amber-600 px-4 sm:px-6 py-4 sm:py-5 print:bg-white print:px-0">
          <h1 className="text-white font-bold text-base sm:text-xl leading-snug print:text-amber-900 print:text-2xl">{projectSummary.name}</h1>
          <p className="text-amber-100 text-[10px] sm:text-sm mt-2 font-medium opacity-90 print:text-gray-600">CPWD Tender Dashboard • Durgapur Electrical Division</p>
        </div>
        <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2 bg-amber-50 rounded-lg flex-shrink-0 print:hidden"><FileText className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" /></div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">NIT Number</p>
              <p className="text-gray-900 font-bold text-xs sm:text-sm mt-0.5">{projectSummary.nitNo}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2 bg-amber-50 rounded-lg flex-shrink-0 print:hidden"><MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" /></div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Location</p>
              <p className="text-gray-900 font-bold text-xs sm:text-sm mt-0.5">{projectSummary.location}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2 bg-amber-50 rounded-lg flex-shrink-0 print:hidden"><Clock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" /></div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Period of Completion</p>
              <p className="text-gray-900 font-bold text-xs sm:text-sm mt-0.5">{projectSummary.completionPeriod}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2 bg-amber-50 rounded-lg flex-shrink-0 print:hidden"><Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" /></div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Submission Due</p>
              <p className="text-red-600 font-black text-xs sm:text-sm mt-0.5">{projectSummary.bidSubmissionDate}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xs sm:text-sm font-bold text-amber-900 uppercase tracking-widest px-1 flex items-center gap-2">
            <Zap className="w-4 h-4" /> Financial Summary {electricalDiscount > 0 && <span className="text-amber-600 lowercase font-normal italic">({electricalDiscount}% disc)</span>}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Calculated List Total</span>
              <div className="flex flex-col mt-2">
                {electricalDiscount > 0 && <span className="text-[11px] text-gray-300 line-through font-medium mb-1">{formatCurrency(totalElectricalCalculated)}</span>}
                <p className="text-2xl font-black text-gray-900">{formatCurrency(discountedElectricalTotal)}</p>
              </div>
            </div>
            <div className="bg-amber-900 p-5 rounded-2xl shadow-md border border-amber-950 text-white">
              <span className="text-[10px] font-bold text-amber-200 uppercase tracking-widest">Total Estimated Cost</span>
              <div className="flex flex-col mt-2">
                {electricalDiscount > 0 && <span className="text-amber-300 line-through font-medium mb-1 opacity-50 text-[11px]">{formatCurrency(projectSummary.estimatedCost.electrical)}</span>}
                <p className="text-2xl font-black">{formatCurrency(discountedElectricalEstimate)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-widest px-1 flex items-center gap-2">
            <Wallet className="w-4 h-4" /> Deposit Requirements
          </h3>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 flex flex-col h-[calc(100%-2rem)]">
            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Earnest Money Deposit (EMD)</span>
            <p className="text-2xl font-black text-gray-900 mt-2">{formatCurrency(projectSummary.emd)}</p>
            <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] text-gray-400 font-medium border-t border-gray-50">
              <ShieldCheck className="w-3.5 h-3.5" /> Security deposit as per CPWD norms
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></div>
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Schedule Breakdown</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-gray-900">{electricalSorData.length} Sub-Heads</span>
          <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Tender Stage</span>
        </div>
      </div>
    </div>
  );

  const renderMakes = () => (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500 print:p-0">
      <div className="flex items-center gap-3 print:mb-6">
        <div className="p-2 bg-amber-100 rounded-lg print:hidden"><Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" /></div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Approved Manufacturers</h2>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4 print:hidden">
        <div className="flex-grow relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search items or brands..." 
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 outline-none shadow-sm transition-all text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <select 
            className="flex-grow px-4 py-3 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm font-medium focus:ring-2 focus:ring-amber-500 outline-none shadow-sm cursor-pointer"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
      </div>

      {/* Mobile Card View for Makes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4 print:hidden">
        {filteredMakes.map((m) => (
          <div key={m.id} className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col h-full hover:border-amber-500 transition-all">
            <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">SL {m.id}</span>
              <span className="text-[9px] font-bold px-2 py-0.5 rounded-lg bg-amber-50 text-amber-600 uppercase tracking-tighter border border-amber-100">
                {m.category}
              </span>
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-4 flex-grow leading-tight">{m.item}</h4>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-50">
              {m.manufacturers.split('/').map((brand, idx) => (
                <span key={idx} className="bg-white border border-gray-200 px-2 py-1 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.05)] text-[10px] font-bold text-gray-700 hover:bg-amber-50 hover:border-amber-200 transition-colors">
                  {brand.trim()}
                </span>
              ))}
            </div>
          </div>
        ))}
        {filteredMakes.length === 0 && (
          <div className="col-span-full py-12 text-center text-gray-400 font-medium bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            No manufacturers found matching your search.
          </div>
        )}
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden print:shadow-none print:border-none print:block">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest w-20">Sl. No.</th>
                <th className="px-6 py-4 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest w-48">Category</th>
                <th className="px-6 py-4 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest">Details of Materials</th>
                <th className="px-6 py-4 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest">Approved Manufacturers</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredMakes.map((m) => (
                <tr key={m.id} className="hover:bg-amber-50/20 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-xs font-bold text-amber-600">{m.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-[10px] font-bold px-2 py-1 rounded bg-gray-100 text-gray-500 uppercase tracking-tighter">{m.category}</span>
                  </td>
                  <td className="px-6 py-4 text-xs font-semibold text-gray-900 leading-relaxed">{m.item}</td>
                  <td className="px-6 py-4 text-xs text-gray-600 leading-relaxed">
                    <div className="flex flex-wrap gap-1.5">
                      {m.manufacturers.split('/').map((brand, idx) => (
                        <span key={idx} className="bg-white border border-gray-200 px-2 py-1 rounded shadow-xs text-[10px] font-bold text-gray-700">
                          {brand.trim()}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSorItems = () => {
    if (viewMode === 'summary') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 animate-in fade-in duration-300">
          {filteredSOR.map(sh => {
            const originalSectionTotal = sh.items.reduce((s, i) => s + i.amount, 0);
            const discSectionTotal = getDiscountedValue(originalSectionTotal, currentDiscount);
            return (
              <button 
                key={sh.id}
                onClick={() => { setSelectedSubHead(sh.id); setViewMode('detailed'); }}
                className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 text-left hover:border-amber-500 hover:shadow-md transition-all group"
              >
                <div className="flex justify-between items-start mb-2 sm:mb-3">
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">{sh.id}</span>
                  <div className="p-1 bg-gray-50 rounded group-hover:bg-amber-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight mb-3 sm:mb-4 group-hover:text-amber-600 transition-colors">{sh.title}</h3>
                <div className="flex flex-col border-t border-gray-50 pt-3 sm:pt-4">
                  <span className="text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5 sm:mb-1">Sub-total</span>
                  <div className="flex items-center gap-2">
                    {currentDiscount > 0 && (
                      <span className="text-[10px] sm:text-xs text-gray-400 line-through font-medium">
                        {formatCurrency(originalSectionTotal)}
                      </span>
                    )}
                    <span className="text-lg sm:text-xl font-black text-gray-900">{formatCurrency(discSectionTotal)}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      );
    }

    return (
      <div className="space-y-6 sm:space-y-10">
        {filteredSOR.map(sh => {
          const originalSectionTotal = sh.items.reduce((s, i) => s + i.amount, 0);
          const discSectionTotal = getDiscountedValue(originalSectionTotal, currentDiscount);
          return (
            <div key={sh.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden print:shadow-none print:border-none">
              <div className="bg-gray-50 border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2 print:bg-white print:border-b-2 print:border-gray-900 print:px-0">
                <h2 className="text-xs sm:text-sm font-extrabold text-amber-900 uppercase tracking-tight flex items-center gap-2 print:text-lg">
                  <ChevronRight className="w-4 h-4 text-amber-400 print:hidden flex-shrink-0" /> {sh.id}: {sh.title}
                </h2>
                <div className="flex items-center gap-3 bg-amber-50 px-2 sm:px-3 py-1 rounded-full border border-amber-100 print:bg-white print:text-black print:border-none print:px-0">
                  <span className="text-[9px] sm:text-[10px] font-bold text-amber-400 uppercase tracking-tighter">Sub-total:</span>
                  <div className="flex items-center gap-2">
                    {currentDiscount > 0 && (
                      <span className="text-[10px] sm:text-xs text-amber-300 line-through font-medium print:text-gray-400">
                        {formatCurrency(originalSectionTotal)}
                      </span>
                    )}
                    <span className="text-xs sm:text-sm font-bold text-amber-700 print:text-black print:text-lg">
                      {formatCurrency(discSectionTotal)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Card View for SOR Detailed */}
              <div className="lg:hidden divide-y divide-gray-100">
                {sh.items.map((item) => {
                  const discRate = getDiscountedValue(item.rate, currentDiscount);
                  const discAmount = getDiscountedValue(item.amount, currentDiscount);
                  return (
                    <div key={item.id} className="p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-black text-amber-600 font-mono tracking-widest">{item.id}</span>
                        <div className="text-right">
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Amount</span>
                          <div className="flex flex-col items-end">
                            {currentDiscount > 0 && <span className="text-[9px] text-gray-300 line-through">{item.amount.toLocaleString('en-IN')}</span>}
                            <span className="text-xs font-black text-gray-900">{formatCurrency(discAmount)}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-700 font-medium leading-relaxed">{item.description}</p>
                      {item.make && (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {item.make.split('/').map((brand, idx) => (
                            <span key={idx} className="bg-white border border-gray-200 px-1.5 py-0.5 rounded text-[9px] font-bold text-gray-600 shadow-[0_1px_1px_rgba(0,0,0,0.03)]">
                              {brand.trim()}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex justify-between items-center pt-2 text-[10px] font-bold">
                        <span className="text-gray-400 uppercase">Qty: <span className="text-gray-900">{item.qty} {item.unit}</span></span>
                        <span className="text-gray-400 uppercase">Rate: <span className="text-gray-900">{discRate.toLocaleString('en-IN')}</span></span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Desktop Table View for SOR Detailed */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50/50 print:bg-white">
                    <tr>
                      <th className="px-3 sm:px-6 py-3 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest w-20 print:text-black">Code</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest min-w-[300px] print:text-black">Description</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest min-w-[180px] print:text-black">Approved Make</th>
                      <th className="px-3 sm:px-6 py-3 text-right text-[10px] font-bold text-gray-400 uppercase tracking-widest w-20 print:text-black">Qty</th>
                      <th className="px-3 sm:px-6 py-3 text-right text-[10px] font-bold text-gray-400 uppercase tracking-widest w-32 print:text-black">Rate</th>
                      <th className="px-3 sm:px-6 py-3 text-right text-[10px] font-bold text-gray-400 uppercase tracking-widest w-40 print:text-black">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sh.items.map((item) => {
                      const discRate = getDiscountedValue(item.rate, currentDiscount);
                      const discAmount = getDiscountedValue(item.amount, currentDiscount);
                      return (
                        <tr key={item.id} className="hover:bg-amber-50/20 transition-colors print:hover:bg-transparent">
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs font-mono font-bold text-amber-600 print:text-black">{item.id}</td>
                          <td className="px-3 sm:px-6 py-4 text-xs text-gray-700 leading-relaxed print:text-black">{item.description}</td>
                          <td className="px-3 sm:px-6 py-4 text-[10px] font-medium print:text-black">
                            {item.make ? (
                              <div className="flex flex-wrap gap-1">
                                {item.make.split('/').map((brand, idx) => (
                                  <span key={idx} className="inline-block bg-white border border-gray-200 px-1.5 py-0.5 rounded shadow-xs text-[10px] text-gray-700 font-bold">
                                    {brand.trim()}
                                  </span>
                                ))}
                              </div>
                            ) : '-'}
                          </td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs text-right text-gray-600 font-medium print:text-black">
                            {typeof item.qty === 'number' ? item.qty.toLocaleString('en-IN') : item.qty} <span className="text-[10px] text-gray-400 lowercase">{item.unit}</span>
                          </td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs text-right print:text-black">
                            <div className="flex flex-col items-end">
                              {currentDiscount > 0 && (
                                <span className="text-[10px] text-gray-400 line-through mb-0.5">
                                  {item.rate.toLocaleString('en-IN', { maximumFractionDigits: 1 })}
                                </span>
                              )}
                              <span className="text-gray-900 font-bold">{discRate.toLocaleString('en-IN', { maximumFractionDigits: 1 })}</span>
                            </div>
                          </td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs text-right bg-amber-50/30 print:bg-transparent print:text-black">
                            <div className="flex flex-col items-end">
                              {currentDiscount > 0 && (
                                <span className="text-[10px] text-amber-300 line-through mb-0.5 print:text-gray-400">
                                  {item.amount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                </span>
                              )}
                              <span className="font-black text-amber-900 print:text-black">{discAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 selection:bg-amber-100 selection:text-amber-900">
      <nav className="bg-amber-900 text-white sticky top-0 z-50 shadow-lg border-b border-amber-800 print:hidden">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className="bg-white p-1 rounded sm:rounded-lg">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-amber-900" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs sm:text-base tracking-tight uppercase leading-none">CPWD</span>
                <span className="text-[8px] sm:text-[9px] text-amber-300 uppercase tracking-[0.1em] sm:tracking-[0.2em] font-black truncate max-w-[100px] sm:max-w-none">Tender System</span>
              </div>
            </div>
            <div className="flex items-center gap-0.5 sm:gap-2 ml-auto overflow-x-auto no-scrollbar">
              <button onClick={() => setActiveTab('dashboard')} className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-bold transition-all uppercase tracking-wider whitespace-nowrap ${activeTab === 'dashboard' ? 'bg-amber-800 shadow-inner' : 'text-amber-100 hover:bg-amber-800/50'}`}>
                <LayoutDashboard className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> <span>Dash</span>
              </button>
              <button onClick={() => { setActiveTab('electrical'); setSelectedSubHead(null); setViewMode('detailed'); }} className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-bold transition-all uppercase tracking-wider whitespace-nowrap ${activeTab === 'electrical' ? 'bg-amber-800 shadow-inner' : 'text-amber-100 hover:bg-amber-800/50'}`}>
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> <span>Items</span>
              </button>
              <button onClick={() => { setActiveTab('makes'); setSelectedSubHead(null); setSearchQuery(''); }} className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-bold transition-all uppercase tracking-wider whitespace-nowrap ${activeTab === 'makes' ? 'bg-amber-800 shadow-inner' : 'text-amber-100 hover:bg-amber-800/50'}`}>
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> <span>Makes</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-white border-b border-gray-200 py-2 sm:py-3 px-3 sm:px-4 print:hidden sticky top-[56px] sm:top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center justify-center sm:justify-start gap-1 bg-gray-100 p-1 rounded-lg">
            <button 
              onClick={() => setViewMode('detailed')} 
              className={`flex-grow sm:flex-none px-3 sm:px-4 py-1.5 rounded-md text-[10px] sm:text-xs font-bold uppercase transition-all flex items-center justify-center gap-1 ${viewMode === 'detailed' ? 'bg-white shadow-sm text-amber-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <List className="w-3.5 h-3.5" /> Detailed
            </button>
            <button 
              onClick={() => setViewMode('summary')} 
              className={`flex-grow sm:flex-none px-3 sm:px-4 py-1.5 rounded-md text-[10px] sm:text-xs font-bold uppercase transition-all flex items-center justify-center gap-1 ${viewMode === 'summary' ? 'bg-white shadow-sm text-amber-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <Eye className="w-3.5 h-3.5" /> Summary
            </button>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-6 overflow-x-auto no-scrollbar py-0.5">
            <div className="flex items-center gap-2 border-r pr-3 sm:pr-6 border-gray-200 flex-shrink-0">
              <span className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest hidden xs:inline">Filter:</span>
              <button onClick={() => setThresholdEnabled(!thresholdEnabled)} className={`text-[9px] sm:text-[10px] font-black uppercase px-2 sm:px-3 py-1.5 rounded-full transition-all border whitespace-nowrap ${thresholdEnabled ? 'bg-amber-600 border-amber-600 text-white' : 'bg-white border-gray-200 text-gray-600'}`}>
                {thresholdEnabled ? "Major Items" : "All Items"}
              </button>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[9px] sm:text-[10px] font-black text-amber-800 uppercase flex items-center gap-0.5"><Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3"/> Disc %:</span>
                <input type="number" value={electricalDiscount} onChange={(e) => setElectricalDiscount(Number(e.target.value))} className="w-10 sm:w-14 px-1 py-1 text-[10px] sm:text-xs border border-gray-200 rounded-lg font-bold outline-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow max-w-7xl mx-auto w-full px-3 sm:px-6 lg:px-8 py-4 sm:py-8 print:p-0 mb-20 sm:mb-24">
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'makes' && renderMakes()}
        {activeTab === 'electrical' && (
          <div className="space-y-4 sm:space-y-6 animate-in slide-in-from-bottom-4 duration-500 print:p-0">
            <div className="flex flex-col gap-3 items-center justify-between print:hidden">
              <div className="flex-grow relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input type="text" placeholder={`Search SOR items...`} className="w-full pl-10 pr-4 py-3 rounded-xl sm:rounded-2xl border border-gray-200 focus:ring-2 focus:ring-amber-500 outline-none shadow-sm transition-all text-sm" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              </div>
              <div className="flex gap-2 w-full">
                <select className="flex-grow px-3 sm:px-4 py-3 rounded-xl sm:rounded-2xl border border-gray-200 bg-white text-xs sm:text-sm font-bold text-gray-700 focus:ring-2 focus:ring-amber-500 outline-none shadow-sm" value={selectedSubHead || ''} onChange={(e) => { setSelectedSubHead(e.target.value || null); setViewMode('detailed'); }}>
                  <option value="">Full Schedule</option>
                  {electricalSorData.map(sh => <option key={sh.id} value={sh.id}>{sh.id}: {sh.title}</option>)}
                </select>
                <button onClick={() => { setSelectedSubHead(null); setSearchQuery(''); setThresholdEnabled(false); setViewMode('detailed'); }} className="px-4 sm:px-6 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 text-[10px] sm:text-sm font-bold rounded-xl sm:rounded-2xl transition-all shadow-sm">Reset</button>
              </div>
            </div>

            {renderSorItems()}
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 p-3 sm:p-4 fixed bottom-0 left-0 right-0 z-40 shadow-[0_-8px_30px_rgb(0,0,0,0.12)] print:hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex flex-col overflow-hidden">
            <span className="text-[8px] sm:text-[10px] text-gray-400 font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] truncate">
              {activeTab === 'dashboard' ? 'Total Project Estimate' : 
               activeTab === 'makes' ? 'Approved Brands' : `Total Amount`}
            </span>
            <span className="font-black text-base sm:text-2xl text-gray-900 tracking-tight truncate">
              {activeTab === 'dashboard' ? formatCurrency(discountedElectricalEstimate) : 
               activeTab === 'makes' ? `${approvedMakesData.length} Manufacturers` :
               formatCurrency(discountedElectricalTotal)}
            </span>
          </div>
          <button 
            onClick={handlePrint}
            className="flex-shrink-0 flex px-4 sm:px-6 py-2.5 sm:py-3 bg-amber-900 hover:bg-amber-800 text-white font-bold rounded-xl sm:rounded-2xl transition-all shadow-lg active:scale-95 items-center gap-1.5 sm:gap-2"
          >
            <Printer className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> <span className="text-xs sm:text-sm">Print</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;