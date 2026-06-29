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
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

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
            THAO TÁC CƠ BẢN VỚI TỆP TIN VÀ THƯ MỤC
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
              I. Tóm tắt nội dung thực hành
            </h2>
            <div className="bg-[#0a0a12] border border-slate-800 p-6 md:p-8 space-y-4">
              <p className="mb-4 text-slate-300">Bài thực hành bao gồm các thao tác cơ bản sau trên hệ điều hành Windows:</p>
              <ul className="list-decimal pl-5 space-y-3 text-slate-400">
                <li><strong className="text-slate-200">Mở File Explorer:</strong> Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục.</li>
                <li><strong className="text-slate-200">Truy cập ổ đĩa/thư mục:</strong> Vào This PC, nhấp đúp vào ổ đĩa không phải hệ thống (VD: D: hoặc E:) hoặc thư mục Documents.</li>
                <li><strong className="text-slate-200">Tạo thư mục mới:</strong> Nhấp chuột phải vào khoảng trống {'->'} chọn New {'->'} Folder. Đặt tên thư mục là ThucHanh_TranTrongDai.</li>
                <li><strong className="text-slate-200">Vào thư mục:</strong> Nhấp đúp vào thư mục vừa tạo.</li>
                <li><strong className="text-slate-200">Tạo tệp tin văn bản:</strong> Nhấp chuột phải {'->'} New {'->'} Text Document. Đặt tên là GhiChu.txt.</li>
                <li><strong className="text-slate-200">Đổi tên tệp tin:</strong> Nhấp chuột phải vào tệp {'->'} chọn Rename. Đổi tên thành GhiChuQuanTrong.txt.</li>
                <li><strong className="text-slate-200">Tạo thư mục con:</strong> Nhấp chuột phải {'->'} New {'->'} Folder. Đặt tên là TaiLieu.</li>
                <li><strong className="text-slate-200">Sao chép tệp tin (Copy & Paste):</strong> Nhấp chuột phải vào tệp {'->'} Copy (hoặc Ctrl + C). Vào thư mục TaiLieu, chọn Paste (hoặc Ctrl + V).</li>
                <li><strong className="text-slate-200">Di chuyển tệp tin (Cut & Paste):</strong> Tạo tệp DiChuyen.txt, chọn Cut (hoặc Ctrl + X). Vào thư mục TaiLieu, chọn Paste (hoặc Ctrl + V).</li>
                <li><strong className="text-slate-200">Xóa tệp tin:</strong> Nhấp chuột phải vào tệp {'->'} chọn Delete. Tệp sẽ được chuyển vào Thùng rác (Recycle Bin).</li>
                <li><strong className="text-slate-200">Xóa vĩnh viễn:</strong> Chọn tệp, nhấn giữ phím Shift + Delete. Tệp sẽ bị xóa mà không qua Thùng rác.</li>
                <li><strong className="text-slate-200">Khôi phục từ Thùng rác (Restore):</strong> Mở Recycle Bin, nhấp chuột phải vào tệp đã xóa và chọn Restore để đưa tệp về vị trí cũ.</li>
              </ul>
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