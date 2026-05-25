'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Exercise6() {
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
              BT 06
            </span>
            <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs font-bold tracking-widest rounded-sm border border-slate-700 uppercase">
              Khai thác tri thức học thuật
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
            TÌM KIẾM VÀ ĐÁNH GIÁ THÔNG TIN HỌC THUẬT
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 border-b border-slate-800 pb-8 mb-12 font-bold tracking-widest">
            <span>// AUTHOR: TRẦN TRỌNG ĐẠI</span>
            <span>// ID: 25023098</span>
            <span className="text-amber-400">// STATUS: INDEXED</span>
          </div>
        </motion.div>

        {/* Nội dung chi tiết */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="space-y-16 text-slate-400 leading-relaxed text-sm md:text-base">
          
          {/* Phần I */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> 
              I. Tổng quan & Phạm vi cấu hình tìm kiếm
            </h2>
            <div className="bg-[#0a0a12] border border-slate-800 p-6 md:p-8 space-y-4">
              <p>Chủ đề nghiên cứu tập trung vào việc ứng dụng ngôn ngữ lập trình Python trong tự động hóa phân tích Dữ liệu lớn (Big Data). Tham số giới hạn phạm vi tìm kiếm bao gồm:</p>
              <ul className="space-y-3 pl-4">
                <li className="flex gap-2"><span className="text-cyan-400 font-bold">&gt; Từ khóa:</span> <span>Python for Data Analysis, Python Big Data, Data Science Python tools, Python vs SQL in Big Data.</span></li>
                <li className="flex gap-2"><span className="text-cyan-400 font-bold">&gt; Thời gian:</span> <span>Cấu hình bộ lọc từ năm 2016 đến nay nhằm bảo mật tính cập nhật công nghệ.</span></li>
                <li className="flex gap-2"><span className="text-cyan-400 font-bold">&gt; Ngôn ngữ:</span> <span>Tiếng Anh (ngôn ngữ nền tảng chính của khoa học máy tính).</span></li>
              </ul>
            </div>
          </section>

          {/* Phần II */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> 
              II. Chiến lược khai thác dữ liệu từ 4 nhóm nguồn
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-slate-800 p-5 bg-[#0a0a12]">
                <div className="text-xs font-bold text-slate-500 mb-2">// 01. CƠ SỞ DỮ LIỆU HỌC THUẬT</div>
                <p className="text-sm">Khai thác qua Google Scholar và ResearchGate để thu thập các báo cáo chuyên sâu về Python trên nền tảng điện toán đám mây.</p>
              </div>
              <div className="border border-slate-800 p-5 bg-[#0a0a12]">
                <div className="text-xs font-bold text-slate-500 mb-2">// 02. TẠP CHÍ & KỶ YẾU HỘI THẢO</div>
                <p className="text-sm">Truy xuất dữ liệu hiệu suất thuật toán từ tạp chí Nanotechnology Perceptions và hội thảo E3S Web of Conferences.</p>
              </div>
              <div className="border border-slate-800 p-5 bg-[#0a0a12]">
                <div className="text-xs font-bold text-slate-500 mb-2">// 03. SÁCH CHUYÊN KHẢO</div>
                <p className="text-sm">Trích lọc tài liệu nền tảng giáo khoa của các chuyên gia hàng đầu (Wes McKinney, Jake VanderPlas) qua O'Reilly Media và Springer.</p>
              </div>
              <div className="border border-slate-800 p-5 bg-[#0a0a12]">
                <div className="text-xs font-bold text-slate-500 mb-2">// 04. NGUỒN MỞ SỐ INTERNET</div>
                <p className="text-sm">Tổng hợp các xu hướng phân tích công nghệ trên nền tảng Medium (Data and Beyond) và học liệu mở từ Đại học Washington.</p>
              </div>
            </div>
          </section>

          {/* Phần III */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> 
              III. Ma trận Đánh giá độ tin cậy (Tổng hợp 12 tài liệu)
            </h2>
            <div className="bg-[#0a0a12] border border-slate-800 p-6 space-y-6">
              <p className="text-sm">Hệ thống đã chọn lọc và chấm điểm kiểm định dựa trên 5 tiêu chí (Tác giả, Nhà xuất bản, Phương pháp, Trích dẫn, Cập nhật):</p>
              <div className="space-y-4 text-sm divide-y divide-slate-900">
                <div className="pt-2 flex flex-col sm:flex-row justify-between gap-2">
                  <div>
                    <span className="text-white font-bold block">Wes McKinney - Python for Data Analysis (Sách)</span>
                    <span className="text-xs text-slate-500">Độ tin cậy tuyệt đối do chính tác giả sáng lập thư viện Pandas biên soạn.</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-1 border border-emerald-500/20 h-fit w-fit">RẤT CAO</span>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row justify-between gap-2">
                  <div>
                    <span className="text-white font-bold block">Jake VanderPlas - Python Data Science Handbook (Sách)</span>
                    <span className="text-xs text-slate-500">Giải thích cặn kẽ cách các mảng dữ liệu (NumPy) hoạt động, làm nền tảng Big Data.</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-1 border border-emerald-500/20 h-fit w-fit">RẤT CAO</span>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row justify-between gap-2">
                  <div>
                    <span className="text-white font-bold block">IEEE Xplore / Springer / ACM Digital Library (Báo cáo khoa học)</span>
                    <span className="text-xs text-slate-500">Các bài báo thực nghiệm đo lường hiệu suất kết hợp SQL & Python trên đám mây và IoT Industry 4.0.</span>
                  </div>
                  <span className="text-xs text-cyan-400 font-mono font-bold bg-cyan-500/10 px-2 py-1 border border-cyan-500/20 h-fit w-fit">CAO</span>
                </div>
              </div>
            </div>
          </section>

          {/* Phần IV: Trình xem file PDF trực tiếp */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-400 animate-pulse"></span> 
              IV. TÀI LIỆU BÁO CÁO GỐC (PDF)
            </h2>
            <div className="bg-[#0a0a12] border border-slate-800 p-2 shadow-2xl h-[700px] w-full relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-400"></div>
              
              <iframe 
                src="/lesson/lesson6.pdf" 
                className="w-full h-full border-none rounded-sm"
                title="Báo cáo Bài tập 6"
              />
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center tracking-widest">// SYSTEM.VIEWER: Trình biên dịch tích hợp kết nối hiển thị dữ liệu trực tiếp tệp tin lesson6.pdf.</p>
          </section>

        </motion.div>
      </div>
    </main>
  );
}