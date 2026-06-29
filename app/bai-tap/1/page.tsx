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
        
        {/* Nút Trở về */}
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
            THAO TÁC CƠ BẢN VỚI TỆP TIN VÀ THƯ MỤC TRÊN WINDOWS
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 border-b border-slate-800 pb-8 mb-12 font-bold tracking-widest">
            <span>// AUTHOR: TRẦN TRỌNG ĐẠI</span>
            <span>// ID: 25023098</span>
            <span className="text-amber-400">// STATUS: VERIFIED</span>
          </div>
        </motion.div>

        {/* Nội dung chi tiết */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="space-y-16 text-slate-400 leading-relaxed text-sm md:text-base">
          
          {/* Phần 1 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> 
              I. Khởi động & Tạo mới Thư mục
            </h2>
            <div className="bg-[#0a0a12] border border-slate-800 p-6 md:p-8">
              <p className="mb-4">Các bước đầu tiên để tiếp cận hệ thống quản lý tệp tin trên Windows:</p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-amber-400">►</span>
                  <span><strong className="text-slate-200">Mở File Explorer:</strong> Sử dụng tổ hợp phím <code className="text-amber-400 bg-amber-400/10 px-1 rounded">Windows + E</code> hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ. Truy cập vào <code className="text-white">This PC</code> để chọn ổ đĩa lưu trữ (VD: ổ D, E hoặc C).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400">►</span>
                  <span><strong className="text-slate-200">Khởi tạo Thư mục:</strong> Nhấp chuột phải vào không gian trống, chọn <code className="text-white">New {'->'} Folder</code>. Khởi tạo thư mục gốc mang tên <code className="text-amber-400 bg-amber-400/10 px-1 rounded">ThucHanh_TranTrongDai</code>.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Phần 2 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> 
              II. Quản lý Tệp tin Văn bản & Điều hướng
            </h2>
            <p className="mb-6">Thực hiện các lệnh tương tác cơ bản (Tạo, Đổi tên, Sao chép, Di chuyển) với tệp tin bên trong thư mục gốc vừa tạo.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#0a0a12] border border-slate-800 p-6 hover:border-slate-600 transition-colors">
                <div className="text-xs font-bold text-amber-400 mb-4 tracking-widest">// TẠO & ĐỔI TÊN (RENAME)</div>
                <p>Tạo tệp văn bản bằng cách nhấp chuột phải <code className="text-white">New {'->'} Text Document</code> với tên <code className="text-white">GhiChu.txt</code>. Sau đó, sử dụng lệnh Rename để đổi tên tệp thành định dạng chuẩn <code className="text-amber-400 bg-amber-400/10 px-1 rounded">GhiChuQuanTrong.txt</code>.</p>
              </div>
              <div className="bg-[#0a0a12] border border-slate-800 p-6 hover:border-cyan-400 transition-colors">
                <div className="text-xs font-bold text-cyan-400 mb-4 tracking-widest">// SAO CHÉP & DI CHUYỂN</div>
                <p>Khởi tạo thư mục con <code className="text-white">TaiLieu</code>. Thực hiện sao chép tệp tin bằng <code className="text-white">Ctrl + C</code> và dán vào thư mục con bằng <code className="text-white">Ctrl + V</code>. Tiếp tục tạo tệp <code className="text-white">DiChuyen.txt</code>, dùng lệnh Cut (<code className="text-white">Ctrl + X</code>) để dời tệp sang vị trí mới.</p>
              </div>
            </div>
          </section>

          {/* Phần 3 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> 
              III. Các thao tác Xóa và Khôi phục
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Xóa Tạm thời", desc: "Nhấp chuột phải vào tệp -> chọn Delete. Tệp sẽ được chuyển vào Recycle Bin." },
                { title: "Xóa Vĩnh viễn", desc: "Chọn tệp, nhấn giữ phím Shift + Delete. Cảnh báo hiển thị, tệp bị xóa vĩnh viễn." },
                { title: "Khôi phục (Restore)", desc: "Mở Recycle Bin, tìm tệp đã xóa, nhấp chuột phải và chọn Restore để đưa về vị trí cũ." }
              ].map((item, idx) => (
                <div key={idx} className="group flex flex-col gap-2 bg-[#0a0a12] border border-slate-800 p-5 hover:border-amber-400 transition-colors">
                  <span className="text-xl font-black text-slate-800 group-hover:text-amber-400 transition-colors leading-none">
                    0{idx + 1}
                  </span>
                  <h3 className="text-white font-bold mt-2">{item.title}</h3>
                  <p className="text-sm font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Phần 4: Nhúng file PDF trực tiếp */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-400 animate-pulse"></span> 
              IV. TÀI LIỆU BÁO CÁO GỐC (PDF)
            </h2>
            <div className="bg-[#0a0a12] border border-slate-800 p-2 shadow-2xl h-[700px] w-full relative group">
              {/* Trang trí góc viền */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-400"></div>
              
              {/* Lưu ý: Bạn cần đảm bảo file ThucHanh_TranTrongDai.pdf nằm trong thư mục public/lesson/ */}
              <iframe 
                src="/lesson/lesson1.pdf" 
                className="w-full h-full border-none rounded-sm"
                title="Báo cáo Bài tập 1 - Trần Trọng Đại"
              />
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center tracking-widest">// SYSTEM.VIEWER: Trình duyệt hỗ trợ xem trực tiếp tệp tin ThucHanh_TranTrongDai.pdf.</p>
          </section>

        </motion.div>
      </div>
    </main>
  );
}
