'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { FiArrowLeft, FiFilter, FiX } from 'react-icons/fi';
import { CategoryDropDown } from './CategoryDropDown';
import { DifficultyDropDown } from './DifficultyDropDown';
import { useInterviewFilters } from '@/main/hooks/useInterviewFiltersHook';
import { motion, AnimatePresence } from 'framer-motion';

export const TechnologyHeader: React.FC = () => {
  const router = useRouter();
  const { technology } = useParams() as { technology: string };
  const { category, difficulty, updateSearchParams, resetFilters, hasFilters, activeFilterCount } = useInterviewFilters();

  const techName = technology.split('-') .map(w => w.charAt(0).toUpperCase() + w.slice(1)) .join(' ');

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Back & Title */}
        <div className="flex items-center gap-4">
          <motion.button onClick={() => router.back()} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors" aria-label="Go back">
            <FiArrowLeft className="w-5 h-5 text-gray-300" />
          </motion.button>

          <h1 className="text-2xl font-semibold text-white">{techName} Interviews</h1>
        </div>

        {/* Desktop Filters */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <FiFilter className="w-5 h-5" />
            <span className="text-sm">Filter by:</span>
          </div>

          <CategoryDropDown />
          <DifficultyDropDown />

          {/* No separate Clear All button here; handled by badge */}
        </div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(true)} className="flex items-center gap-1 text-sm text-gray-300 bg-gray-800 px-3 py-2 rounded-md hover:bg-gray-700 transition">
            <FiFilter className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Active Filter Badges */}
      <AnimatePresence>
        {hasFilters && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-4 pb-4 container mx-auto flex flex-wrap gap-2">
            {/* Category Badge */}
            {category && <Badge label={`Category: ${category}`} onClear={() => updateSearchParams({ category: '' })} />}

            {/* Difficulty Badge */}
            {difficulty && <Badge label={`Difficulty: ${difficulty}`} onClear={() => updateSearchParams({ difficulty: '' })} />}

            {/* Active Count Badge */}
            <Badge label={`${activeFilterCount} Active`} />

            {/* Clear All Badge */}
            <Badge label="Clear All" onClear={resetFilters} variant="danger" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Filter Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 bg-gray-900/90 backdrop-blur-md z-30 p-4 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-white">Filters</h2>
              <button onClick={() => setMobileOpen(false)} aria-label="Close filters">
                <FiX className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <CategoryDropDown />
              <DifficultyDropDown />
            </div>

            {hasFilters && (
              <button
                onClick={() => {
                  resetFilters();
                  setMobileOpen(false);
                }}
                className="mt-auto text-center bg-red-500/20 text-red-400 py-2 rounded-md hover:bg-red-500/30 transition"
              >
                Clear All Filters
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Badge Component
const Badge: React.FC<{
  label: string;
  onClear?: () => void;
  variant?: 'default' | 'danger';
}> = ({ label, onClear, variant = 'default' }) => (
  <div
    className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full transition-colors whitespace-nowrap
      ${variant === 'danger' ? 'bg-red-600/20 text-red-400 hover:bg-red-600/30' : 'bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600/30'}
    `}
  >
    <span>{label}</span>
    {onClear && (
      <button onClick={onClear} className="hover:text-current">
        <FiX className="w-4 h-4" />
      </button>
    )}
  </div>
);
