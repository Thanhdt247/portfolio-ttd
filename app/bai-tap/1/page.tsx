'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Exercise1() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main className="min-h-screen bg-[#050509] text-slate-300 font-mono relative selection:bg-amber-400 selection:text-black pb-24">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', bgSize: '40px 40px' }}></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 relative z-10">
        
        {/* Nút Quay lại hệ thống */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12">
          <Link href="/#bai-tap" className="inline-flex items-center gap-3 text-amber-400 hover:text-cyan-400 transition-colors text-sm font-bold tracking-widest uppercase bg-slate-900/50 px-4 py-2 border border-slate-800 rounded-sm hover:border-cyan-900">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            QUAY LẠI HỆ THỐNG
          </Link>
        </motion.div>

        {/* Header Báo cáo */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 bg-slate-800 text-cyan-400 text-xs font-bold tracking-widest rounded-sm border border-slate-700 uppercase">
              BT 01
            </span>
            <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs font-bold tracking-widest rounded-sm border border-slate-700 uppercase">
              Hệ thống máy tính cơ bản
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
            MÁY TÍNH VÀ THIẾT BỊ NGOẠI VI
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 border-b border-slate-800 pb-8 mb-12 font-bold tracking-widest">
            <span>// AUTHOR: TRẦN TRỌNG ĐẠI</span>
            <span>// ID: 25023098</span>
            <span className="text-amber-400">// STATUS: INITIALIZED</span>
          </div>
        </motion.div>

        {/* Nội dung chi tiết */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="space-y-16 text-slate-400 leading-relaxed text-sm md:text-base">
          
          {/* Phần I */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> 
              I. Tóm tắt nội dung
            </h2>
            <div className="bg-[#0a0a12] border border-slate-800 p-6 md:p-8 space-y-4">
              <p>Phần này bạn có thể cập nhật thêm thông tin tóm tắt dựa vào file bài làm thực tế của Đại. Hiện tại hệ thống đang kết nối trực tiếp đến báo cáo PDF để hiển thị nguyên bản.</p>
            </div>
          </section>

          {/* Phần Trình xem file PDF trực tiếp */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-400 animate-pulse"></span> 
              II. TÀI LIỆU BÁO CÁO GỐC (PDF)
            </h2>
            <div className="bg-[#0a0a12] border border-slate-800 p-2 shadow-2xl h-[700px] w-full relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-400"></div>
              
              {/* Đảm bảo bạn đã chép file lesson1.pdf vào thư mục public/lesson/ */}
              <iframe 
                src="/lesson/lesson1.pdf" 
                className="w-full h-full border-none rounded-sm"
                title="Báo cáo Bài tập 1"
              />
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center tracking-widest">// SYSTEM.VIEWER: Hệ thống đồng bộ dữ liệu kết nối trực tiếp tệp tin lesson1.pdf.</p>
          </section>

        </motion.div>
      </div>
    </main>
  );
}