import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, Search, Filter, Smartphone, Globe, Brain, Code, Gamepad2, FileText, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Category mapping for projects
const getCategoryInfo = (title, description) => {
  const lowerTitle = title.toLowerCase();
  const lowerDesc = description.toLowerCase();
  
  if (lowerTitle.includes('mobile') || lowerTitle.includes('app') || lowerDesc.includes('react native') || lowerDesc.includes('mobile')) {
    return { category: 'Mobile', icon: Smartphone, color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-900/20', textColor: 'text-blue-600 dark:text-blue-400' };
  }
  if (lowerTitle.includes('web') || lowerTitle.includes('scraping') || lowerDesc.includes('web') || lowerDesc.includes('scraping')) {
    return { category: 'Web', icon: Globe, color: 'from-green-500 to-green-600', bgColor: 'bg-green-50 dark:bg-green-900/20', textColor: 'text-green-600 dark:text-green-400' };
  }
  if (lowerTitle.includes('ai') || lowerTitle.includes('ml') || lowerTitle.includes('neural') || lowerTitle.includes('cnn') || lowerTitle.includes('detection') || lowerTitle.includes('classification') || lowerDesc.includes('deep learning') || lowerDesc.includes('machine learning') || lowerDesc.includes('ai')) {
    return { category: 'AI/ML', icon: Brain, color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-900/20', textColor: 'text-purple-600 dark:text-purple-400' };
  }
  if (lowerTitle.includes('game') || lowerTitle.includes('puzzle') || lowerTitle.includes('breaker')) {
    return { category: 'Games', icon: Gamepad2, color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-50 dark:bg-orange-900/20', textColor: 'text-orange-600 dark:text-orange-400' };
  }
  if (lowerTitle.includes('design') || lowerTitle.includes('system') || lowerTitle.includes('ui') || lowerTitle.includes('ux')) {
    return { category: 'Design', icon: Code, color: 'from-pink-500 to-pink-600', bgColor: 'bg-pink-50 dark:bg-pink-900/20', textColor: 'text-pink-600 dark:text-pink-400' };
  }
  return { category: 'Research', icon: FileText, color: 'from-gray-500 to-gray-600', bgColor: 'bg-gray-50 dark:bg-gray-900/20', textColor: 'text-gray-600 dark:text-gray-400' };
};

const PDFCard = ({ title, filename, description, onOpen, index }) => {
  const { t } = useTranslation();
  const categoryInfo = getCategoryInfo(title, description);
  const IconComponent = categoryInfo.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer transition-all duration-300 hover:shadow-2xl overflow-hidden"
      onClick={onOpen}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${categoryInfo.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
      
      {/* Content */}
      <div className="relative z-10">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 ${categoryInfo.bgColor} rounded-xl flex items-center justify-center`}>
                <IconComponent className={`w-5 h-5 ${categoryInfo.textColor}`} />
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${categoryInfo.bgColor} ${categoryInfo.textColor}`}>
                {categoryInfo.category}
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
            {title}
          </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full font-medium">
              {t("portfolio.pdfDocument")}
            </span>
            <span className="text-xs text-gray-400">
              {t("portfolio.clickToView")}
        </span>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Eye className="w-4 h-4 text-gray-400" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const PDFModal = ({ isOpen, onClose, title, pdfUrl }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-2 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-7xl h-[95vh] sm:h-[90vh] bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white truncate pr-4">
                {title}
              </h2>
              <div className="flex items-center gap-1 sm:gap-2">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" />
                </a>
                <a
                  href={pdfUrl}
                  download
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  title="Download PDF"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" />
                </a>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
            
            {/* PDF Viewer */}
            <div className="h-full p-2 sm:p-4 bg-gray-50 dark:bg-gray-800">
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                className="w-full h-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white"
                title={title}
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const PDFViewer = ({ caseStudies, showAll = false }) => {
  const { t } = useTranslation();
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllStudies, setShowAllStudies] = useState(showAll);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);

  // Close filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All'];
    caseStudies.forEach(study => {
      const categoryInfo = getCategoryInfo(study.title, study.description);
      if (!cats.includes(categoryInfo.category)) {
        cats.push(categoryInfo.category);
      }
    });
    return cats;
  }, [caseStudies]);

  // Filter and search logic
  const filteredStudies = useMemo(() => {
    let filtered = caseStudies;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(study => 
        study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(study => {
        const categoryInfo = getCategoryInfo(study.title, study.description);
        return categoryInfo.category === selectedCategory;
      });
    }

    return filtered;
  }, [caseStudies, searchQuery, selectedCategory]);

  const displayedStudies = showAllStudies ? filteredStudies : filteredStudies.slice(0, 3);

  const openPDF = (study) => {
    setSelectedPDF(study);
    setIsModalOpen(true);
  };

  const closePDF = () => {
    setIsModalOpen(false);
    setSelectedPDF(null);
  };

  return (
    <>
      {/* Search and Filter Bar */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search case studies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Filter Button */}
          <div className="relative" ref={filterRef}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <Filter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {selectedCategory}
              </span>
            </motion.button>

            {/* Filter Dropdown */}
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50"
                  style={{ zIndex: 9999 }}
                >
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsFilterOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 first:rounded-t-xl last:rounded-b-xl transition-colors ${
                        selectedCategory === category ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          {t("portfolio.showingCount", { displayed: displayedStudies.length, total: filteredStudies.length })}
          {searchQuery && ` ${t("portfolio.forQuery", { query: searchQuery })}`}
          {selectedCategory !== 'All' && ` ${t("portfolio.inCategory", { category: selectedCategory })}`}
        </div>
      </div>

      {/* Case Studies Grid */}
      {displayedStudies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedStudies.map((study, index) => (
          <PDFCard
            key={index}
            title={study.title}
            filename={study.filename}
            description={study.description}
            onOpen={() => openPDF(study)}
              index={index}
          />
        ))}
      </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t("portfolio.noCaseStudies")}</h3>
          <p className="text-gray-600 dark:text-gray-400">
            {t("portfolio.tryAdjusting")}
          </p>
        </div>
      )}

      {/* Show More/Less Button */}
      {!showAllStudies && filteredStudies.length > 3 && (
        <div className="text-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAllStudies(true)}
            className="px-8 py-3 bg-gradient-to-r from-[#c18b34] to-[#e0b352] hover:from-[#a67529] hover:to-[#c18b34] text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t("portfolio.showMore", { count: filteredStudies.length - 3 })}
          </motion.button>
        </div>
      )}

      {showAllStudies && filteredStudies.length > 3 && (
        <div className="text-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAllStudies(false)}
            className="px-8 py-3 bg-gradient-to-r from-[#86602c] to-[#c18b34] hover:from-[#6b4d23] hover:to-[#a67529] text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t("portfolio.showLess")}
          </motion.button>
        </div>
      )}

      <PDFModal
        isOpen={isModalOpen}
        onClose={closePDF}
        title={selectedPDF?.title || ''}
        pdfUrl={selectedPDF?.url || ''}
      />
    </>
  );
};

export default PDFViewer;